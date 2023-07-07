export class InfiniteScrollPage {
  elements = {
    content: () => cy.get("#content"),
  };

  scrollToBottomUntil(times: number) {
    for (let i = 1; i <= times; i++) {
      /*cy.scrollTo("bottom").then(() => {
        this.elements
          .content()
          .children()
          .then((children) => {
            cy.wrap(children)
              .its("length")
              .should("eq", i * 20);
          });
      });*/
      this.elements
        .content()
        .children()
        .last()
        .scrollIntoView({ duration: 1000 });
      this.elements
        .content()
        .children()
        .then((children) => {
          cy.wrap(children)
            .its("length")
            .should("gt", i * 20);
        });
    }
  }
}
