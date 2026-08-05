# Sky+ Web Simulator

A recreation of the old Sky+ Box EPG on the web.

Created with React and statically rendered using Gatsby.js.

## Live demo

- [Live demo — sky-epg.davwheat.dev](https://sky-epg.davwheat.dev/)
- [Disney Jr HD — Live demo README](https://github.com/baldock2524-cell/sky-plus-web-simulator/blob/main/README.md#live-demo)

## HLS streams

A sample HLS playlist is included in the repository at `streams.m3u8` with a couple of public test streams and a placeholder entry. You can use that playlist in players that accept remote playlists, or replace the placeholder with your own .m3u8 URLs.

- Playlist (repo): `streams.m3u8` — https://github.com/baldock2524-cell/sky-plus-web-simulator/blob/main/streams.m3u8
- Raw playlist (direct): https://raw.githubusercontent.com/baldock2524-cell/sky-plus-web-simulator/main/streams.m3u8

How to use

- In VLC: Media → Open Network Stream → paste the .m3u8 URL (raw or any entry URL) and play.
- In browsers: Safari supports HLS natively via the `<video>` element. For Chrome/Firefox, use a JavaScript HLS library such as `hls.js` to play HLS streams in a `<video>` tag.

Example quick test (open locally as an HTML file):

```html name=player-example.html
<!doctype html>
<html>
  <head><meta charset="utf-8"><title>HLS test player</title></head>
  <body>
    <video id="video" controls width="720"></video>
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <script>
      const video = document.getElementById('video');
      const url = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'; // change to any .m3u8
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(()=>{}));
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', () => video.play().catch(()=>{}));
      } else {
        console.error('No HLS support available');
      }
    </script>
  </body>
</html>
```

Ownership and rights

You confirmed you own the rights to the streams you intend to add. The repository currently contains public test streams and a placeholder entry; if you want me to add your real .m3u8 URLs into `streams.m3u8` and add a short legal note, paste them here and I will commit the change.

## Interactive services

A collection of interactive demos and related links for this project:

- [Official project repository on GitHub](https://github.com/baldock2524-cell/sky-plus-web-simulator)
- [Official live demo — sky-epg.davwheat.dev](https://sky-epg.davwheat.dev/)
- [Sky Games — interactive demo (STB Gaming)](https://stb-gaming.github.io/sky-games/)

## Features

- Real EPG background music as found on old Sky boxes
- **Real-time EPG listings**, retrieved through Sky's own EPG API
- View template recreations of some old interactive services (only Directgov as of now)
- Fast, performant and statically generated using React + Gatsby

## Future developments

- Recreate more interactive services
  - HTML5 Sky Games?
- Watch live Freeview TV via `.m3u8` streams
- Working planner page
- Working A-Z listings page
- Working Anytime TV page

## License

This project is licensed under the Mozilla Public License 2.0. This license only covers code files and assets created by myself, and not any third-party assets and files, such as fonts or images.

Sky is the registered trademark of Sky Group Limited. The background music is the copyright of its respective owners and is being used in good faith without any intent to be monetised or replace t[...]