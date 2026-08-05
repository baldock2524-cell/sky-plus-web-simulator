// Expanded channel list for interactive page with more UK and international channels.
// NOTE: These are placeholders. Replace streamUrl with licensed HLS URLs you have rights to.

type Channel = {
  id: string;
  name: string;
  streamUrl: string;
  poster?: string;
};

const channels: Channel[] = [
  // Demo/test streams
  { id: 'mux-test', name: 'Mux Test Stream', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', poster: '/posters/poster-mux-test.svg' },
  { id: 'sintel-bitdash', name: 'Sintel (Bitdash)', streamUrl: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8', poster: '/posters/poster-sintel.svg' },
  { id: 'sample-mp4', name: 'Sample MP4 (external)', streamUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: '/posters/poster-sample.svg' },

  // UK major broadcasters (placeholders)
  { id: 'bbc-one', name: 'BBC One', streamUrl: '/streams/bbc-one.m3u8', poster: '/posters/poster-bbc-one.svg' },
  { id: 'bbc-two', name: 'BBC Two', streamUrl: '/streams/bbc-two.m3u8', poster: '/posters/poster-bbc-two.svg' },
  { id: 'bbc-three', name: 'BBC Three', streamUrl: '/streams/bbc-three.m3u8', poster: '/posters/poster-bbc-three.svg' },
  { id: 'bbc-four', name: 'BBC Four', streamUrl: '/streams/bbc-four.m3u8', poster: '/posters/poster-bbc-four.svg' },
  { id: 'bbc-news', name: 'BBC News', streamUrl: '/streams/bbc-news.m3u8', poster: '/posters/poster-bbc-news.svg' },

  { id: 'itv', name: 'ITV', streamUrl: '/streams/itv.m3u8', poster: '/posters/poster-itv.svg' },
  { id: 'itv2', name: 'ITV2', streamUrl: '/streams/itv2.m3u8', poster: '/posters/poster-itv2.svg' },
  { id: 'channel4', name: 'Channel 4', streamUrl: '/streams/channel4.m3u8', poster: '/posters/poster-channel4.svg' },
  { id: 'channel5', name: 'Channel 5', streamUrl: '/streams/channel5.m3u8', poster: '/posters/poster-channel5.svg' },

  // Sky placeholders
  { id: 'sky-news', name: 'Sky News', streamUrl: '/streams/sky-news.m3u8', poster: '/posters/poster-sky-news.svg' },
  { id: 'sky-atlantic', name: 'Sky Atlantic', streamUrl: '/streams/sky-atlantic.m3u8', poster: '/posters/poster-sky-atlantic.svg' },
  { id: 'sky-sports-main', name: 'Sky Sports Main Event', streamUrl: '/streams/sky-sports-main.m3u8', poster: '/posters/poster-sky-sports-main.svg' },

  // International channels (placeholders)
  { id: 'cnn', name: 'CNN', streamUrl: '/streams/cnn.m3u8', poster: '/posters/poster-cnn.svg' },
  { id: 'aljazeera', name: 'Al Jazeera', streamUrl: '/streams/aljazeera.m3u8', poster: '/posters/poster-aljazeera.svg' },
  { id: 'euronews', name: 'Euronews', streamUrl: '/streams/euronews.m3u8', poster: '/posters/poster-euronews.svg' },

  // Local sample
  { id: 'local-sample', name: 'Sample MP4 (local)', streamUrl: '/sample.mp4', poster: '/posters/poster-sample.svg' },
];

export default channels;
