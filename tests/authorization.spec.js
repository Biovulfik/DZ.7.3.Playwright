const { test, expect } = require("@playwright/test");
const { email, email2, password, password2 } = require("../auth");

test("Successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();
  await expect(
    page.locator(".src-components-pages-Profile-Programs--title--Kw5NH")
  ).toHaveText("Моё обучение");
});

test("Unsuccessful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").fill(email2);
  await page.getByPlaceholder("Пароль").fill(password2);
  await page.getByTestId("login-submit-btn").click();
  await expect(page.locator("[data-testid=login-error-hint]")).toContainText(
    "Вы ввели неправильно логин или пароль."
  );
});
