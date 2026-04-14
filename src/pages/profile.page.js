export class ProfilePage {
    constructor(page) {
      this.page = page;
      this.profileInfoBlock = page.locator('.user-info');
      this.profileLink = page.getByRole('link', { name: 'Profile' });
      this.profileName = page.locator('.dropdown-toggle');
    }

    getProfileName() {
      return this.profileName;
    }

    async gotoProfile() {
        await this.profileLink.click();
    }

    async openProfileMenu() {
      await this.profileName.click()
    }
  }