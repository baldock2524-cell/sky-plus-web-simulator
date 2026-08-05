// Minimal channel list used by the interactive page.
// Replace streamUrl values with your real .m3u8 or .mp4 URLs.
// For local MP4 test files, place them in the `static/` folder and reference them as '/filename.mp4'.

type Channel = {
  id: string;
  name: string;
  streamUrl: string;
  poster?: string;
};

const channels: Channel[] = [
  {
    id: 'test-hls',
    name: 'Test HLS (Mux demo)',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    poster: '/poster-test.jpg',
  },
  {
    id: 'sample-mp4',
    name: 'Sample MP4 (local)',
    streamUrl: '/sample.mp4',
    poster: '/poster-sample.jpg',
  },
];

export default channels;
