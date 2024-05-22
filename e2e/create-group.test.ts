import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fen")
  await page.getByLabel("Password").fill("password")
  await page.getByText("Sign in with Password").click()
  await page.waitForURL("http://localhost:3000/en")
  await page.getByTestId("create").click()
  await page.getByTestId("group").click()
  await page.getByPlaceholder('name').fill('Test123');
  await page.getByPlaceholder('currency').fill('EUR');
  await page.getByRole('button', { name: 'Create group' }).click();
  await expect(page).toHaveURL('http://localhost:3000/en')
});