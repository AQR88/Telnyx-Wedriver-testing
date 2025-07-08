import { $, browser } from "@wdio/globals";
class Comparing {
  get h2Title() {
    return $("h2=Compare our pricing");
  }

  async comparingTextAppear() {
    await this.h2Title.scrollIntoView();
    await this.h2Title.isDisplayed();
  }
}
export default new Comparing();
