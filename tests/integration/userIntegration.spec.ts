import { test, expect }
from '@playwright/test';

import { userData }
from '../../testData/userData';

import { UserAPI }
from '../../api/UserAPI';

import {
    UserPayload
}
from '../../api/payloads/UserPayload';

import { URLs }
from '../../config/urls';

import {
    ConsolePage
}
from '../../pages/ConsolePage';

import { env }
from '../../config/env';
import { uiData } from '../../testData/uiData';


test(
    'API UI Flow',
    async ({ page }) => {

        const userAPI =
            new UserAPI();

        const consolePage =
            new ConsolePage(page);

        // Create User via API

        const createResponse =
            await userAPI.createUser(
                UserPayload.createUser()
            );

        expect(
            createResponse.status
        ).toBe(
            userData.expectedStatusCodes.POST
        );

        const userId =
            createResponse.data.id;

        const userName =
            createResponse.data.name;

        console.log(
            `Created User ID: ${userId}`
        );

        // Open Website

        await page.goto(
            URLs.HOME
        );

        // Open Console

      await consolePage.login(

    uiData.credentials.username,

    uiData.credentials.password

);

await consolePage.navigateToConsole();

const userApiUrl =
`${env.apiBaseUrl}/users/${userId}`;

await consolePage.enterApiUrl(
    userApiUrl
);

await consolePage.clickSend();

await consolePage.validateStatus(
    userData.expectedStatusCodes.GET
);

await consolePage.validateUserExists(
    userName
);

    }
);