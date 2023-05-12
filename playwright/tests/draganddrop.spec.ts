import { expect, test } from "@playwright/test";
import { DragAndDropPage } from "../pages/draganddrop/DragAndDropPage";

test.describe("Drag and Drop page tests", () => {
  let dragAndDrop: DragAndDropPage;

  test.beforeEach(async ({ context }) => {
    const page = await context.newPage();
    dragAndDrop = new DragAndDropPage(page);
    await dragAndDrop.openPage();
  });

  test.afterAll(async () => {});

  test("Element should be drag and dropped", async () => {
    // Getting original position of element
    const oldLoc = await dragAndDrop.draggableElement.boundingBox();
    expect(Math.round(oldLoc.x)).toEqual(82);
    expect(Math.round(oldLoc.y)).toEqual(303);

    await dragAndDrop.dragElement();

    // Getting new position of element
    const newLoc = await dragAndDrop.draggableElement.boundingBox();

    expect(Math.round(newLoc.x)).toEqual(-48);
    expect(Math.round(newLoc.y)).toEqual(251);
  });
});
