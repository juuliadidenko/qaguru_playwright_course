import { ArticlePage } from '../src/pages/article.page';
import { CreateArticlePage } from '../src/pages/createarticle.page';
import { faker } from '@faker-js/faker'
import { GlobalFeedPage } from '../src/pages/globalfeed.page';
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { test, expect } from '@playwright/test';


let user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  username: faker.person.fullName(),
}

let article = {
  title: faker.lorem.sentence(3),
  description: faker.lorem.sentence(5),
  body: faker.lorem.paragraph(3),
  tags: faker.lorem.slug(),
}

let commentText = faker.lorem.sentence({min: 3, max: 10});

test.describe('Articles', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);

    await mainPage.open();
    await mainPage.gotoRegister();
    await registerPage.signup(user);
  });

  test('Create article', async ({ page }) => {
    const newArticlePage = new CreateArticlePage(page);
    const articlePage = new ArticlePage(page);

    await newArticlePage.gotoNewArticle();
    await newArticlePage.createNewArticle(article);
    await articlePage.gotoArticle();
    await expect(articlePage.articleTitle).toHaveText(article.title);
  });

  test('Post a comment', async ({ page }) => {
    const globalFeed = new GlobalFeedPage(page);
    const article = new ArticlePage(page);
  
    await globalFeed.gotoGlobalFeed()
    await globalFeed.openFirstFeedPost();
    await article.postComment(commentText);
    await expect(article.articleComment.last()).toContainText(commentText);
  });

  test('Filter articles in global feed by top tag', async ({ page }) => {
    const globalFeed = new GlobalFeedPage(page);

    await globalFeed.gotoGlobalFeed();
    const topTag = await globalFeed.getTopPopularTagName();
    await globalFeed.selectTopPopularTag();
    await expect(globalFeed.activeTab).toContainText(topTag);
  });
} )

