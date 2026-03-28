import { faker } from '@faker-js/faker'
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { SettingsPage } from '../src/pages/settings.page';
import { test, expect } from '@playwright/test';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import { ProfilePage } from '../src/pages/profile.page';


let user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  username: faker.person.fullName(),
  bio: faker.lorem.paragraph(),
}

test('Edit profile bio', async ({ page }) => {
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  const yourFeed = new YourFeedPage(page);
  const settingsPage = new SettingsPage(page);
  const profilePage = new ProfilePage(page);

  await mainPage.open();
  await mainPage.gotoRegister();
  await registerPage.signup(user);
  await yourFeed.profileName.click();
  await settingsPage.gotoSettings();
  await settingsPage.updateBioSection(user.bio);
  await yourFeed.profileName.click();
  await profilePage.gotoProfile();
  await expect(profilePage.getBioText(user.bio)).toBeVisible();
});