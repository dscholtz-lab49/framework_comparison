import { Locator, Page, expect } from "@playwright/test";

export async function pause(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function pollForContentToLoad(page: Page, url: string) {
  await expect
    .poll(
      async () => {
        const response = await page.request.get(url);
        return response.status();
      },
      {
        timeout: 10000,
      }
    )
    .toBe(200);
}

export async function dragAndDrop(
  page: Page,
  locatorToDrag: Locator,
  locatorDragTarget: Locator
) {
  const dragBoundingBox = await locatorToDrag.boundingBox();
  const dropBoundingBox = await locatorDragTarget.boundingBox();
  await page.mouse.move(
    dragBoundingBox.x + dragBoundingBox.width / 2,
    dragBoundingBox.y + dragBoundingBox.height / 2
  );

  await page.mouse.down();

  const targetX =
    dragBoundingBox?.x || dropBoundingBox.x + dropBoundingBox.width / 2;
  const targetY =
    dragBoundingBox?.y || dropBoundingBox.y + dropBoundingBox.height / 2;

  await page.mouse.move(targetX, targetY);

  await page.mouse.up();
}

export async function scrollToBottom(page: Page) {
  page.evaluate("window.scrollBy(0, document.body.scrollHeight)");
}
