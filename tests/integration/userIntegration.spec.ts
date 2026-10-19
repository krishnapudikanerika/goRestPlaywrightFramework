import { test, expect } from '@playwright/test';

import { userData }
from '../../testData/userData';

import { UserAPI } from '../../api/UserAPI';
import { UserPayload } from '../../api/payloads/UserPayload';
import { URLs } from '../../config/urls';

test(
    'API UI Flow',
    async ({ page }) => {

        const userAPI = new UserAPI();

        // Create User via API

        const createResponse =
            await userAPI.createUser(
                UserPayload.createUser()
            );

        expect(createResponse.status)
            .toBe(userData.expectedStatusCodes.POST);

        const userId =
            createResponse.data.id;

        console.log(
            `Created User ID: ${userId}`
        );

        // Open UI

        await page.goto(
            URLs.HOME
        );

        await expect(page)
            .toHaveTitle(/Go REST/i);

    }
);