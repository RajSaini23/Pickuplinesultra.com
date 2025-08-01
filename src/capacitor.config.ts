
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ecstaticquotes.app',
  appName: 'Ecstatic',
  webDir: 'out',
  server: {
    androidScheme: 'https',
  },
  android: {
    minSdkVersion: 21,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 4000,
      launchAutoHide: true,
      backgroundColor: "#2A2A3A",
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: true,
      useDialog: false,
    },
  },
};

export default config;
