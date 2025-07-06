import { $, browser } from "@wdio/globals";
class SignUpPage {
  async signUpPageOpen() {
    await browser.url("https://telnyx.com/sign-up");
    await browser.pause(3000);
    await browser.setWindowSize(1440, 900);
  }
  get signUpBtn() {
    return $("button=SIGN UP");
  }
  async clickOnSignUpBtn() {
    await this.signUpBtn.scrollIntoView();
    await this.signUpBtn.click();
  }
  get msg() {
    return $("#email_message");
  }
  async validationMsgIsVisible() {
    await this.msg.isDisplayed();
  }
  get email() {
    return $("#email");
  }
  get firstName() {
    return $("#first_name");
  }
  get lastName() {
    return $("#last_name");
  }
  get password() {
    return $("#password");
  }
  get checkbox() {
    return $("#terms_and_conditions");
  }
  get signUpButton() {
    return $('button[type="submit"]=SIGN UP');
  }
  async fillRegistrationForm() {
    await this.email.setValue(`user_${Date.now()}@gmail.com`);
    await this.firstName.setValue(`userName_${Date.now()}`);
    await this.lastName.setValue(`lastName_${Date.now()}`);
    await this.password.setValue(`P@ssw_${Date.now()}`);
    await this.checkbox.click();
    await this.signUpButton.click();
  }
}

export default new SignUpPage();
