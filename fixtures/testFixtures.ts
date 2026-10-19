import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { DocsPage } from '../pages/DocsPage';

type MyFixtures = {

    homePage: HomePage;

    docsPage: DocsPage;

};

export const test = base.extend<MyFixtures>({

    homePage: async ({ page }, use) => {

        await use(
            new HomePage(page)
        );

    },

    docsPage: async ({ page }, use) => {

        await use(
            new DocsPage(page)
        );

    }

});

export { expect };