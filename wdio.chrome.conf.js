import { config as baseConfig } from "../Telnyx-Wedriver-testing/wdio.conf.js";

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
