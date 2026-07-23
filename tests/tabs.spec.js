import{test, expect} from "@playwright/test";

test.describe("handle tab", () => {
    test("TABS", async({ page })=>{
        await page.goto("https://www.flipkart.com/search?q")
        await page.getByPlaceholder('Search for Products, Brands and More').fill("iphone")
        await page.keyboard.press("Enter")

    const [newPage]= await Promise.all([

        page.waitForEvent('popup'),
        await page.locator("div[class='RG5Slk']").first().click()
    ])
        await expect(newPage.locator("//div[text()='Selected Color:']")).toBeVisible()

    })

})