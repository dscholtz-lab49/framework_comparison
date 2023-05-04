import { test, expect } from "@playwright/test";
import { WebFormPage } from "../pages/web-form/WebFormPage";
import { PracticePage } from "../pages/practice/PracticePage";

test.describe("Web form", () => {
  let practicePage: PracticePage;
  let webForm: WebFormPage;

  test.beforeEach(async ({ page }) => {
    practicePage = new PracticePage(page);
    webForm = new WebFormPage(page);
    await practicePage.openPage(page);
    await practicePage.goToWebFormPage();
  });

  test.afterAll(async () => {});

  test("All elements are visible", async () => {
    await expect(webForm.textInput).toBeVisible();
    await expect(webForm.passwordInput).toBeVisible();
    await expect(webForm.textArea).toBeVisible();
    await expect(webForm.readOnlyInput).toHaveAttribute("readonly", "");
  });

  test("Test", async ({ page }) => {
    await webForm.fillTextInput("text");
  });
});
