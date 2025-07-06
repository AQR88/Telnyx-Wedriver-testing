import { config as base } from "./wdio.conf.js";
export const config = {
  ...base,
  capabilities: [{ browserName: "firefox" }],
  services: ["geckodriver"],
};
