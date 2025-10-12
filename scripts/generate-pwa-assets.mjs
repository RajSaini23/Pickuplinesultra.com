
#!/usr/bin/env node

import { execSync } from 'child_process';

// This script is a workaround because the `pwa-assets-generator` package 
// is an ESM module, and we can't directly call it with `node`.
// `npm run pwa-assets` in package.json will execute this script.

try {
  console.log('Generating PWA assets...');
  // The command is now simpler as it's defined in package.json
  // We just need to make sure the package is installed.
  // The command from package.json: `pwa-assets-generator --preset minimal-2023 public/logo.svg`
  // We'll execute it directly here.
  execSync('npx pwa-assets-generator --preset minimal-2023 public/logo.svg', { stdio: 'inherit' });
  console.log('PWA assets generated successfully.');
} catch (error) {
  console.error('Failed to generate PWA assets:', error);
  process.exit(1);
}
