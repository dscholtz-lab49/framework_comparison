export class InfiniteScrollPage {
  elements = {
    content: () => cy.get("#content"),
    paragraphs: () => cy.get("#content > p"),
  };
}
