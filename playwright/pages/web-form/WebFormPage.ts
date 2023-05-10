import { Keyboard, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
export class WebFormPage extends BasePage {
  readonly keyboard: Keyboard;
  textInput: Locator;
  passwordInput: Locator;
  textArea: Locator;
  disabledInput: Locator;
  readOnlyInput: Locator;
  dropDownSelect: Locator;
  dropDownDataList: Locator;
  fileInput: Locator;
  checkedCheckbox: Locator;
  defaultCheckbox: Locator;
  checkedRadioButton: Locator;
  defaultRadioButton: Locator;
  submitButton: Locator;
  colorPicker: Locator;
  datePicker: Locator;
  rangeSelector: Locator;
  datalistOptions: Locator;
  page: Page;
  constructor(page: Page) {
    super();
    this.page = page;
    this.keyboard = page.keyboard;
    this.textInput = page.locator("#my-text-id");
    this.passwordInput = page.locator("[name=my-password]");
    this.textArea = page.locator("[name=my-textarea]");
    this.disabledInput = page.locator("[name=my-disabled]");
    this.readOnlyInput = page.locator("[name=my-readonly]");
    this.dropDownSelect = page.locator("[name=my-select]");
    this.dropDownDataList = page.locator("[name=my-datalist]");
    this.datalistOptions = page.locator("[datalist id='my-options']");
    this.fileInput = page.locator("[name=my-file]");
    this.checkedCheckbox = page.locator("#my-check-1");
    this.defaultCheckbox = page.locator("#my-check-2");
    this.checkedRadioButton = page.locator("#my-radio-1");
    this.defaultRadioButton = page.locator("#my-radio-2");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.colorPicker = page.locator("input[type='color']");
    // TestId=name set in playwright config
    this.datePicker = page.getByTestId("my-date");
    this.rangeSelector = page.getByTestId("my-range");
  }

  async openPage() {
    await this.page.goto(this.baseURL + "/web-form.html");
  }

  async fillTextInput(text: string) {
    await this.textInput.fill(text);
  }

  async fillPasswordInput(text: string) {
    await this.passwordInput.type(text);
  }

  async fillTextArea(text: string) {
    await this.textArea.type(text);
  }

  async fillReadOnlyField(text: string) {
    await this.readOnlyInput.type(text);
  }

  async selectFromDropdownSelect(option: string) {
    await this.dropDownSelect.selectOption(option);
  }

  async fillDataListField(option: string) {
    await this.dropDownDataList.type(option);
  }

  async uploadFile(fileName: string) {
    await this.fileInput.setInputFiles(fileName);
  }

  async fillDatePicker(date: string) {
    await this.datePicker.fill(date);
  }
}
