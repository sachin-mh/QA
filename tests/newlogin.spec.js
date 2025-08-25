import test from "@playwright/test";
import { LoginPage } from "../pageObjects/login.po";
const testData = require('../Fixture/loginFixture.json');

test.beforeEach(async ({page}) => {
    await page.goto('/');
})

test.describe('Valid login tests',() => {
    test('Login using username and password', async({page}) => {
        const login = new LoginPage(page);
        await login.login(testData.validuser.usertName,testData.validuser.password);
        await login.verifyValidLogin();
    });
})

test.describe('inValid login tests',() => {
    test('Login using invalid username and validpassword', async({page}) => {
        const login = new LoginPage(page);
        await login.login(testData.invalidUser.userNmae,testData);
       
    });
})

