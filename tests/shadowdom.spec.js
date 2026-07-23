import{test} from '@playwright/test';

test.describe('working automation1 shadow dom', () => {
  test('shadow dom', { tag: ["@smoke", "@swetha"] }, async ({ page }) => {
    await page.goto('http://watir.com//examples/shadow_dom.html');
    //playwright has direct support for shadow dom, using the css locater
    await page.locator("input[type='text']").fill("swetha");

    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);
    await page.reload();
    await page.goBack();
    await page.waitForTimeout(5000);
    await page.goForward();
  });
});
