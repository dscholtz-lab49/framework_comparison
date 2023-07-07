/// <reference types="cypress" />

import { IFramePage } from "../pages/IFramePage";

context("IFrame page tests", () => {
  const iFramePage = new IFramePage();
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://bonigarcia.dev/selenium-webdriver-java/iframes.html");
  });

  describe("Testing iframe", () => {
    it("Content should be visible inside of iframe", () => {
      const content = iFramePage.getContentOfFrame("Lorem");
      content.should("contain", "Lorem");
    });
  });
});
