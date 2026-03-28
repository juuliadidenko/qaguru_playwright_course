export class MainPage {
    constructor(page) {
      this.page = page;
      this.homeLink = page.getByRole('link', { name: /Home/ });
      this.signupLink = page.getByRole('link', { name: 'Sign up' });
    }
  
    async gotoRegister() {
      await this.signupLink.click();
    }

    async gotoHome() {
      await this.homeLink.click();
    }
  
    //todo
    async open() {
      await this.page.goto('https://realworld.qa.guru/');
    }
  }
  