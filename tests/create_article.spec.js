import { ArticlePage } from '../src/pages/article.page';
import { CreateArticlePage } from '../src/pages/createarticle.page';
import { faker } from '@faker-js/faker'
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

test('Create article', async ({ page }) => {
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  const newArticlePage = new CreateArticlePage(page);
  const articlePage = new ArticlePage(page);

  await mainPage.open();
  await mainPage.gotoRegister();
  await registerPage.signup(user);
  await newArticlePage.gotoNewArticle();
  await newArticlePage.createNewArticle(article);
  await articlePage.gotoArticle();
  await expect(articlePage.articleTitle).toHaveText(article.title);
});