import { Locator, Page } from "@playwright/test";
export class WebFormPage {
  textInput: any;
  passwordInput: any;
  textArea: any;
  disabledInput: any;
  readOnlyInput: any;
  constructor(page: Page) {
    this.textInput = page.locator("#my-text-id");
    this.passwordInput = page.locator("[name=my-password]");
    this.textArea = page.locator("[name=my-textarea]");
    this.disabledInput = page.locator("[name=my-disabled]");
    this.readOnlyInput = page.locator("[name=my-readonly]");
  }

  async fillTextInput(text: string) {
    await this.textInput.fill(text);
  }

  async fillPasswordInput(text: string) {
    await this.passwordInput.fill(text);
  }

  async fillTextArea(text: string) {
    await this.textArea.fill(text);
  }
}
