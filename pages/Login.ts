const { I } = inject();

module.exports = {

  // insert your locators and methods here
  usernameField: '#user-name',
  passwordField: '#password',
  loginButton: '#login-button',
  loginContainer: '#login_button_container',

  async submitLogin(username: String, password: String) {
    await I.fillField(this.usernameField, username)
    await I.fillField(this.passwordField, secret(password))
    await I.click(this.loginButton)
  },

  async assertLoginContainerIsVisible(){
    await I.see(this.loginContainer)
  }
}
