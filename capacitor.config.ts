
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.indgrowsive.pickuplines.app',
  appName: 'Pickup Lines Ultra',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    hostname: 'localhost'
  },
  plugins: {
    SplashScreen: false,
  },
};

export default config;

