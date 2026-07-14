import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login.po.js';
let login;

test.beforeEach(async({page})=>{
   login = new LoginPage(page);
   await login.lanchApp();
   
})

test('test', async ({page}) => {
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
});


test('verify login with valid credential', async ({page}) => {

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.App_Username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.App_Password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByText('My Actions')).toBeVisible();
  await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
  await page.getByRole('link', { name: 'Leave' }).click();
  await expect(page.getByRole('heading', { name: 'Leave', exact: true })).toBeVisible();
});


test('verify login with invalid credentials', async ({page}) => {
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('trfedwsrd');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test("verify login with valid credentials using page object model", async() => {

   await login.logisDispalyed();
   await login.loginWithCreds(process.env.App_Username, process.env.App_Password);
   await login.verifyLoginSuccess();
});
test("verify login with invalid credentials using page object model", async () => {
 
   await login.logisDispalyed();
   await login.loginWithCreds(process.env.App_Username, "tyu");
   await login.verifyLoginFailure();
});