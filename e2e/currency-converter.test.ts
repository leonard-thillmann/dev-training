import { expect, test } from "@playwright/test";

const testPw = "password"
 
test("Basic auth and navigate to groups-grid", async ({ page, browser }) => {
  await test.step("should login", async () => {
    // Sign in and go to /en/currency-converter
    await page.goto("http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fen")
    await page.getByLabel("Password").fill(testPw)
    await page.getByText("Sign in with Password").click()
    await page.waitForURL("http://localhost:3000/en")
    await page.getByTestId("other").click()
    await page.getByTestId("currency-converter").click()
    await expect(page).toHaveURL("http://localhost:3000/en/currency-converter")

    // put values inside the inputs and calculate 1 EUR into USD
    await page.getByPlaceholder("Source amount").fill("1")
    await page.getByPlaceholder("Source currency").fill("EUR")
    await page.getByPlaceholder("Target currency").fill("USD")
    await page.getByTestId("calculate").click()
    await expect(page.getByTestId("result-container")).toHaveText(/= 1 EUR/i)
  })
})