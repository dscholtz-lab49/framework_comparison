/// <reference types="cypress" />

import { DragAndDropPage } from "../pages/DragAndDropPage";

context("Drag and Drop page tests", () => {
  const dragAndDrop = new DragAndDropPage();
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit(
      "https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html"
    );
  });

  describe("Testing drag and drop functionality", () => {
    it("Element should be draggable to target", () => {
      // Get Initial position
      let initialPosX = dragAndDrop.elements
        .draggableElement()
        .then(($el) => $el[0].getBoundingClientRect().x);
      let initialPosY = dragAndDrop.elements
        .draggableElement()
        .then(($el) => $el[0].getBoundingClientRect().y);

      initialPosX.then((x) => Math.round(x)).should("eq", 312);
      initialPosY.then((y) => Math.round(y)).should("eq", 236);

      dragAndDrop.dragElementToTarget();

      // Get new position
      let newPosX = dragAndDrop.elements
        .draggableElement()
        .then(($el) => $el[0].getBoundingClientRect().x);
      let newPosY = dragAndDrop.elements
        .draggableElement()
        .then(($el) => $el[0].getBoundingClientRect().y);

      newPosX.then((x) => Math.round(x)).should("eq", 972);
      newPosY.then((y) => Math.round(y)).should("eq", 236);
    });
  });
});
