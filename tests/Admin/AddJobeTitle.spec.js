import{test, expect} from '@playwright/test';
import apptestdata from "../../testdata/admin.json"

test.beforeEach(async ({page}) =>{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill(apptestdata.username)
    await page.locator("input[type='password']").fill(apptestdata.password)
    await page.locator("button[type='submit']").click()

})

test('Verify add jobe title', async({page})=>{
    await page.locator("//span[text()='Admin']").click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.getByRole('menuitem', { name: 'Job Titles' }).click()
    await page.getByRole('button', { name: 'Add' }).click()
    const jobtitle=Math.random().toString(36).substring(2, 12)
    await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(jobtitle)
    await page.getByRole('textbox', { name: 'Type description here' }).fill("enter discription")
    await page.getByPlaceholder('Add note').fill("fill tthe note")
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
    await page.getByText(jobtitle).isVisible()


})


test('Verify add jobe title2', async({page})=>{
    await page.locator("//span[text()='Admin']").click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.getByRole('menuitem', { name: 'Job Titles' }).click()
    await page.getByRole('button', { name: 'Add' }).click()
    const jobtitle=Math.random().toString(36).substring(2, 12)
    await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(jobtitle)
    await page.getByRole('textbox', { name: 'Type description here' }).fill("enter discription")
    await page.getByPlaceholder('Add note').fill("fill tthe note")
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
    await page.getByText(jobtitle).isVisible()


})