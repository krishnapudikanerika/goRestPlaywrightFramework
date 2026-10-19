import { test, expect } from '@playwright/test';

import { userData }
from '../../testData/userData';

import { UserAPI } from '../../api/UserAPI';

import { UserPayload } from '../../api/payloads/UserPayload';

import { createUserSchema } from '../../schemas/createUserSchema';

import { SchemaValidator } from '../../api/validators/SchemaValidator';

test('Update User', async () => {

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

    // Update User

    const updateResponse =
        await userAPI.updateUser(
            userId,
            UserPayload.updateUser()
        );

    expect(updateResponse.status)
        .toBe(userData.expectedStatusCodes.GET);

    expect(
        updateResponse.data.status
    ).toBe(userData.updateUser.status);

    SchemaValidator.validate(
        createUserSchema,
        updateResponse.data
    );

});