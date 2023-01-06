/// <reference path="./steps.d.ts" />

Feature('example')

Scenario('Load example.com website', async ({ I }) => {
    await I.amOnPage('https://www.example.com')
    await I.see('Example')
    await I.seeElement('h1')
})

Scenario('Load example.com website and check not existing elements', async ({ I }) => {
    await I.amOnPage('https://www.example.com')
    await I.dontSee('This should not exist')
    await I.dontSeeElement('#thisdontexist')
})