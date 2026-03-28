import { AuthorProfilePage } from '../src/pages/authorprofile.page';
import { GlobalFeedPage } from '../src/pages/globalfeed.page';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { test, expect } from '@playwright/test';


let user = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.person.fullName(),
  }

test('Follow an author from global feed', async ({ page }) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const globalFeed = new GlobalFeedPage(page);
    const authorPage = new AuthorProfilePage(page);
  
    await mainPage.open();
    await mainPage.gotoRegister();
    await registerPage.signup(user);
    await globalFeed.globalFeedTab.click();
    await globalFeed.authorProfileLink.first().click();
    await authorPage.follow();
    await expect(authorPage.unfollowButton).toBeVisible();
  });