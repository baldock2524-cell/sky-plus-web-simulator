import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

type Props = {
  src: string; // .m3u8 or direct mp4
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  className?: string;
};

export default function InteractiveVideo({
  src,
  poster,
  controls = true,
  autoPlay = false,
  muted = false,
  className,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    const isM3U8 = !!src && src.endsWith('.m3u8');

    // Cleanup previous source
    video.pause();
    video.removeAttribute('src');
    video.load();

    if (isM3U8 && Hls.isSupported()) {
      hls = new Hls();
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls!.loadSource(src);
      });
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.warn('HLS error', event, data);
      });
    } else if (isM3U8 && (video.canPlayType('application/vnd.apple.mpegurl') || (video as any).canPlayType?.('application/vnd.apple.mpegurl'))) {
      // Native HLS (Safari / iOS)
      video.src = src;
    } else {
      // Progressive file (mp4)
      video.src = src;
    }

    if (autoPlay) {
      // try to play, ignoring returned promise
      video.play().catch(() => {
        // Autoplay might be blocked; keep muted to allow autoplay in some browsers
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
        hls = null;
      }
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    };
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      className={className}
      playsInline
      style={{ width: '100%', height: '100%', background: 'black' }}
    />
  );
}
