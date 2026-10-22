import {
    test
} from '../../fixtures/testFixtures';

test(
    'Verify Docs Page',
    async ({
        docsPage
    }) => {

        await docsPage.openDocs();

        await docsPage.verifyDocsPage();

    }
);