
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.f5b5be4a0bd4468b8f089a73b6374eb7',
  appName: 'siksha-sparkle-learn-01',
  webDir: 'dist',
  server: {
    url: "https://f5b5be4a-0bd4-468b-8f08-9a73b6374eb7.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null,
      releaseType: null,
      signingType: null,
    }
  }
};

export default config;
