import {test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.pinterest.com/');
});

test('login', async ({ page }) => {
  await page.locator("Email or phone number").fill("9709558669");
  await page.locator("Password").fill("horavanya");
  await page.locator("botton",{name:"log in"}).click()
        
});

test('invalid login',async ({ page }) => {
  await page.locator("Email or phone number").fill("9886158433");
  await page.locator("Password").fill("qwerty@123");
  await page.locator("Login In").click()
});

test('invalid email',async ({ page }) => {
  await page.locator("Email or phone number").fill("9886158433");
  await page.locator("Password").fill("horavanya@22");
  await page.locator("Login In").click()
});

   
test('invalid password',async ({ page }) => {
  await page.locator('// input[@id= "email"]').fill("9865777102");
  await page.locator("Password").fill("horavanya");
  await page.locator("Login In").click()

});






