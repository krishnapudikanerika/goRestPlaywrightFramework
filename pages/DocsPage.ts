import { Page, expect } from '@playwright/test';
import { uiData }
from '../testData/uiData';
import { URLs } from '../config/urls';

export class DocsPage {

    constructor(
        private page: Page
    ) {}

    async openDocs() {

        await this.page.goto(
            URLs.HOME
        );

        await this.page
            .getByRole('navigation')
            .getByRole('link', {
                name: 'Docs'
            })
            .click();

    }

    async verifyDocsPage() {

        await expect(this.page)
            .toHaveURL(uiData.urls.docsPage);

    }

}