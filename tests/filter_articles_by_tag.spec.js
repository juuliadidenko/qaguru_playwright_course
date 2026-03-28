import { faker } from '@faker-js/faker'
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { test, expect } from '@playwright/test';
import { GlobalFeedPage } from '../src/pages/globalfeed.page';


let user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  username: faker.person.fullName(),
}

test('Filter articles in global feed by top tag', async ({ page }) => {
  const globalFeed = new GlobalFeedPage(page);
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);

  await mainPage.open();
  await mainPage.gotoRegister();
  await registerPage.signup(user);
  await mainPage.gotoHome();
  await globalFeed.gotoGlobalFeed();
  const topTag = await globalFeed.getTopPopularTagName();
  await globalFeed.selectTopPopularTag();
  await expect(globalFeed.activeTab).toContainText(topTag);
});