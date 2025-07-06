import { $, browser } from "@wdio/globals";
class TermsAndConditions {
  get h1Tithe() {
    return $("h1=Terms and Conditions of Service");
  }

  async termsAndConditionsPageAppers() {
    await this.h1Tithe.isDisplayed();
  }
}
export default new TermsAndConditions();
