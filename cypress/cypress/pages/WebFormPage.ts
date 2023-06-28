export class WebFormPage {
  elements = {
    textInput: () => cy.get("#my-text-id"),
    passwordInput: () => cy.getByName("my-password"),
    textArea: () => cy.getByName("my-textarea"),
    disabledInput: () => cy.getByName("my-disabled"),
    readOnlyInput: () => cy.getByName("my-readonly"),
    dropDownSelect: () => cy.getByName("my-select"),
    dropDownDataList: () => cy.getByName("my-datalist"),
    datalistOptions: () => cy.get("[datalist id='my-options']"),
    fileInput: () => cy.getByName("my-file"),
    checkedCheckbox: () => cy.get("#my-check-1"),
    defaultCheckbox: () => cy.get("#my-check-2"),
    checkedRadioButton: () => cy.get("#my-radio-1"),
    defaultRadioButton: () => cy.get("#my-radio-2"),
    submitButton: () => cy.get("button").contains("Submit"),
    colorPicker: () => cy.get("input[type='color']"),
    datePicker: () => cy.getByName("my-date"),
    rangeSelector: () => cy.getByName("my-range"),
  };

  fillTextInput(text: string) {
    this.elements.textInput().type(text);
  }

  fillPasswordInput(text: string) {
    this.elements.passwordInput().type(text);
  }

  fillTextArea(text: string) {
    this.elements.textArea().type(text);
  }

  fillReadOnlyInput(text: string) {
    this.elements.readOnlyInput().type(text);
  }

  selectFromDropdown(text: string) {
    this.elements.dropDownSelect().select(text);
  }

  fillDropdownDatalist(text: string) {
    this.elements.dropDownDataList().type(text);
    //cy.get("#my-options").find("option").first().click({ force: true });
  }

  uploadFile(file: string) {
    this.elements.fileInput().selectFile(file);
  }

  uncheckCheckbox() {
    this.elements.checkedCheckbox().uncheck();
  }

  fillDatePicker(date: string) {
    this.elements.datePicker().type(date);
  }
}
