import { $, browser } from "@wdio/globals";
class BlogPage {
  get blogTitle() {
    return $("h1=Browse all articles, guides, and news");
  }
  async blogPageExist() {
    await this.blogTitle.isDisplayed();
  }
  async openBlogPage() {
    await browser.url("https://telnyx.com/resources");
  }
  get telnyxLogo() {
    return $('a[href="/"]');
  }
  async logoClick() {
    await this.telnyxLogo.click();
  }
}
export default new BlogPage();
