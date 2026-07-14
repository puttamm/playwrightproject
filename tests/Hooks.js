import{test } from "@playwright/test";
import { after } from "node:test";
test.beforeAll(async()=>{
    console.log("Before all is running")
})
test.beforeEach(async()=>{
    console.log("Before each is running")
})

test.afterEach(async()=>{
    console.log("After each is running")
})
test.afterAll(async()=>{
    console.log("After all is running")
})

test.describe("Group 1", async()=>{
    test("Test 1", async({page})=>{
        console.log("Test 1 is running")
    })
    test.only("Test 2", async({page})=>{
        console.log("Test 2 is running")
    })
    test.skip("Test 3", async({page})=>{
        test.fail()
        console.log("Test 3 is running")
        expect(1).toBe(2)
    })

})

test.describe("Group 2", async()=>{
    test.slow()
    test("Test 4", async({page})=>{
        console.log("Test 4 is running")
    })
    test.only("Test 5", async({page})=>{
        console.log("Test 5 is running")
    })
    test("Test 6", async({page})=>{
        console.log("Test 6 is running")
    })

})
