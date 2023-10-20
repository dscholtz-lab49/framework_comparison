import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class DialogPage extends BasePage {
  page: Page;
  pageUrl: string;
  alertButton: Locator;
  confirmButton: Locator;
  promptButton: Locator;
  modalButton: Locator;
  confirmText: Locator;
  promptText: Locator;
  modalText: Locator;
  modalSaveButton: Locator;
  modalCloseButton: Locator;
  modalBody: Locator;
  constructor(page: Page) {
    super();
    this.page = page;
    this.pageUrl = this.baseURL + "/dialog-boxes.html";
    this.alertButton = page.locator("#my-alert");
    this.confirmButton = page.locator("#my-confirm");
    this.promptButton = page.locator("#my-prompt");
    this.modalButton = page.locator("#my-modal");
    this.modalBody = page.locator(".modal-body");
    this.modalSaveButton = page.locator(
      'div[role="dialog"] button:has-text("Save Changes")'
    );
    this.modalCloseButton = page.locator(
      'div[role="dialog"] button:has-text("Close")'
    );
    this.confirmText = page.locator("#confirm-text");
    this.promptText = page.locator("#prompt-text");
    this.modalText = page.locator("#modal-text");
  }

  async openPage() {
    await this.page.goto(this.pageUrl);
  }

  async clickAlertButton() {
    await this.alertButton.click();
  }

  async clickConfirmButton() {
    this.confirmButton.click();
  }

  async clickPromptButton() {
    this.promptButton.click();
  }

  async clickModalButton() {
    this.modalButton.click();
  }

  async isDialogVisibleAndAccept(
    type: String,
    text: String,
    prompText?: string
  ) {
    this.page.on("dialog", async (dialog) => {
      // Verify type of dialog
      expect(dialog.type()).toContain(type);

      // Verify Dialog Message
      expect(dialog.message()).toContain(text);

      //Click on OK Button
      // Have to accept or dismiss it or target closed error see details: https://playwright.dev/docs/dialogs
      if (type === "prompt") {
        await dialog.accept(prompText);
      } else {
        await dialog.accept();
      }
    });
  }

  async isDialogVisibleAndDismiss(type: String, text: String) {
    this.page.on("dialog", async (dialog) => {
      // Verify type of dialog
      expect(dialog.type()).toContain(type);

      // Verify Dialog Message
      expect(dialog.message()).toContain(text);

      //Click on OK Button
      // Have to accept or dismiss it or target closed error see details: https://playwright.dev/docs/dialogs
      await dialog.dismiss();
    });
  }

  async saveModal() {
    await this.modalSaveButton.click();
  }

  async closeModal() {
    await this.modalCloseButton.click();
  }
}
