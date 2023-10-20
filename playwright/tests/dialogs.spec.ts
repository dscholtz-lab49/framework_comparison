import { test, expect } from "@playwright/test";
import { DialogPage } from "../pages/dialogs/DialogPage";

test.describe("Dialog boxes page tests", () => {
  let dialogPage: DialogPage;

  test.beforeEach(async ({ context }) => {
    const page = await context.newPage();
    dialogPage = new DialogPage(page);
    await dialogPage.openPage();
  });

  test.afterAll(async () => {});

  test("Clicking on alert button should open an alert dialog", async () => {
    expect(dialogPage.alertButton).toBeEnabled();
    await dialogPage.clickAlertButton();
    dialogPage.isDialogVisibleAndAccept("alert", "Hello world!");
  });

  test("Clicking on confirm button should open an confirm dialog and clicking OK should show correct message", async () => {
    await dialogPage.clickConfirmButton();
    dialogPage.isDialogVisibleAndAccept("confirm", "Is this correct?");
    await expect(dialogPage.confirmText).toHaveText("You chose: true");
  });

  test("Clicking on confirm button should open an confirm dialog and clicking Cancel should show correct message", async () => {
    await dialogPage.clickConfirmButton();
    dialogPage.isDialogVisibleAndDismiss("confirm", "Is this correct?");
    await expect(dialogPage.confirmText).toHaveText("You chose: false");
  });

  test("Clicking on prompt button should open an prompt dialog and typing test and clicking OK should show correct message", async () => {
    await dialogPage.clickPromptButton();
    dialogPage.isDialogVisibleAndAccept(
      "prompt",
      "Please enter your name",
      "test"
    );
    await expect(dialogPage.promptText).toHaveText("You typed: test");
  });

  test("Clicking on prompt button should open an prompt dialog and clicking Cancel should show correct message", async () => {
    await dialogPage.clickPromptButton();
    dialogPage.isDialogVisibleAndDismiss("prompt", "Please enter your name");
    await expect(dialogPage.promptText).toHaveText("You typed: null");
  });

  test("Clicking on modal button should open an modal dialog and clicking Save should show the correct message", async () => {
    await dialogPage.clickModalButton();
    await expect(dialogPage.modalBody).toHaveText("This is the modal body");
    await dialogPage.saveModal();
    await expect(dialogPage.modalText).toHaveText("You chose: Save changes");
  });

  test("Clicking on modal button should open an modal dialog and clicking Close should show the correct message", async () => {
    await dialogPage.clickModalButton();
    await expect(dialogPage.modalBody).toHaveText("This is the modal body");
    await dialogPage.closeModal();
    await expect(dialogPage.modalText).toHaveText("You chose: Close");
  });
});
