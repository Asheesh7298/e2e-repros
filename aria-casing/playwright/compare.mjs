// The same page in Playwright: node playwright/compare.mjs
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(readFileSync(new URL('../app/page.html', import.meta.url), 'utf8'));
console.log('checkbox checked:true ->', await page.getByRole('checkbox', { checked: true }).count());
console.log('button expanded:true  ->', await page.getByRole('button', { expanded: true }).count());
console.log('button pressed:true   ->', await page.getByRole('button', { pressed: true }).count());
console.log('button "Save"         ->', await page.getByRole('button', { name: 'Save' }).count());
console.log(await page.locator('body').ariaSnapshot());
await browser.close();
