import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { dragAndDrop } from "../../utils/utils";

export class DragAndDropPage extends BasePage {
  page: Page;
  draggableElement: Locator;
  targetElement: Locator;
  constructor(page: Page) {
    super();
    this.page = page;
    this.draggableElement = page.locator("#draggable");
    this.targetElement = page.locator("#target");
  }

  async openPage() {
    await this.page.goto(this.baseURL + "/drag-and-drop.html");
  }

  async dragElement() {
    await dragAndDrop(this.page, this.draggableElement, this.targetElement);
  }
}
