export class AuthorProfilePage {
    constructor(page) {
      this.page = page;
      this.followButton = page.getByRole('button', { name: /Follow/ });
      this.unfollowButton = page.getByRole('button', { name: /Unfollow/});
    }

    async follow() {
        await this.followButton.click();
    }
  }