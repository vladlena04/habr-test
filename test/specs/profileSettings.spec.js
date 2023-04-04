const profileSettingsPage = require("../pageobjects/profileSettings.page");

describe("My profile settings", () => {
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

  it("should rewright profile", async () => {
    await LoginPage.login(yourEmail,yourPassword);
    await profileSettingsPage.setProfileSettings()
  })
});
