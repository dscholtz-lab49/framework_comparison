import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";
import { scrollToBottom } from "../../utils/utils";
export class InfiniteScrollPage extends BasePage {
  page: Page;
  content: Locator;
  contentUrl;
  constructor(page: Page) {
    super();
    this.page = page;
    this.content = page.locator("#content");
    this.contentUrl = this.baseURL + "/infinite-scroll.html";
  }

  async openPage() {
    await this.page.goto(this.contentUrl);
    await this.page.waitForLoadState();
  }

  async getParagraphs() {
    await this.content.waitFor({ state: "visible" });
    let counter = (await this.page.$$("#content > p")).length;
    return counter;
  }

  async scrollToPage(counter: number) {
    for (let i = 0; i < counter; i++) {
      await Promise.all([
        await scrollToBottom(this.page),
        this.page.waitForResponse(
          (resp) => resp.url().includes("/lorem-ipsum") && resp.status() === 200
        ),
      ]);
    }
  }
}
