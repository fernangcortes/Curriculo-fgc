const fs = require('fs');
const https = require('https');

https.get('https://www.youtube.com/@UEGTV/playlists', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
         fs.writeFileSync('youtube-playlists.json', data);
      });
});
