import { controlsState } from '@atoms/controlsState'
import ControlText from '@components/ControlVisualisers/ControlText'
import { Header, TitleHeader } from '@components/epg/Header'
import ErrorMessage from '@components/ErrorMessage'
import Colors from '@data/Colors'
import controlsShownStateSetter from '@helpers/controlsShownStateSetter'
import InnerLayout from '@layouts/InnerLayout'
import { makeStyles } from '@material-ui/core'
import { navigate } from 'gatsby'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

const useStyles = makeStyles({
  root: {
    background: `url(${require('@assets/images/guide-bg.sized.png').default})`,
  },
  message: {
    marginTop: 48,
    width: '85%',
    maxWidth: '85%',

    '& > header': {
      textAlign: 'left',
      paddingLeft: 42,
    },

    '& > article': {
      textAlign: 'left',
      paddingLeft: 42,
      fontFamily: 'Zurich',
      fontStretch: 'condensed',
      paddingTop: 0,
    },
  },
  list: {
    listStyle: 'none',
    '& > li': {
      position: 'relative',
      '&::before': {
        content: '"–"',
        display: 'inline-block',
        position: 'absolute',
        verticalAlign: 'middle',
        transform: 'translate(-24px, -2px) scaleX(1.25)',
      },
    },
  },
  controlPrompt: {
    fontFamily: 'ZurichBT',
    color: Colors.accent,
    width: '85%',
    maxWidth: '85%',
    margin: 'auto',
    fontSize: 24,
    marginTop: 48,
  },
})

const BoxOfficePage: React.FC = () => {
  const classes = useStyles()
  const setControlsVisible = useSetRecoilState(controlsState)

  function goBack(e: SkyControlPressedEvent) {
    if (e.detail.control === 'backUp') {
      navigate('/', { state: { selectedTab: 'BOX OFFICE' } })
    }
  }

  useEffect(() => {
    setControlsVisible(controlsShownStateSetter('backUp', true))
    document.addEventListener('skyControlPressed', goBack)

    return () => {
      setControlsVisible(controlsShownStateSetter('backUp', false))
      document.removeEventListener('skyControlPressed', goBack)
    }
  }, [])

  return (
    <InnerLayout>
      <div className={classes.root}>
        <Header logoText="box office">
          <TitleHeader heading="Box Office" />
        </Header>

        <ErrorMessage className={classes.message} horizontallyCentered title="BOX OFFICE" errorCode={null}>
          <p>This is a placeholder Box Office page. Implement listings and ordering here.</p>
        </ErrorMessage>

        <p className={classes.controlPrompt}>
          Press <ControlText>BACK UP</ControlText> to return
        </p>
      </div>
    </InnerLayout>
  )
}

export default BoxOfficePage
