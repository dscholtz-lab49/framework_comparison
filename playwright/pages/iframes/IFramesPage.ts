import { Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { pollForContentToLoad } from "../../utils/utils";
export class IFramesPage extends BasePage {
  page: Page;
  content: any;
  text: any;
  frame: any;
  contentUrl: string;
  pageUrl: string;
  constructor(page: Page) {
    super();
    this.page = page;
    this.pageUrl = this.baseURL + "/iframes.html";
    this.contentUrl = this.baseURL + "/content.html";
    this.frame = page.frameLocator("#my-iframe");
  }

  async openPage() {
    await this.page.goto(this.pageUrl);
    await this.page.waitForLoadState();
  }

  async getContent() {
    // IFrame content is loading slowly so had to poll the content url until it loads successfully
    await pollForContentToLoad(this.page, this.contentUrl);

    const frameContent = this.frame
      .locator("#content")
      .innerText()
      .then((contentText: any) => {
        return contentText;
      });
    return frameContent;
  }
}
