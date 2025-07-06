import { $, browser } from "@wdio/globals";
class PricingPage {
  get h1Pricing() {
    return $("h1=Pricing");
  }
  async pricingPageExist() {
    await this.h1Pricing.isDisplayed();
  }
}
export default new PricingPage();
