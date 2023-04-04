const LogoutPage = require("../pageobjects/logout.page");

describe("My Logout application", () => {
  beforeEach(async () => {
    await LoginPage.open(LoginPage);
    await browser.setCookies({
      name: "habr_uuid",
      value:
        "your_habr_uuid",
      domain: `.habr.com`,
      path: "/",
      expires: "date",
    });

    const cookies = await browser.getCookies();
    browser.setWindowSize(1200, 800);
  });

  afterEach(async () => {
    await browser.reloadSession();
  });

  it("should login with valid credentials", async () => {
    await LoginPage.login("email@mail.com", "password")
    await LogoutPage.logout();
  })
});
