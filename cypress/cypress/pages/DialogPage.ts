export class DialogPage {
  elements = {
    alertButton: () => cy.get("#my-alert"),
    confirmButton: () => cy.get("#my-confirm"),
    promptButton: () => cy.get("#my-prompt"),
    modalButton: () => cy.get("#my-modal"),
    modalBody: () => cy.get(".modal-body"),
    modalSaveButton: () =>
      cy.get('div[role="dialog"] button:has-text("Save Changes")'),
    modalCloseButton: () =>
      cy.get('div[role="dialog"] button:has-text("Close")'),
    confirmText: () => cy.get("#confirm-text"),
    promptText: () => cy.get("#prompt-text"),
    modalText: () => cy.get("#modal-text"),
  };
}
