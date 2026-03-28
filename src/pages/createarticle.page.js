export class CreateArticlePage {
    constructor(page) {
      this.page = page;
      this.articleBodyInput = page.getByRole('textbox', { name: 'Write your article (in markdown)' });
      this.articleDescriptionInput = page.getByRole('textbox', { name: 'What\'s this article about?' });
      this.articleTagsInput = page.getByRole('textbox', { name: 'Enter tags' });
      this.articleTitleInput = page.getByRole('textbox', { name: 'Article Title' });
      this.newArticleButton = page.getByRole('link', { name: /New Article/ });
      this.publishButton = page.getByRole('button', { name: 'Publish Article'});
    }

    async createNewArticle(article) {
      const { title, description, body, tags } = article;
      await this.articleTitleInput.fill(title);
      await this.articleDescriptionInput.fill(description);
      await this.articleBodyInput.fill(body);
      await this.articleTagsInput.fill(tags);
      await this.publishButton.click();
    }

    async gotoNewArticle() {
      await this.newArticleButton.click();
    }
  }
  