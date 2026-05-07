const fs = require('fs');
const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

(async () => {
    const data = await fetch('https://www.youtube.com/playlist?list=PLC5181488F1259DA9');
    const regex = /var ytInitialData = (\{.*?\});<\/script>/;
    const match = data.match(regex);
    if (!match) return;
    
    let json = JSON.parse(match[1]);
    const titles = new Map();
    const str = JSON.stringify(json);
    const re = /"playlistVideoRenderer":\{"videoId":"([^"]+)".*?"title":\{"runs":\[\{"text":"([^"]+)"\}\]/g;
    let m;
    while((m = re.exec(str)) !== null) {
        titles.set(m[1], { id: m[1], title: m[2], url: 'https://www.youtube.com/watch?v=' + m[1] });
    }
    
    fs.writeFileSync('trabalhos-raw.json', JSON.stringify(Array.from(titles.values()), null, 2));
    console.log('Saved ' + titles.size + ' items to trabalhos-raw.json');
})();
