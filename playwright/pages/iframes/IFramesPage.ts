import { Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { waitForIFrameContentToLoad } from "../../utils/utils";
export class IFramesPage extends BasePage {
  page: Page;
  content: any;
  text: any;
  frame: any;
  contentUrl: string;
  constructor(page: Page) {
    super();
    this.page = page;
    this.contentUrl =
      "https://bonigarcia.dev/selenium-webdriver-java/content.html";
    this.frame = page.frameLocator("#my-iframe");
  }

  async openPage() {
    await this.page.goto(this.baseURL + "/iframes.html");
  }

  async getContent() {
    // IFrame content is loading slowly so had to poll the content url until it loads successfully
    await waitForIFrameContentToLoad(this.page, this.contentUrl);

    const frameContent = this.frame
      .locator("#content")
      .innerText()
      .then((contentText: any) => {
        return contentText;
      });
    return frameContent;
  }
}
