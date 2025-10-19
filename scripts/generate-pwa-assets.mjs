
import {
  generateImages,
} from '@vite-pwa/assets-generator/api';
import {
  promises as fs
} from 'fs';
import path from 'path';

async function generatePwaAssets() {
  try {
    console.log('Generating PWA assets...');

    // Path to your logo
    const logoPath = path.resolve(process.cwd(), 'public/logo.svg');

    // Check if the logo file exists
    try {
      await fs.access(logoPath);
    } catch (e) {
      console.error(`Error: Logo file not found at ${logoPath}`);
      process.exit(1);
    }

    // Configuration for the asset generator
    const imageAssets = await generateImages([logoPath], {
      preset: 'minimal-2023',
      dest: 'public',
      log: true,
    });

    console.log('Successfully generated PWA image assets.');

    // Manually create or update the manifest.webmanifest file
    const manifest = {
      "name": "Pickup Lines Ultra",
      "short_name": "PL-Ultra",
      "description": "Your Emotion. Our Expression.",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#2A2A3A",
      "theme_color": "#2A2A3A",
      "icons": [{
          "src": "/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    };

    const manifestPath = path.resolve(process.cwd(), 'public/manifest.webmanifest');
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

    console.log(`Successfully created/updated manifest.webmanifest at ${manifestPath}`);

  } catch (error) {
    console.error('Error generating PWA assets:', error);
    process.exit(1);
  }
}

generatePwaAssets();
