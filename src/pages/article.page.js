export const ARTICLE_PAGE_URL = 'https://realworld.qa.guru/#/article/'

export class ArticlePage {
    constructor(page) {
      this.page = page;
      this.articleComment = page.locator('.article-page .card:not(.comment-form)');
      this.articleTitle = page.getByRole('heading');
      this.commentInput = page.getByRole('textbox', { name: 'Write a comment...'});
      this.postCommentButton = page.getByRole('button', { name: 'Post Comment' });
      
    }

    async gotoArticle() {
        await this.page.waitForURL(`${ARTICLE_PAGE_URL}*`);
    }

    async postComment(commentText) {
      await this.commentInput.fill(commentText);
      await this.postCommentButton.click();
    }
  }
  