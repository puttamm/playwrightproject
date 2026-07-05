import {test, expect} from "playwright/test";

test.beforeEach(async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill(process.env.App_Username);
    await page.locator("input[type='password']").fill(process.env.App_Password);
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",{timeout:30000})

})
test("verify add employee", async({page})=>{
    await page.locator("//span[text()='PIM']").click();
    await page.locator("//h5[text()='Employee Information']").textContent("Employee Information")
    await page.getByRole('button', { name: 'Add' }).click()
    await page.getByRole('heading', { name: 'Add Employee' }).textContent("Add Employee")
    await page.locator("//input[@name='firstName']").fill("SWETHA")
    await page.locator("//input[@name='lastName']").fill("K")
    const randomNumber = Math.floor(Math.random() * 1000000);
    console.log("Random Number: " + randomNumber);
     await page.locator("div[class='orangehrm-employee-form']>div:nth-child(1)>div:nth-child(2)>div>div>div:nth-child(2)>input").fill("swetha" + randomNumber.toString());
    await page.getByRole('button', { name: 'Save' }).click({timeout:30000})
})