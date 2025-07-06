import { $, browser } from "@wdio/globals";
class ContactUsForm {
  get submitBtn() {
    return $("button=Submit");
  }
  get validationMsg() {
    return $("#ValidMsgReason_for_Contact__c");
  }

  async requiredMaMessageVisible() {
    await this.submitBtn.click();
    await this.validationMsg.isDisplayed();
  }
}
export default new ContactUsForm();
