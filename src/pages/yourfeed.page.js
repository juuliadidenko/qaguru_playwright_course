export class YourFeedPage {
    constructor(page) {
      this.page = page;
      this.yourFeedTab = page.getByRole('main');
      this.profileName = page.locator('.dropdown-toggle');
    }
  
    getProfileName() {
      return this.profileName;
    }
  }
  