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
    const data = await fetch('https://www.youtube.com/@UEGTV/playlists');
    
    // We can extract JSON from the initial HTML using regex:
    const regex = /var ytInitialData = (\{.*?\});<\/script>/;
    const match = data.match(regex);
    if (match) {
        let json;
        try {
            json = JSON.parse(match[1]);
        } catch(e) {}
        
        if(json) {
            // Find playlists... this is deep. Let's just output the whole thing and grep for Saberes UEG.
            // Actually let's stringify and regex search.
            const str = JSON.stringify(json);
            
            // Look for play list titles and ids in miniature JSON structures.
            // Usually looks like {"title":{"runs":[{"text":"Saberes UEG"}]},"playlistId":"PLkca..."
            // Or something similar. Let's extract "title" and "url" properties loosely.
        }
    }
    
    // Simpler: find all occurrences of "title":{"runs":[{"text":"..."}]} nearby "url":"/playlist?list=..."
    // Let's just dump the text values near playlist ids.
    const re = /"title":\{"runs":\[\{"text":"([^"]+)"\}\]\}.*?"url":"(\/playlist\?list=[^"]+)"/g;
    let m;
    while((m = re.exec(data)) !== null) {
        console.log(`Title: ${m[1]} -> ${m[2]}`);
    }
})();
