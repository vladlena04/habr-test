const Page = require("./page");

class SettingsPage extends Page {
  get btnUser() {
    return $('//div[@data-test-id="menu-toggle-user"]//*[name()="svg"]');
  }

  get btnPrflSttn() {
    return $('//span[contains(text(),"Настройки профиля")]');
  }

  get inputName() {
    return $('//input[@name="fullname"]');
  }

  get inputSpeciality() {
    return $('//input[@name="speciality"]');
  }

  get uploadAvatarDiv() {
    return $('//label[@class="base-file__label tm-file__label base-file__label_avatarimageurl "]')
  }

  get uploadAvatar() {
    return $('//*[@type="file"]');
  }

  get btnAddAvatar() {
    return $('//span[contains(text(),"Загрузить")]');
  }

  get dropdownGender() {
    return $('//select[@name="gender"]');
  }

  get dropdownBdayDay() {
    return $('//select[@name="birthdayDay"]');
  }

  get dropdownBdayMonth() {
    return $('//select[@name="birthdayMonth"]');
  }

  get dropdownBdayYear() {
    return $('//select[@name="birthdayYear"]');
  }

  get dropdownCountry() {
    return $('//select[@name="locationCountryId"]');
  }

  get dropdownRegion() {
    return $('//select[@name="locationRegionId"]');
  }

  get dropdownCity() {
    return $('//select[@name="locationCityId"]');
  }

  get inputLink() {
    return $('//button[@type="button"]');
  }

  async setProfileSettings() {
    await this.btnUser.click();
    browser.scroll();
    await this.btnPrflSttn.click();
    await this.inputName.setValue("Vlada");
    await this.inputSpeciality.setValue("Engineer");

const TEST_IMAGE = 'testdata/pictures/picture1.png';
const remoteFilePath = browser.uploadFile(TEST_IMAGE)
    browser.execute(function () {
      let elems=document.getElementsByClassName('base-file__label tm-file__label base-file__label_avatarimageurl ')
      for(let i=0; i<elems.length; i++)elems[i].style.display = 'block';
 })
    await this.uploadAvatarDiv.waitForDisplayed()
    await this.uploadAvatar.setValue(remoteFilePath)
    await this.btnAddAvatar.click();
    await this.dropdownGender.selectByIndex(1);
    await this.dropdownBdayDay.selectByIndex(1);
    await this.dropdownBdayMonth.selectByIndex(1);
    await this.dropdownBdayYear.selectByIndex(1);
    await this.dropdownCountry.selectByAttribute('value', '168');
    await this.dropdownRegion.ensureReady();
    await this.dropdownRegion.selectByAttribute('value', '1664');
    await this.dropdownCity.ensureReady();
    await this.dropdownCity.selectByAttribute('value', '448454');
  }

  open() {
    return super.open("profileSettings");
  }
}

module.exports = new SettingsPage();
