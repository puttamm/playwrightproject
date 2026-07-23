import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
});

test.describe('working automation1 alerts', () => { 
    test('verify simple alerts',{tag:["@smoke","@swetha"]}, async ({ page }) => {
   page.locator('text=Click for JS Alert').click(); 
        page.on('dialog', async dialog => {
         expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept("OK");
             
        }       
        )             

})


 test('verify Cancel alerts',{tag:["@smoke","@swetha"]}, async ({ page }) => {

        page.locator('text=Click for JS Confirm').click(); 
        page.on('dialog', async dialog => {
         expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.dismiss();
             
        }       
        )             

})

 test('verify prompt alerts',{tag:["@smoke","@swetha"]}, async ({ page }) => {
   page.locator('text=Click for JS Prompt').click();  
        page.on('dialog', async dialog => {
         expect(dialog.message()).toBe('I am a JS prompt');
            await dialog.accept("sweth");
           
        }       
        )             

})
})