const Page = require("./page");

class LoginPage extends Page {
  get usersButton() {
    return $('.//div[@class="tm-dropdown"]//*[name()="svg"]');
  }

  get authButton() {
    return $('.//a[@class="tm-user-menu__auth-button"]');
  }

  get inputUsername() {
    return $('.//input[@id="email_field"]');
  }

  get inputPassword() {
    return $('.//input[@id="password_field"]');
  }

  get btnSubmit() {
    return $('//button[@name="go"]');
  }

  get btnUser() {
    return $('//div[@data-test-id="menu-toggle-user"]//*[name()="svg"]');
  }

  get btnLogout() {
    return $('//span[contains(text(),"Выход")]')
  }

  async login(username, password) {
    await this.usersButton.click();
    await this.authButton.click();
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
