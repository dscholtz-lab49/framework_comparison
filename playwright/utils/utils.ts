import { Page, expect } from "@playwright/test";

export async function pause(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function waitForIFrameContentToLoad(page: Page, url: string) {
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
