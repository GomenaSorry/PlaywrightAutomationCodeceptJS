Feature('E2E example')

Before(async ({ I }) => {
    console.log("BEFORE HOOK")
    await I.amOnPage('https://www.saucedemo.com')
})

After(async ({ I }) => {
    console.log("AFTER HOOK")
})

Scenario('E2E sample - Login test failed',async ({ I }) => {
    await I.click('#login-button')
    await I.see('Epic sadface: Username is required', 'h3')
})

Scenario('E2E sample - Login test success',async ({ I, loginPage}) => {
    // await I.fillField('#user-name', 'standard_user')
    // await I.fillField('#password', secret('secret_sauce'))
    // await I.click('#login-button')
    await loginPage.submitLogin('standard_user', 'secret_sauce')
    await I.see('PRODUCTS', '.title')
})