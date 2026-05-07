const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./new_data.json', 'utf8'));

let constants = fs.readFileSync('./constants.ts', 'utf8');

const mapping = {
  'cinema_longa': 'CINEMA_LONGA',
  'cinema_curta': 'CINEMA_CURTA',
  'jornalismo_grande_reportagem': 'JORNALISMO_GRANDE_REPORTAGEM',
  'jornalismo_reportagem': 'JORNALISMO_REPORTAGEM',
  'jornalismo_serie': 'JORNALISMO_SERIE',
  'institucional': 'INSTITUCIONAL',
  'programa_tv': 'PROGRAMA_TV',
  'transmissao_eventos': 'TRANSMISSAO_EVENTOS',
  'transmissao_shows': 'TRANSMISSAO_SHOWS',
  'transmissao_videoaulas': 'TRANSMISSAO_VIDEOAULAS',
};

constants = constants.replace(/export const FILMOGRAPHY: FilmEntry\[\] = \[[\s\S]*?\];/, 'export const FILMOGRAPHY: FilmEntry[] = [];');
constants = constants.replace(/export const DOCUMENTARIES: FilmEntry\[\] = \[[\s\S]*?\];/, 'export const DOCUMENTARIES: FilmEntry[] = [];');
constants = constants.replace(/export const MUSIC_VIDEOS: FilmEntry\[\] = \[[\s\S]*?\];/, 'export const MUSIC_VIDEOS: FilmEntry[] = ' + JSON.stringify(data.music_video, null, 2) + ';');


for (const [key, variable] of Object.entries(mapping)) {
  const jsonArr = JSON.stringify(data[key], null, 2);
  const regex1 = new RegExp('export const ' + variable + ': FilmEntry\\[\\] = \\[.*?\\];', 's');
  const regex2 = new RegExp('export const ' + variable + ': FilmEntry\\[\\] = \\[\\];');
  
  if (constants.match(regex1)) {
    constants = constants.replace(regex1, 'export const ' + variable + ': FilmEntry[] = ' + jsonArr + ';');
  } else if (constants.match(regex2)) {
    constants = constants.replace(regex2, 'export const ' + variable + ': FilmEntry[] = ' + jsonArr + ';');
  }
}

fs.writeFileSync('./constants.ts', constants);
console.log('constants.ts updated');
