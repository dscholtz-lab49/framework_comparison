/// <reference types="cypress" />

import { InfiniteScrollPage } from "../pages/InfiniteScrollPage";

context("Infinite Scroll page tests", () => {
  const infiniteScroll = new InfiniteScrollPage();
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit(
      "https://bonigarcia.dev/selenium-webdriver-java/infinite-scroll.html"
    );
  });

  describe("Testing infinite scroll functionality", () => {
    it("Content should be loaded infinitly by scrolling down", () => {
      infiniteScroll.elements
        .paragraphs()
        .should("have.length", 20)
        .then((content) => {
          cy.window().scrollTo("bottom");
          infiniteScroll.elements
            .paragraphs()
            .should("have.length", content.length * 2);

          cy.window().scrollTo("bottom");
          infiniteScroll.elements
            .paragraphs()
            .should("have.length", content.length * 3);
        });
    });
  });
});
