import { expect } from "@playwright/test";

export class AddEmployeePage {
    constructor(page) {
        this.page = page;
        this.pimMenu = page.locator("//span[text()='PIM']");
        this.employeeInformationHeading = page.locator("//h5[text()='Employee Information']");
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.addEmployeeHeading = page.getByRole('heading', { name: 'Add Employee' });
        this.firstNameInput = page.locator("//input[@name='firstName']");
        this.lastNameInput = page.locator("//input[@name='lastName']");
        this.usernameInput = page.locator("div[class='orangehrm-employee-form']>div:nth-child(1)>div:nth-child(2)>div>div>div:nth-child(2)>input");
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.successMessage = page.locator(".oxd-toast-content-text");
    }

    async openAddEmployeePage() {
        await this.pimMenu.click();
        await expect(this.employeeInformationHeading).toBeVisible();
        await this.addButton.click();
        await expect(this.addEmployeeHeading).toBeVisible();
    }

    async fillEmployeeDetails(firstName, lastName, username) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.usernameInput.fill(username);
    }

    async saveEmployee() {
        await this.saveButton.click({ timeout: 30000 });
    }

    async verifyEmployeeCreated(firstName, lastName) {
        await expect(this.page.locator("//h6[text()='Employee Information']")).toBeVisible({ timeout: 30000 });
        await expect(this.page.locator("//h6[contains(text(),'" + firstName + "')]" )).toBeVisible({ timeout: 30000 });
        await expect(this.page.locator("//h6[contains(text(),'" + lastName + "')]" )).toBeVisible({ timeout: 30000 });
    }
}