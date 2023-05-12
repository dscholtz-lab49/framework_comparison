import { test, expect, Page } from "@playwright/test";
import { IFramesPage } from "../pages/iframes/IFramesPage";

test.describe("IFrame page tests", () => {
  let iFramePage: IFramesPage;

  test.beforeEach(async ({ context }) => {
    const page = await context.newPage();
    iFramePage = new IFramesPage(page);
    await iFramePage.openPage();
  });

  test.afterAll(async () => {});

  test("Content should be visible inside of iframe", async () => {
    const text = await iFramePage.getContent();
    expect(text).toContain("Lorem");
  });
});
