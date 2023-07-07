import { test, expect, Page } from "@playwright/test";
import { InfiniteScrollPage } from "../pages/infinite-scroll/InfiniteScrollPage";

test.describe("Infinite Scroll page tests", () => {
  let infiniteScroll: InfiniteScrollPage;

  test.beforeEach(async ({ context }) => {
    const page = await context.newPage();
    infiniteScroll = new InfiniteScrollPage(page);
    await infiniteScroll.openPage();
  });

  test.afterAll(async () => {});

  test("Content should be loaded infinitly by scrolling down", async () => {
    // The lorem ipsum text has 20 pharaghraps under #content div
    expect(await infiniteScroll.getParagraphs()).toEqual(20);
    await infiniteScroll.scrollToPage(2);
    expect(await infiniteScroll.getParagraphs()).toEqual(60);
  });
});
