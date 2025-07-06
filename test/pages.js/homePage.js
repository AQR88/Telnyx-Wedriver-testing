import { $, browser } from "@wdio/globals";

class HomePage {
  async open() {
    await browser.url("https://telnyx.com/");
    await browser.setWindowSize(1440, 900);
  }

  get title() {
    return $("mark=Voice AI");
  }

  async titleIsDisplayed() {
    await this.title.waitForDisplayed({ timeout: 5000 });
    await this.title.isDisplayed();
  }

  get signUpButton() {
    return $('a[href="/sign-up"]');
  }
  async signUpButtonClick() {
    await this.signUpButton.waitForDisplayed({ timeout: 5000 });
    await this.signUpButton.click();
  }
  get products() {
    return $('button[aria-haspopup="menu"]');
  }
  async onProductsClick() {
    await this.products.waitForDisplayed({ timeout: 5000 });
    await this.products.click();
  }
  get VoiceAi() {
    return $('a[href="/products/voice-ai"]');
  }
  async onVoiceAIClick() {
    await this.VoiceAi.waitForDisplayed({ timeout: 5000 });
    await this.VoiceAi.click();
  }
  get assistant() {
    return $(".c-bGYNvC");
  }
  async assistantAIWindow() {
    await this.assistant.click();
  }
  get dialogue() {
    return $("h4=Ask our AI assistant");
  }
  async isDialogueVisible() {
    await this.dialogue.isDisplayed();
  }
  get contactUs() {
    return $('a[href="/contact-us"]');
  }
  async clickOnContactUsBtn() {
    await this.contactUs.click();
  }

  get linkedin() {
    return $('a[href="https://www.linkedin.com/company/telnyx/"]');
  }

  async clickOnLinkedin() {
    await this.linkedin.scrollIntoView();
    await this.linkedin.click();
  }
  get leadSpecialistLabel() {
    return $("#lead-specialist");
  }
  get ericaAI() {
    return $("#erica");
  }
  get letsSpeak() {
    return $("button=Let's Talk");
  }
  get callInProgress() {
    return $("h3=Call in progress...");
  }

  async aiVoiceChoice() {
    await this.leadSpecialistLabel.click();
    await this.ericaAI.click();
    await this.letsSpeak.click();
    await this.callInProgress.isDisplayed();
  }
  get pricing() {
    return $("a=Pricing");
  }
  async pricingBtnClick() {
    await this.pricing.click();
  }
  get blogArticles() {
    return $("a=See All Blog Articles");
  }
  async blogArticlesChecking() {
    await this.blogArticles.scrollIntoView();
    await this.blogArticles.click();
  }
  get burger() {
    return $("button=Open main menu");
  }
  async burgerMenuExist() {
    await browser.url("https://telnyx.com/");
    await browser.setWindowSize(768, 680);
    await this.burger.isDisplayed();
  }
  get contactFormBtn() {
    return $("a=Contact us");
  }
  async contactUsButtonClick() {
    await this.contactFormBtn.click();
  }

  get exploreOurAIAsistant() {
    return $("a=EXPLORE OUR AI ASSISTANT");
  }
  async exploreOurAsistantBtnIsVisible() {
    await this.exploreOurAIAsistant.scrollIntoView();
    await this.exploreOurAIAsistant.isDisplayed();
  }

  get compereLink() {
    return $("a=Telnyx vs. Twilio");
  }

  async clickOnComparingLink() {
    await this.compereLink.scrollIntoView();
    await this.compereLink.click();
  }
  get terms() {
    return $("a=Terms and conditions of service");
  }
  async termsAndConditionsPage() {
    await this.terms.scrollIntoView();
    await this.terms.click();
    await browser.pause(3000);
  }
  get terms() {
    return $("button=Resources");
  }
  get templates() {
    return $("a=AI Templates");
  }
  get templatesList() {
    return $("h2=View all templates");
  }

  async openTemplatesList() {
    await this.terms.click();
    await this.templates.click();
    await this.templatesList.isDisplayed();
  }
  get financeBtn() {
    return $("button=Finance and insurance");
  }
  get text() {
    return $("#fraud-detection-alerts");
  }
  async financeAndInsuranceBtn() {
    await this.financeBtn.scrollIntoView();
    await this.financeBtn.click();
    await this.text.isDisplayed();
  }
}
export default new HomePage();
