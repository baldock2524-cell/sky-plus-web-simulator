export interface IPTVChannel {
  id: number;
  name: string;
  logo: string;
  m3u8Url?: string;
  hlsStream?: string;
  category: string;
}

export const IPTV_CHANNELS: IPTVChannel[] = [
  {
    id: 1,
    name: "BBC One",
    logo: "https://via.placeholder.com/200x100?text=BBC+One",
    category: "Public Broadcasting",
    hlsStream: "#EXTINF:-1 tvg-id=\"bbcone\" tvg-name=\"BBC One\" tvg-logo=\"https://via.placeholder.com/200x100?text=BBC+One\",BBC One"
  },
  {
    id: 2,
    name: "BBC Two",
    logo: "https://via.placeholder.com/200x100?text=BBC+Two",
    category: "Public Broadcasting",
    hlsStream: "#EXTINF:-1 tvg-id=\"bbctwo\" tvg-name=\"BBC Two\" tvg-logo=\"https://via.placeholder.com/200x100?text=BBC+Two\",BBC Two"
  },
  {
    id: 3,
    name: "BBC Three",
    logo: "https://via.placeholder.com/200x100?text=BBC+Three",
    category: "Public Broadcasting",
    hlsStream: "#EXTINF:-1 tvg-id=\"bbcthree\" tvg-name=\"BBC Three\" tvg-logo=\"https://via.placeholder.com/200x100?text=BBC+Three\",BBC Three"
  },
  {
    id: 4,
    name: "BBC Four",
    logo: "https://via.placeholder.com/200x100?text=BBC+Four",
    category: "Public Broadcasting",
    hlsStream: "#EXTINF:-1 tvg-id=\"bbcfour\" tvg-name=\"BBC Four\" tvg-logo=\"https://via.placeholder.com/200x100?text=BBC+Four\",BBC Four"
  },
  {
    id: 5,
    name: "ITV",
    logo: "https://via.placeholder.com/200x100?text=ITV",
    category: "Commercial",
    hlsStream: "#EXTINF:-1 tvg-id=\"itv\" tvg-name=\"ITV\" tvg-logo=\"https://via.placeholder.com/200x100?text=ITV\",ITV"
  },
  {
    id: 6,
    name: "ITV2",
    logo: "https://via.placeholder.com/200x100?text=ITV2",
    category: "Commercial",
    hlsStream: "#EXTINF:-1 tvg-id=\"itv2\" tvg-name=\"ITV2\" tvg-logo=\"https://via.placeholder.com/200x100?text=ITV2\",ITV2"
  },
  {
    id: 7,
    name: "ITV3",
    logo: "https://via.placeholder.com/200x100?text=ITV3",
    category: "Commercial",
    hlsStream: "#EXTINF:-1 tvg-id=\"itv3\" tvg-name=\"ITV3\" tvg-logo=\"https://via.placeholder.com/200x100?text=ITV3\",ITV3"
  },
  {
    id: 8,
    name: "ITV4",
    logo: "https://via.placeholder.com/200x100?text=ITV4",
    category: "Commercial",
    hlsStream: "#EXTINF:-1 tvg-id=\"itv4\" tvg-name=\"ITV4\" tvg-logo=\"https://via.placeholder.com/200x100?text=ITV4\",ITV4"
  },
  {
    id: 9,
    name: "Channel 4",
    logo: "https://via.placeholder.com/200x100?text=Channel+4",
    category: "Commercial",
    hlsStream: "#EXTINF:-1 tvg-id=\"channel4\" tvg-name=\"Channel 4\" tvg-logo=\"https://via.placeholder.com/200x100?text=Channel+4\",Channel 4"
  },
  {
    id: 10,
    name: "Channel 5",
    logo: "https://via.placeholder.com/200x100?text=Channel+5",
    category: "Commercial",
    hlsStream: "#EXTINF:-1 tvg-id=\"channel5\" tvg-name=\"Channel 5\" tvg-logo=\"https://via.placeholder.com/200x100?text=Channel+5\",Channel 5"
  },
  {
    id: 11,
    name: "London Live",
    logo: "https://via.placeholder.com/200x100?text=London+Live",
    category: "Regional",
    hlsStream: "#EXTINF:-1 tvg-id=\"londonlive\" tvg-name=\"London Live\" tvg-logo=\"https://via.placeholder.com/200x100?text=London+Live\",London Live"
  },
  {
    id: 12,
    name: "Sky One",
    logo: "https://via.placeholder.com/200x100?text=Sky+One",
    category: "Premium",
    hlsStream: "#EXTINF:-1 tvg-id=\"skyone\" tvg-name=\"Sky One\" tvg-logo=\"https://via.placeholder.com/200x100?text=Sky+One\",Sky One"
  },
  {
    id: 13,
    name: "Sky Atlantic",
    logo: "https://via.placeholder.com/200x100?text=Sky+Atlantic",
    category: "Premium",
    hlsStream: "#EXTINF:-1 tvg-id=\"skyatlantic\" tvg-name=\"Sky Atlantic\" tvg-logo=\"https://via.placeholder.com/200x100?text=Sky+Atlantic\",Sky Atlantic"
  },
  {
    id: 14,
    name: "Sky Witness",
    logo: "https://via.placeholder.com/200x100?text=Sky+Witness",
    category: "Premium",
    hlsStream: "#EXTINF:-1 tvg-id=\"skywitness\" tvg-name=\"Sky Witness\" tvg-logo=\"https://via.placeholder.com/200x100?text=Sky+Witness\",Sky Witness"
  },
  {
    id: 15,
    name: "Alibi",
    logo: "https://via.placeholder.com/200x100?text=Alibi",
    category: "Entertainment",
    hlsStream: "#EXTINF:-1 tvg-id=\"alibi\" tvg-name=\"Alibi\" tvg-logo=\"https://via.placeholder.com/200x100?text=Alibi\",Alibi"
  },
  {
    id: 16,
    name: "Gold",
    logo: "https://via.placeholder.com/200x100?text=Gold",
    category: "Entertainment",
    hlsStream: "#EXTINF:-1 tvg-id=\"gold\" tvg-name=\"Gold\" tvg-logo=\"https://via.placeholder.com/200x100?text=Gold\",Gold"
  },
  {
    id: 17,
    name: "Dave",
    logo: "https://via.placeholder.com/200x100?text=Dave",
    category: "Entertainment",
    hlsStream: "#EXTINF:-1 tvg-id=\"dave\" tvg-name=\"Dave\" tvg-logo=\"https://via.placeholder.com/200x100?text=Dave\",Dave"
  },
  {
    id: 18,
    name: "Comedy Central",
    logo: "https://via.placeholder.com/200x100?text=Comedy+Central",
    category: "Entertainment",
    hlsStream: "#EXTINF:-1 tvg-id=\"comedycentral\" tvg-name=\"Comedy Central\" tvg-logo=\"https://via.placeholder.com/200x100?text=Comedy+Central\",Comedy Central"
  }
];

export const getChannelById = (id: number): IPTVChannel | undefined => {
  return IPTV_CHANNELS.find(channel => channel.id === id);
};

export const getChannelsByCategory = (category: string): IPTVChannel[] => {
  return IPTV_CHANNELS.filter(channel => channel.category === category);
};

export const getAllChannels = (): IPTVChannel[] => {
  return IPTV_CHANNELS;
};
