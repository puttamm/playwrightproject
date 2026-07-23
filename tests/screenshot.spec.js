import{test, expect} from '@playwright/test';
test.describe("sampleofScreenshot",async()=>{
test("Page Screenshot",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(5000)
    await page.screenshot({path:'tests/screenshot/'+Date.now()+'Homepage.png',fullPage:true})


})
test("pagescreenshot",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").screenshot({path:'tests/screenshot/'+Date.now()+'username.png'})
})


})