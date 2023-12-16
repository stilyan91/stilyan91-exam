const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
  await page.goto('https://stilyan91-exam.onrender.com');
  const heading = await page.$('p');
  const text = await heading.textContent();
  expect(text).toContain('Shopping List: 3');
});
