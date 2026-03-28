const settingsURL = 'https://realworld.qa.guru/#/settings'

export class SettingsPage {
    constructor(page) {
      this.page = page;
      this.bioInput = page.getByRole('textbox', { name: 'Short bio about you' });
      this.settingsLink = page.getByRole('link', { name: 'Settings' });
      this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings' });
    }

    async gotoSettings() {
        await this.settingsLink.click();
        await this.page.waitForURL(`${settingsURL}`);
    }

    async updateBioSection(bioText) {
        await this.bioInput.fill(bioText);
        await this.updateSettingsButton.click();
        await this.page.waitForResponse('https://realworld.qa.guru/api/user');
    }
  }