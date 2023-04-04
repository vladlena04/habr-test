const Page = require("./page");

class LogoutPage extends Page {
  
  get btnUser() {
    return $('//div[@data-test-id="menu-toggle-user"]//*[name()="svg"]');
  }

  get btnLogout() {
    return $('//span[contains(text(),"Выход")]')
  }

  async logout() {
    await this.btnUser.click();
    browser.scroll()
    await this.btnLogout.click();
  }

  open() {
    return super.open("logout");
  }
}

module.exports = new LogoutPage();
