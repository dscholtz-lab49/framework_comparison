import { Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";
import { pause } from "../../utils/utils";
export class PracticePage extends BasePage {
  webFormButton: any;
  constructor(page: Page) {
    super();
    this.webFormButton = page.locator("//a[text()='Web form']");
  }

  async openPage(page: Page) {
    await page.goto("");
  }

  async goToWebFormPage() {
    this.webFormButton.click();
  }
}
