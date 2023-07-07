export class DialogPage {
  elements = {
    alertButton: () => cy.get("#my-alert"),
    confirmButton: () => cy.get("#my-confirm"),
    promptButton: () => cy.get("#my-prompt"),
    modalButton: () => cy.get("#my-modal"),
    modalBody: () => cy.get(".modal-body"),
    modalSaveButton: () => cy.get("button").contains("Save changes"),
    modalCloseButton: () => cy.get("button").contains("Close"),
    confirmText: () => cy.get("#confirm-text"),
    promptText: () => cy.get("#prompt-text"),
    modalText: () => cy.get("#modal-text"),
  };

  clickOnAlertButton() {
    this.elements.alertButton().should("be.visible");
    this.elements.alertButton().click();
  }

  getTextFromAlert() {
    return cy.on("window:alert", function (AlertText) {
      return AlertText;
    });
  }

  clickConfirmButton() {
    this.elements.confirmButton().should("be.visible");
    this.elements.confirmButton().click();
  }

  acceptConfirmBox() {
    cy.on("window:confirm", () => true);
  }

  cancelConfirmBox() {
    cy.on("window:confirm", () => false);
  }

  clickPromptButton() {
    this.elements.promptButton().click();
  }

  fillPrompt(text: string) {
    this.elements.promptButton().should("be.visible");
    cy.window().then(($win) => {
      cy.stub($win, "prompt").returns(text);
      this.clickPromptButton();
    });
  }

  cancelPromptBox() {
    this.elements.promptButton().should("be.visible");
    cy.window().then((win) => {
      cy.stub(win, "prompt").callsFake(() => null);
      this.clickPromptButton();
    });
  }

  clickModalButton() {
    this.elements.modalButton().should("be.visible");
    this.elements.modalButton().click();
  }

  saveModal() {
    this.elements.modalSaveButton().should("be.visible");
    this.elements.modalSaveButton().click({ force: true });
  }

  cancelModal() {
    this.elements.modalCloseButton().should("be.visible");
    this.elements.modalCloseButton().click({ force: true });
  }
}
