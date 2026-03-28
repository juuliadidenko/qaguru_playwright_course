export class GlobalFeedPage {
    constructor(page) {
      this.page = page;
      this.authorProfileLink = page.locator('.author');
      this.activeTab = page.locator('.feed-toggle').locator('button.nav-link.active');
      this.globalFeedTab = page.getByRole('button', { name: 'Global Feed'});
      this.followButton = page.getByRole('button', { name: /Follow/ });
      this.readMoreButton = page.locator('span').filter({ hasText: 'Read more...' });
      this.popularTagsList = page.locator(('.sidebar .tag-list'));
      this.popularTag = this.popularTagsList.getByRole('button')
      this.unfollowButton = page.getByRole('button', { name: /Unfollow/});
    }

    async getTopPopularTagName() {
      const topTag = this.popularTagsList.getByRole('button').first();
      return (await topTag.innerText());
    }

    async gotoGlobalFeed() {
      await this.globalFeedTab.click();
    }

    async selectTopPopularTag() {
      await this.popularTag.first().click();
    }

    async openFirstFeedPost() {
        await this.readMoreButton.first().click()
    }
  }