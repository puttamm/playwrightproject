import { test, expect } from '@playwright/test';

test.describe("working automation1", async(page)=>{
    test("iframe", async({page})=>{
         await page.goto("https://jqueryui.com/checkboxradio/");
        const frame = page.frameLocator("iframe[class='demo-frame']");
        await frame.locator("label[for='checkbox-1']");
    })

})