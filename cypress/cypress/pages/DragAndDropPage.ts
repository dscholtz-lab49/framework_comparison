export class DragAndDropPage {
  elements = {
    draggableElement: () => cy.get("#draggable"),
  };

  dragElementToTarget() {
    // We use cypress-drag-and-drop dependency so it can be that short
    this.elements.draggableElement().drag("#target", { force: true });
  }
}
