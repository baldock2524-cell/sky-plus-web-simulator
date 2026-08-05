// Sky channel placeholders for the interactive page.
// IMPORTANT:
// - These entries are placeholders only. Replace each streamUrl with the real HLS (.m3u8) URL
//   that you have the rights to use. Many Sky/DRM streams require authentication and cannot be
//   directly embedded without a proper provider license or signed URLs.
// - Place any local test HLS files or MP4s under `static/streams/` and posters under `static/posters/`.

type Channel = {
  id: string;
  name: string;
  streamUrl: string; // Replace with your real .m3u8 or .mp4 URL
  poster?: string;
};

const channels: Channel[] = [
  // Keep the existing demo/sample entries
  {
    id: 'mux-test',
    name: 'Mux Test Stream',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    poster: '/posters/poster-test.jpg',
  },
  {
    id: 'sintel-bitdash',
    name: 'Sintel (Bitdash)',
    streamUrl: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    poster: '/posters/poster-sintel.jpg',
  },

  // Sky channel placeholders — replace streamUrl values with your licensed HLS URLs
  {
    id: 'sky-news',
    name: 'Sky News',
    streamUrl: '/streams/sky-news.m3u8',
    poster: '/posters/sky-news.jpg',
  },
  {
    id: 'sky-one',
    name: 'Sky One',
    streamUrl: '/streams/sky-one.m3u8',
    poster: '/posters/sky-one.jpg',
  },
  {
    id: 'sky-atlantic',
    name: 'Sky Atlantic',
    streamUrl: '/streams/sky-atlantic.m3u8',
    poster: '/posters/sky-atlantic.jpg',
  },
  {
    id: 'sky-arts',
    name: 'Sky Arts',
    streamUrl: '/streams/sky-arts.m3u8',
    poster: '/posters/sky-arts.jpg',
  },
  {
    id: 'sky-sports-main',
    name: 'Sky Sports Main Event',
    streamUrl: '/streams/sky-sports-main.m3u8',
    poster: '/posters/sky-sports-main.jpg',
  },
  {
    id: 'sky-sports-football',
    name: 'Sky Sports Football',
    streamUrl: '/streams/sky-sports-football.m3u8',
    poster: '/posters/sky-sports-football.jpg',
  },
  {
    id: 'sky-cinema-premiere',
    name: 'Sky Cinema Premiere',
    streamUrl: '/streams/sky-cinema-premiere.m3u8',
    poster: '/posters/sky-cinema-premiere.jpg',
  },
  {
    id: 'sky-golf',
    name: 'Sky Sports Golf',
    streamUrl: '/streams/sky-golf.m3u8',
    poster: '/posters/sky-golf.jpg',
  },

  // Local sample entry
  {
    id: 'local-sample',
    name: 'Sample MP4 (local)',
    streamUrl: '/sample.mp4',
    poster: '/posters/poster-sample.jpg',
  },
];

export default channels;
