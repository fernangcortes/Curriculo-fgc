import { execSync } from 'child_process';

const channels = [
  "Saberes UEG",
  "Memórias UEG",
  "UEG em Sintonia",
  "Sua Saúde UEG"
];

const uegTvChannelId = 'UCXXXX'; // We can just search with youtube API if we had key, or duckduckgo html.

async function searchDuckDuckGo(query: string) {
  const res = await fetch(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`);
  const text = await res.text();
  const matches = [...text.matchAll(/https:\/\/www\.youtube\.com\/playlist\?list=[A-Za-z0-9_-]+/g)];
  return matches.map(m => m[0]);
}

async function main() {
  for (const c of channels) {
    const urls = await searchDuckDuckGo(`site:youtube.com/playlist "UEG TV" "${c}"`);
    console.log(c, urls.slice(0, 2));
  }
}
main();
