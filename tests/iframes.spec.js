import { test , expect} from '@playwright/test';

test.describe('working automation1 iframes', () => {
  test('iframe',{tag:["@smoke","@swetha"]}, async ({ page }) => {
    await page.goto('https://jqueryui.com/checkboxradio/');
    const frame = page.frameLocator("iframe[class='demo-frame']");
    await frame.locator('label[for="checkbox-1"]').click();
  });




    test('nested iframe',{tag:["@smoke","@swetha"]}, async ({ page }) => {
    await page.goto('https://jqueryui.com/checkboxradio/');
    const frame = page.frameLocator("iframe[class='demo-frame']").frameLocator("iframe[class='demo-frame']");
    await frame.locator('label[for="checkbox-1"]').click();
  });
})
