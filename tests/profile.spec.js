import { faker } from '@faker-js/faker'
import { MainPage } from '../src/pages/main.page';
import { ProfilePage } from '../src/pages/profile.page';
import { RegisterPage } from '../src/pages/register.page';
import { SettingsPage } from '../src/pages/settings.page';
import { test, expect } from '@playwright/test';


let user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  username: faker.person.fullName(),
  bio: faker.lorem.paragraph(),
}

test('Edit profile bio', async ({ page }) => {
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  const settingsPage = new SettingsPage(page);
  const profilePage = new ProfilePage(page);

  await mainPage.open();
  await mainPage.gotoRegister();
  await registerPage.signup(user);
  await profilePage.openProfileMenu();
  await settingsPage.gotoSettings();
  await settingsPage.updateBioSection(user.bio);
  await profilePage.openProfileMenu();
  await profilePage.gotoProfile();
  await expect(profilePage.profileInfoBlock).toContainText(user.bio);
});