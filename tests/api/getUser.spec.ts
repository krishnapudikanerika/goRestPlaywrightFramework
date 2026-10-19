import { test, expect } from '@playwright/test';

import { userData }
from '../../testData/userData';

import { UserAPI } from '../../api/UserAPI';

import { usersSchema } from '../../schemas/usersSchema';

import { SchemaValidator } from '../../api/validators/SchemaValidator';

test('Get Users', async () => {

    const userAPI = new UserAPI();

    const response = await userAPI.getUsers();

    expect(response.status).toBe(userData.expectedStatusCodes.GET);

    expect(response.data.length).toBeGreaterThan(0);

    SchemaValidator.validate(
        usersSchema,
        response.data
    );

});