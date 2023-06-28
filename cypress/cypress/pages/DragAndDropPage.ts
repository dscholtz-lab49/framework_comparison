export class DragAndDropPage {
  elements = {
    draggableElement: () => cy.get("#draggable"),
    targetElement: () => cy.get("#target"),
  };
}
