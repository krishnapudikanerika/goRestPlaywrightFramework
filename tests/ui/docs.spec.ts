import {
    test
} from '../../fixtures/testFixtures';

test(
    'Verify Home Page',
    async ({
        homePage
    }) => {

        await homePage.open();

        await homePage.verifyHomePage();

    }
);