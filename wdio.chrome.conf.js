import { config as baseConfig } from "./wdio.conf";

export const config = {
  ...baseConfig,
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 1,
      "goog:chromeOptions": {
        args: [
          "--headless=new",
          "--disable-gpu",
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--user-data-dir=/tmp/chrome-temp-profile",
        ],
      },
    },
  ],
};
