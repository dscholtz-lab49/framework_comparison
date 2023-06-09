import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { dragAndDrop } from "../../utils/utils";

export class DragAndDropPage extends BasePage {
  page: Page;
  draggableElement: Locator;
  targetElement: Locator;
  pageUrl: string;
  constructor(page: Page) {
    super();
    this.page = page;
    this.pageUrl = this.baseURL + "/drag-and-drop.html";
    this.draggableElement = page.locator("#draggable");
    this.targetElement = page.locator("#target");
  }

  async openPage() {
    await this.page.goto(this.pageUrl);
  }

  async dragElement() {
    await dragAndDrop(this.page, this.draggableElement, this.targetElement);
  }
}
