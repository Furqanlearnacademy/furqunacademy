const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const targets = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=61593364406077',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/rruhalquran/',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@ruhal-quranacademy',
  },
  {
    name: 'tiktok',
    url: 'https://www.tiktok.com/@ruh_alquranacademy',
  },
];

const outputDirs = [
  path.join(__dirname, '..', 'public', 'qr-codes'),
  path.join(__dirname, '..', 'public', 'QR_Codes_Ruh_AlQuran'),
];

outputDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function generateQRCodes() {
  for (const item of targets) {
    console.log(`Generating QR codes for ${item.name}: ${item.url}`);

    // Variants for SVGs
    const svgVariants = [
      { suffix: '-qr-transparent-black.svg', dark: '#000000', light: '#00000000' },
      { suffix: '-qr-transparent-dark.svg', dark: '#1B212A', light: '#00000000' },
      { suffix: '-qr-transparent-gold.svg', dark: '#C7A04B', light: '#00000000' },
      { suffix: '-qr-transparent-white.svg', dark: '#FFFFFF', light: '#00000000' },
      { suffix: '-qr.svg', dark: '#1B212A', light: '#00000000' },
      { suffix: '-qr-full.svg', dark: '#1B212A', light: '#FFFFFF' },
    ];

    for (const v of svgVariants) {
      const svgString = await QRCode.toString(item.url, {
        type: 'svg',
        margin: 2,
        color: {
          dark: v.dark,
          light: v.light,
        },
        errorCorrectionLevel: 'H',
      });

      for (const outDir of outputDirs) {
        const filePath = path.join(outDir, `${item.name}${v.suffix}`);
        fs.writeFileSync(filePath, svgString);
      }
    }

    // Variants for PNGs (high resolution 2048x2048)
    const pngVariants = [
      { suffix: '-qr-transparent-dark.png', dark: '#1B212AFF', light: '#00000000' },
      { suffix: '-qr-transparent-gold.png', dark: '#C7A04BFF', light: '#00000000' },
      { suffix: '-qr-transparent-white.png', dark: '#FFFFFFFF', light: '#00000000' },
      { suffix: '-qr.png', dark: '#1B212AFF', light: '#00000000' },
      { suffix: '-qr-full.png', dark: '#1B212AFF', light: '#FFFFFFFF' },
      { suffix: '-qr-theme1b212a-gold.png', dark: '#C7A04BFF', light: '#1B212AFF' },
      { suffix: '-qr-theme1b212a-white.png', dark: '#FFFFFFFF', light: '#1B212AFF' },
    ];

    for (const v of pngVariants) {
      const pngBuffer = await QRCode.toBuffer(item.url, {
        type: 'png',
        width: 1024,
        margin: 2,
        color: {
          dark: v.dark,
          light: v.light,
        },
        errorCorrectionLevel: 'H',
      });

      for (const outDir of outputDirs) {
        const filePath = path.join(outDir, `${item.name}${v.suffix}`);
        fs.writeFileSync(filePath, pngBuffer);
      }
    }
  }

  console.log('All QR codes generated successfully!');
}

generateQRCodes().catch(console.error);
