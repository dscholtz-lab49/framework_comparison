/// <reference types="cypress" />

import { DialogPage } from "../pages/DialogPage";

context("Dialog page tests", () => {
  const dialog = new DialogPage();
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit(
      "https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html"
    );
  });

  describe("Testing dialog boxes", () => {
    it("Clicking on alert button should open an alert dialog", () => {
      dialog.clickOnAlertButton();
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Hello world!");
      });
      // Close alert
      dialog.acceptConfirmBox();
    });

    it("Clicking on confirm button should open an confirm dialog and clicking OK should show correct message", () => {
      dialog.clickConfirmButton();
      dialog.acceptConfirmBox();
      dialog.elements.confirmText().should("have.text", "You chose: true");
    });

    it("Clicking on confirm button should open an confirm dialog and clicking Cancel should show correct message", () => {
      dialog.clickConfirmButton();
      dialog.cancelConfirmBox();
      dialog.elements.confirmText().should("have.text", "You chose: false");
    });

    it("Clicking on prompt button should open an prompt dialog and typing test and clicking OK should show correct message", () => {
      const promptText = "test";
      dialog.fillPrompt(promptText);
      dialog.elements
        .promptText()
        .should("have.text", "You typed: " + promptText);
    });

    it("Clicking on prompt button should open an prompt dialog and clicking Cancel should show correct message", () => {
      dialog.cancelPromptBox();
      dialog.elements.promptText().should("have.text", "You typed: null");
    });

    it("Clicking on modal button should open an modal dialog and clicking Save should show the correct message", () => {
      dialog.clickModalButton();
      dialog.elements
        .modalBody()
        .should("contain.text", "This is the modal body");
      dialog.saveModal();
      dialog.elements
        .modalText()
        .should("have.text", "You chose: Save changes");
    });

    it("Clicking on modal button should open an modal dialog and clicking Close should show the correct message", () => {
      dialog.clickModalButton();
      dialog.elements
        .modalBody()
        .should("contain.text", "This is the modal body");
      dialog.cancelModal();
      dialog.elements.modalText().should("have.text", "You chose: Close");
    });
  });
});
