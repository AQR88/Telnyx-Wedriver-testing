import { $, browser } from "@wdio/globals";
class ContactUs {
  get contactTitle() {
    return $("h1=Talk to an expert");
  }
  async contactUsWindowDisplayed() {
    await this.contactTitle.isElementDisplayed();
  }
}
export default new ContactUs();
