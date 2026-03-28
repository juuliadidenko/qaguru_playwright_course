export class ProfilePage {
    constructor(page) {
      this.page = page;
      this.profileLink = page.getByRole('link', { name: 'Profile' });
    }

    getBioText(bio) {
        return this.page.getByText(bio, { exact: true });
    }

    async gotoProfile() {
        await this.profileLink.click();
    }
  }