#!/usr/bin/env node
const https = require('https');
const fs = require('fs').promises;
const URL = 'https://iptv-org.github.io/iptv/countries/uk.m3u';

async function fetchM3U() {
  const data = await new Promise((resolve, reject) => {
    https.get(URL, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error('Request Failed. Status Code: ' + res.statusCode));
        res.resume();
        return;
      }
      res.setEncoding('utf8');
      let raw = '';
      res.on('data', (chunk) => { raw += chunk; });
      res.on('end', () => resolve(raw));
    }).on('error', reject);
  });
  await fs.mkdir('data', { recursive: true });
  await fs.writeFile('data/uk.m3u', data, 'utf8');
  console.log('Saved data/uk.m3u');
}

fetchM3U().catch(err => { console.error(err); process.exit(1); });
