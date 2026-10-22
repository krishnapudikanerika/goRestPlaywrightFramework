import {
    Page,
    Locator,
    expect
} from '@playwright/test';

import {
    uiData
} from '../testData/uiData';

import {
    URLs
} from '../config/urls';

export class DocsPage {

    readonly page: Page;

    readonly docsLink: Locator;

    constructor(
        page: Page
    ) {

        this.page = page;

        this.docsLink =
            page
                .getByRole('navigation')
                .getByRole(
                    'link',
                    {
                        name: 'Docs'
                    }
                );

    }

    async openDocs() {

        await this.page.goto(
            URLs.HOME
        );

        await this.docsLink.click();

    }

    async verifyDocsPage() {

        await expect(
            this.page
        ).toHaveURL(
            uiData.urls.docsPage
        );

    }

}