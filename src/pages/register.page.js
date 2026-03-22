export class RegisterPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.getByRole('textbox', { name: 'Email' });
      this.nameInput = page.getByRole('textbox', { name: 'Your Name' });
      this.passwordInput = page.getByRole('textbox', { name: 'Password' });
      this.signUpBtn = page.getByRole('button', { name: 'Sign up' });
    }
  
    async signup(user) {
      const { email, password, username } = user;
      await this.nameInput.click();
      await this.nameInput.fill(username);
      await this.emailInput.click();
      await this.emailInput.fill(email);
      await this.passwordInput.click();
      await this.passwordInput.fill(password);
      await this.signUpBtn.click();
    }
  }
  