import axios from "axios";
import HLS from "hls.js";

export interface StreamSource {
  url: string;
  type: "hls" | "dash" | "http";
}

export class IPTVPlayer {
  private video: HTMLVideoElement | null = null;
  private hls: HLS | null = null;

  constructor(videoElement: HTMLVideoElement) {
    this.video = videoElement;
    this.initializeHLS();
  }

  private initializeHLS(): void {
    if (!this.video) return;

    if (HLS.isSupported()) {
      this.hls = new HLS({
        enableWorker: true,
        lowLatencyMode: true,
        fragLoadingTimeOut: 20000,
        fragLoadingMaxRetry: 3
      });
      this.hls.attachMedia(this.video);
    } else if (this.video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      this.video.type = "application/vnd.apple.mpegurl";
    }
  }

  public loadStream(streamUrl: string): void {
    if (!this.video || !this.hls) return;

    this.hls.loadSource(streamUrl);
    this.hls.on(HLS.Events.MANIFEST_PARSED, () => {
      this.video!.play().catch(err => {
        console.error("Autoplay failed:", err);
      });
    });

    this.hls.on(HLS.Events.ERROR, (event, data) => {
      console.error("HLS Error:", data);
    });
  }

  public play(): void {
    this.video?.play();
  }

  public pause(): void {
    this.video?.pause();
  }

  public stop(): void {
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
    if (this.video) {
      this.video.src = "";
    }
  }

  public setVolume(volume: number): void {
    if (this.video) {
      this.video.volume = Math.max(0, Math.min(1, volume));
    }
  }

  public mute(): void {
    if (this.video) {
      this.video.muted = true;
    }
  }

  public unmute(): void {
    if (this.video) {
      this.video.muted = false;
    }
  }

  public destroy(): void {
    this.stop();
    this.video = null;
  }
}

export const fetchM3U8Playlist = async (url: string): Promise<string> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching M3U8 playlist:", error);
    throw error;
  }
};

export const parseM3U8 = (content: string): string[] => {
  const lines = content.split("\n");
  const urls: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line && !line.startsWith("#") && line.includes("://")) {
      urls.push(line);
    }
  }

  return urls;
};
