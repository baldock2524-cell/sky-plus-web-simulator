import { controlsState, tvLicenseState } from '@atoms'
import FullScreenError from '@components/FullScreenError'
import type { Channel } from '@data/epg/AllChannels'
import type { Stream } from '@data/epg/streams/Streams'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import InnerLayout from '@layouts/InnerLayout'
import { Button, makeStyles } from '@material-ui/core'
import { navigate, PageProps } from 'gatsby'
import type Hls from 'hls.js'
import { useSnackbar } from 'notistack'
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import SearchAndScan from './SearchAndScan'

type Props = PageProps<object, { channel: Channel; streamData: Stream }>

const useStyles = makeStyles({
  root: {
    background: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
})

const WatchChannelPage: React.FC<Props> = ({ pageContext: { channel, streamData } }) => {
  const classes = useStyles()
  const [controlsVisible, setControlsVisible] = useRecoilState(controlsState)
  const tvLicenseStateValue = useRecoilValue(tvLicenseState)
  const [pageState, setPageState] = useState({
    error: false,
  })
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  function goBack(e: SkyControlPressedEvent) {
    const control = e.detail.control

    if (['backUp'].includes(control)) {
      navigate('/', { state: { selectedTab: 'GUIDE' } })
    }
  }

  if (!controlsVisible.backUp) setControlsVisible(controlsShownStateSetter(['backUp'], true))

  useEffect(() => {
    document.addEventListener('skyControlPressed', goBack)
    window.__bgAudio.pause()

    let hlsInstance: Hls | null = null

    if (!tvLicenseStateValue.hasTvLicense) {
      setPageState(s => ({ ...s, error: true }))
      return
    }

    const videoEl = videoRef.current
    if (!videoEl) return

    const streamUrl = streamData.streamUrl

    const canPlayNative = videoEl.canPlayType('application/vnd.apple.mpegurl') !== ''

    if (canPlayNative) {
      videoEl.src = streamUrl
      videoEl
        .play()
        .catch(() => {
          enqueueSnackbar('TV stream is paused', { variant: 'warning', persist: true, key: 'STREAM_PAUSED' })
        })
    } else if (window.Hls && window.Hls.isSupported()) {
      hlsInstance = new window.Hls({ debug: false })
      hlsInstance.loadSource(streamUrl)
      hlsInstance.attachMedia(videoEl)

      hlsInstance.on(window.Hls.Events.ERROR, (_eventName, data) => {
        console.warn('HLS error', data)
        if (data && data.type === 'networkError') setPageState(s => ({ ...s, error: true }))
      })

      hlsInstance.on(window.Hls.Events.MEDIA_ATTACHED, () => {
        videoEl
          .play()
          .catch(() => {
            enqueueSnackbar('TV stream is paused', { variant: 'warning', persist: true, key: 'STREAM_PAUSED' })
          })
      })
    } else {
      setPageState(s => ({ ...s, error: true }))
    }

    return () => {
      document.removeEventListener('skyControlPressed', goBack)
      if (controlsVisible.backUp) setControlsVisible(controlsShownStateSetter(['backUp'], false))
      if (hlsInstance) hlsInstance.destroy()
      closeSnackbar('STREAM_PAUSED')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streamData.streamUrl, tvLicenseStateValue.hasTvLicense])

  return (
    <InnerLayout>
      <div className={classes.root}>
        {tvLicenseStateValue.hasTvLicense && !pageState.error && <video ref={videoRef} className={classes.video} />}
        {(!tvLicenseStateValue.hasTvLicense || pageState.error) && (
          <FullScreenError
            title={pageState.error ? 'Unable to play stream' : 'TV licence required'}
            description={pageState.error ? 'The stream could not be loaded. Check console for HLS errors (CORS/geo-block).' : 'You need a TV licence to watch live TV.'}
          />
        )}
      </div>
    </InnerLayout>
  )
}

export default WatchChannelPage
