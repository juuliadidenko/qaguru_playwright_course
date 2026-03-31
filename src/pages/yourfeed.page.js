export class YourFeedPage {
    constructor(page) {
      this.page = page;
      this.yourFeedTab = page.getByRole('main');
    }
  }
  