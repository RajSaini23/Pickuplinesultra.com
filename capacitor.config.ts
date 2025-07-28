import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ecstatic.app',
  appName: 'Ecstatic',
  webDir: 'out',
  server: {
    // Required for Next.js to work in development with Capacitor
    // hostname: '192.168.1.100', // Replace with your local IP
    androidScheme: 'https',
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
