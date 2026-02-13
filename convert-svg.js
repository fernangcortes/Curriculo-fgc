import sharp from 'sharp';
import fs from 'fs';

const svgBuffer = fs.readFileSync('public/metatag.svg');

sharp(svgBuffer)
    .resize(1200, 630, { // Open Graph recommended size
        fit: 'contain',
        background: { r: 250, g: 249, b: 246, alpha: 1 } // #faf9f6
    })
    .png()
    .toFile('public/metatag.png')
    .then(info => { console.log('PNG created:', info); })
    .catch(err => { console.error('Error:', err); });
