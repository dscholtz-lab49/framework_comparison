import { test, expect, Page } from "@playwright/test";
import { InfinityScrollPage } from "../pages/infinity-scroll/InfinityScrollPage";

test.describe("Infinity Scroll page tests", () => {
  let infinityScroll: InfinityScrollPage;

  test.beforeEach(async ({ context }) => {
    const page = await context.newPage();
    infinityScroll = new InfinityScrollPage(page);
    await infinityScroll.openPage();
  });

  test.afterAll(async () => {});

  test("Content should be loaded infinitly by scrolling down", async () => {
    // The lorem ipsum text has 20 pharaghraps under #content div
    expect(await infinityScroll.getParagraphs()).toEqual(20);
    await infinityScroll.scrollToPage(2);
    expect(await infinityScroll.getParagraphs()).toEqual(60);
  });
});
