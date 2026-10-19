import { test, expect } from '@playwright/test';

import { userData }
from '../../testData/userData';

import { UserAPI } from '../../api/UserAPI';

import { UserPayload } from '../../api/payloads/UserPayload';

test('Delete User', async () => {

    const userAPI = new UserAPI();

    // Create User

    const createResponse =
        await userAPI.createUser(
            UserPayload.createUser()
        );

    expect(createResponse.status)
        .toBe(userData.expectedStatusCodes.POST);

    const userId =
        createResponse.data.id;

    // Delete User

    const deleteResponse =
        await userAPI.deleteUser(
            userId
        );

    expect(deleteResponse.status)
        .toBe(userData.expectedStatusCodes.DELETE);

});