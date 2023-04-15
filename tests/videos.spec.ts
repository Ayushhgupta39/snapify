import { test, expect } from "@playwright/test";

test("should be able to view videos", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page
    .getByRole("link", { name: "Go to Videos → The entire videos collection" })
    .click();
  await expect(page).toHaveURL("http://localhost:3000/videos");
});
