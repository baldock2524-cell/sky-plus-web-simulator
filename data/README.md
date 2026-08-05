This folder stores externally-fetched channel lists.

To download the UK IPTV M3U playlist and save it as data/uk.m3u, run:

  node ./scripts/fetch-iptv-uk.js

Notes:
- The script fetches the playlist from:
  https://iptv-org.github.io/iptv/countries/uk.m3u
- Running the script will create/overwrite data/uk.m3u.
- You can parse the M3U file from your application code as needed.
