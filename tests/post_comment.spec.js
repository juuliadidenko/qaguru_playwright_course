import { ArticlePage } from '../src/pages/article.page';
import { GlobalFeedPage } from '../src/pages/globalfeed.page'
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { test, expect } from '@playwright/test';


let user = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.person.fullName(),
  }

let commentText = faker.lorem.sentence({min: 3, max: 10});

test('Post a comment', async ({ page }) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const globalFeed = new GlobalFeedPage(page);
    const article = new ArticlePage(page);
  
    await mainPage.open();
    await mainPage.gotoRegister();
    await registerPage.signup(user);
    await globalFeed.globalFeedTab.click();
    await globalFeed.openFirstFeedPost();
    await article.postComment(commentText);
    await expect(article.articleComment.last()).toContainText(commentText);
  });