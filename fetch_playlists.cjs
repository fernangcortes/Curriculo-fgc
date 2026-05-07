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

async function getPlaylistTitles(id, name) {
    console.log(`\n--- Fetching playlist ${name} (${id}) ---`);
    const data = await fetch(`https://www.youtube.com/playlist?list=${id}`);
    const regex = /var ytInitialData = (\{.*?\});<\/script>/;
    const match = data.match(regex);
    if (!match) {
        console.log("ytInitialData not found.");
        return;
    }
    
    let json;
    try {
        json = JSON.parse(match[1]);
    } catch(e) {
        console.log("JSON parse error");
        return;
    }
    
    const titles = new Set();
    const str = JSON.stringify(json);
    // Find all titles in playlistVideoRenderer
    const re = /"playlistVideoRenderer":\{"videoId":"([^"]+)".*?"title":\{"runs":\[\{"text":"([^"]+)"\}\]/g;
    let m;
    while((m = re.exec(str)) !== null) {
        titles.add(`${m[2]} (https://www.youtube.com/watch?v=${m[1]})`);
    }
    
    titles.forEach(t => console.log(t));
}

(async () => {
    await getPlaylistTitles('PL42C7E87D795C8467', 'Curtas');
    await getPlaylistTitles('PLC5181488F1259DA9', 'Trabalhos');
})();
