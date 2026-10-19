import { test, expect } from '@playwright/test';

import { userData }
from '../../testData/userData';

import { UserAPI } from '../../api/UserAPI';

import { UserPayload } from '../../api/payloads/UserPayload';

import { createUserSchema } from '../../schemas/createUserSchema';

import { SchemaValidator } from '../../api/validators/SchemaValidator';

test('Get User By Id', async () => {

    const userAPI = new UserAPI();

    const createResponse =
        await userAPI.createUser(
            UserPayload.createUser()
        );

    const userId =
        createResponse.data.id;

    const getResponse =
        await userAPI.getUserById(
            userId
        );

    expect(getResponse.status)
        .toBe(userData.expectedStatusCodes.GET);

    SchemaValidator.validate(
        createUserSchema,
        getResponse.data
    );

});