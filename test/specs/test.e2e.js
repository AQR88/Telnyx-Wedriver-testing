import { browser, expect } from "@wdio/globals";
import HomePage from "../pages.js/homePage";
// import SignUpPage from "../pages.js/signUpPage";
// import ContactUs from "../pages.js/contactUsPage";
// import LogInPage from "../pages.js/logInPage";
// import PricingPage from "../pages.js/pricingPage";
// import BlogPage from "../pages.js/blogPage.js";
// import ContactUsForm from "../pages.js/contactUsFormPage.js";
// import Comparing from "../pages.js/comparingPage.js";
// import TermsAndConditions from "../pages.js/termsPage.js";

describe("Telnyx testing", () => {
  it("should load homepage with corect title", async () => {
    await HomePage.open();
    await HomePage.titleIsDisplayed();
  });
  // it("should open Sign up page", async () => {
  //   await HomePage.open();
  //   await HomePage.signUpButtonClick();
  //   await browser.url("https://telnyx.com/sign-up");
  //   await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
  });
  // it("should show validation message", async () => {
  //   await SignUpPage.signUpPageOpen();
  //   await SignUpPage.clickOnSignUpBtn();
  //   await SignUpPage.validationMsgIsVisible();
  // });
  // it("navigate to VoiceAI page ", async () => {
  //   await HomePage.open();
  //   await browser.pause(3000);
  //   await HomePage.onProductsClick();
  //   await HomePage.onVoiceAIClick();
  //   await expect(browser).toHaveUrl(
  //     "https://telnyx.com/products/voice-ai-agents"
  //   );
  //   it("should show AI asistant popup", async () => {
  //     await HomePage.open();
  //     await HomePage.assistantAIWindow();
  //     await HomePage.isDialogueVisible();
  //   });
  //   it("should navigate to 'Contact us' page", async () => {
  //     await HomePage.open();
  //     await HomePage.clickOnContactUsBtn();
  //     await ContactUs.contactUsWindowDisplayed();
  //   });
  // });
  // it("should find Linkedin in footer", async () => {
  //   await HomePage.open();
  //   await HomePage.clickOnLinkedin();
  // });
  // it("should sound AI voice", async () => {
  //   await HomePage.open();
  //   await HomePage.aiVoiceChoice();
  // });
  // it("should registrate with valid data", async () => {
  //   await SignUpPage.signUpPageOpen();
  //   await SignUpPage.fillRegistrationForm();
  // });
  // it("login with empty password field", async () => {
  //   await LogInPage.openLoginPage();
  //   await LogInPage.fillEmailInput();
  // });
  // it("should navigate to Pricing page", async () => {
  //   await HomePage.open();
  //   await HomePage.pricingBtnClick();
  //   await PricingPage.pricingPageExist();
  // });
  // it("blog page is working", async () => {
  //   await HomePage.open();
  //   await HomePage.blogArticlesChecking();
  //   await BlogPage.blogPageExist();
  // });
  // it(" should Telnyx logo redirect to main paige", async () => {
  //   await BlogPage.openBlogPage();
  //   await BlogPage.logoClick();
  //   await expect(browser).toHaveUrl("https://telnyx.com/");
  // });
  // it("should burger menu exist", async () => {
  //   await HomePage.burgerMenuExist();
  // });

  // it(" should show 'Required' message when submitting empty form", async () => {
  //   await HomePage.open();
  //   await HomePage.contactUsButtonClick();
  //   await ContactUsForm.requiredMaMessageVisible();
  // });

  // it(" visibility of AI Asistant button", async () => {
  //   await HomePage.open();
  //   await HomePage.exploreOurAsistantBtnIsVisible();
  // });

  // it(" comparing page is exist", async () => {
  //   await HomePage.open();
  //   await HomePage.clickOnComparingLink();
  //   await Comparing.comparingTextAppear();
  // });
  // it("should show Terms and conditions page", async () => {
  //   await HomePage.open();
  //   await TermsAndConditions.termsAndConditionsPageAppers();
  // });

  // it("should show AI templates list page ", async () => {
  //   await HomePage.open();
  //   await HomePage.openTemplatesList();
  // });
  // it(" should show Finance and Insurance chapter", async () => {
  //   await HomePage.open();
  //   await HomePage.financeAndInsuranceBtn();
  // });
});
