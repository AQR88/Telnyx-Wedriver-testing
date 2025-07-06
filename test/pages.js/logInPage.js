import { $, browser } from "@wdio/globals";
class LogInPage {
  async openLoginPage() {
    await browser.url("https://portal.telnyx.com/#/login/sign-in");
    await browser.pause(4000);
    await browser.setWindowSize(1440, 900);
  }
  get inputEmail() {
    return $('input[name="email"]');
  }
  get logInBtn() {
    return $("button=Log in");
  }
  get required() {
    return $("p=Required");
  }

  async fillEmailInput() {
    await this.inputEmail.setValue("email@gmail.com");
    await this.logInBtn.click();
    await this.required.isDisplayed();
  }
}
export default new LogInPage();
