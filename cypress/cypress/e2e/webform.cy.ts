/// <reference types="cypress" />

import { WebFormPage } from "../pages/WebFormPage";

context("Web Form page tests", () => {
  const webForm = new WebFormPage();
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");
  });

  describe("Test web form element functionalities", () => {
    it("All elements should be visible", () => {
      webForm.elements.textInput().should("be.visible");
      webForm.elements.passwordInput().should("be.visible");
      webForm.elements.textArea().should("be.visible");
      webForm.elements.disabledInput().should("be.visible");
      webForm.elements.readOnlyInput().should("be.visible");
      webForm.elements.dropDownSelect().should("be.visible");
      webForm.elements.dropDownDataList().should("be.visible");
      webForm.elements.fileInput().should("be.visible");
      webForm.elements.checkedCheckbox().should("be.visible");
      webForm.elements.defaultCheckbox().should("be.visible");
      webForm.elements.checkedRadioButton().should("be.visible");
      webForm.elements.defaultRadioButton().should("be.visible");
      webForm.elements.colorPicker().should("be.visible");
      webForm.elements.datePicker().should("be.visible");
      webForm.elements.rangeSelector().should("be.visible");
    });

    it("Input fields can be filled different ways", () => {
      webForm.fillTextInput("text");
      webForm.fillPasswordInput("password");
      webForm.fillTextArea("text 2");

      webForm.elements.textInput().should("have.value", "text");
      webForm.elements.passwordInput().should("have.value", "password");
      webForm.elements.textArea().should("have.value", "text 2");
    });

    it("Read only input cannot be changed", () => {
      webForm.elements.readOnlyInput().should("have.value", "Readonly input");

      // It would fail since it cannot interact with the element
      // However if we add force: true to type it is actually changing the element value
      //webForm.fillReadOnlyInput("It is ready only");

      //webForm.elements.readOnlyInput().should("have.value", "Readonly input");

      webForm.elements
        .readOnlyInput()
        .should("have.attr", "readonly", "readonly");
    });

    it("Select dropdown from select menu", () => {
      webForm.selectFromDropdown("Two");
      webForm.elements.dropDownSelect().should("have.value", "2");
    });

    it("Select dropdown from datalist menu", () => {
      webForm.fillDropdownDatalist("Chicago");
      webForm.elements.dropDownDataList().should("have.value", "Chicago");
    });

    it("Uploading a file should be successful", () => {
      webForm.uploadFile("cypress/files/empty.txt");
      webForm.elements.fileInput().should("have.length", 1);
    });

    it("Unchecking the checked checkbox should be unchecked", () => {
      webForm.elements.checkedCheckbox().should("be.checked");
      webForm.uncheckCheckbox();
      webForm.elements.checkedCheckbox().should("not.be.checked");
    });

    it("Date picker should accept valid dates", () => {
      webForm.fillDatePicker("05/03/2023");
      webForm.elements.datePicker().should("have.value", "05/03/2023");
    });
  });
});
