const fs = require('fs');

const data = fs.readFileSync('youtube-playlists.json', 'utf8');

const targets = ['Saberes UEG', 'UEG Entrevista', 'Memórias UEG', 'UEG em Sintonia', 'Sua Saúde'];

for (const t of targets) {
  const index = data.indexOf(t);
  if (index !== -1) {
    const chunk = data.substring(Math.max(0, index - 2000), Math.min(data.length, index + 2000));
    console.log(`\n--- Match for ${t} ---`);
    const match = chunk.match(/(\/playlist\?list=PL[a-zA-Z0-9_-]+)/);
    if (match) {
        console.log("Found: " + match[1]);
    } else {
        console.log("No playlist ID found near: " + t);
    }
  } else {
    console.log("Not found: " + t);
  }
}
