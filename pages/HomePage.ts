import { Page, expect } from '@playwright/test';
import { uiData }
from '../testData/uiData';
import { URLs } from '../config/urls';

export class HomePage {

    constructor(
        private page: Page
    ) {}

    async open() {

        await this.page.goto(
            URLs.HOME
        );

    }

    async verifyHomePage() {

        await expect(this.page)
            .toHaveTitle(uiData.titles.homePageTitle);

    }

}