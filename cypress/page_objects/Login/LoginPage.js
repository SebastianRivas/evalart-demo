import PageObject from "../../page_objects/PageObject.js";

class LoginPage extends PageObject {
  get usernameInput() {
    return 'input[name="username"]';
  }

  get passwordInput() {
    return 'input[name="password"]';
  }

  get loginButton() {
    return 'button[class="bg-white border-black p-2 border-2 rounded-md hover:bg-blue-300 w-1/2 mx-auto"]';
  }

  navigateTo() {
    this.visit("/automatization");
  }

  fillUsername(username) {
    this.type(this.usernameInput, username);
  }

  fillPassword(password) {
    this.type(this.passwordInput, password);
  }

  clickLogin() {
    this.click(this.loginButton);
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
