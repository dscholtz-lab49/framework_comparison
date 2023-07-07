export class IFramePage {
  elements = {
    frame: () => cy.get("#my-iframe"),
  };

  getContentOfFrame(text: string) {
    // Wait for content to load
    this.elements.frame().its("0.contentDocument.body").should("not.be.empty");
    return this.elements.frame().its("0.contentDocument.body");
  }
}
