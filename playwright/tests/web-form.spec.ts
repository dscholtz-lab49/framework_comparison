import { test, expect } from "@playwright/test";
import { WebFormPage } from "../pages/web-form/WebFormPage";

test.describe("Web form", () => {
  let webForm: WebFormPage;

  test.beforeEach(async ({ context }) => {
    const page = await context.newPage();
    webForm = new WebFormPage(page);
    await webForm.openPage();
  });

  test.afterAll(async () => {});

  test("All elements should be visible", async () => {
    await expect(webForm.textInput).toBeVisible();
    await expect(webForm.passwordInput).toBeVisible();
    await expect(webForm.textArea).toBeVisible();
    await expect(webForm.readOnlyInput).toBeVisible();
    await expect(webForm.disabledInput).toBeVisible();
    await expect(webForm.dropDownSelect).toBeVisible();
    await expect(webForm.dropDownDataList).toBeVisible();
    await expect(webForm.fileInput).toBeVisible();
    await expect(webForm.checkedCheckbox).toBeVisible();
    await expect(webForm.defaultCheckbox).toBeVisible();
    await expect(webForm.checkedRadioButton).toBeVisible();
    await expect(webForm.defaultRadioButton).toBeVisible();
    await expect(webForm.submitButton).toBeVisible();
    await expect(webForm.colorPicker).toBeVisible();
    await expect(webForm.datePicker).toBeVisible();
    await expect(webForm.rangeSelector).toBeVisible();
  });

  test("Input fields can be filled different ways", async () => {
    await webForm.fillTextInput("text");
    await webForm.fillPasswordInput("password");
    await webForm.fillTextArea("text 2");

    expect(webForm.textInput).toHaveValue("text");
    expect(webForm.passwordInput).toHaveValue("password");
    expect(webForm.textArea).toHaveValue("text 2");
  });

  test("Read only input cannot be changed @flaky", async () => {
    expect(webForm.readOnlyInput).toHaveValue("Readonly input");

    await webForm.fillReadOnlyField("it is read only");

    expect(webForm.readOnlyInput).toHaveValue("Readonly input");
  });

  test("Select dropdown from select menu", async () => {
    await webForm.selectFromDropdownSelect("Two");
    expect(webForm.dropDownSelect).toHaveValue("2");
  });

  test("Select dropdown from datalist menu", async () => {
    await webForm.fillDataListField("Chicago");
    expect(webForm.dropDownDataList).toHaveValue("Chicago");
  });

  test("Uploading a file should be successful", async () => {
    await webForm.uploadFile("./files/empty.txt");
    expect(webForm.fileInput.inputValue).toHaveLength(1);
  });

  test("Unchecking the checked checkbox should be unchecked", async () => {
    expect(webForm.checkedCheckbox.isChecked()).toBeTruthy();
    await webForm.checkedCheckbox.uncheck();
    expect(webForm.checkedCheckbox).not.toBeChecked();
  });

  test("Date picker should accept valid dates", async () => {
    await webForm.fillDatePicker("05/03/2023");
    expect(webForm.datePicker).toHaveValue("05/03/2023");
  });
});
