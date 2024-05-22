import { expect, test } from "@playwright/test";

const testPw = "password"
 
test("Basic auth and navigate to groups-grid", async ({ page, browser }) => {
  await test.step("should login", async () => {
    await page.goto("http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fen")
    await page.getByLabel("Password").fill(testPw)
    await page.getByText("Sign in with Password").click()
    await page.waitForURL("http://localhost:3000/en")
    await page.getByTestId("view").click()
    await page.getByTestId("grid").click()
    await expect(page).toHaveURL("http://localhost:3000/en/groups-grid")
  })
})