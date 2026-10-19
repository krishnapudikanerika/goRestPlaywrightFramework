import 
{ test, expect } from '@playwright/test';

import { userData }
from '../../testData/userData';

import { UserAPI } from '../../api/UserAPI';

import { UserPayload } from '../../api/payloads/UserPayload';

import { createUserSchema } from '../../schemas/createUserSchema';

import { SchemaValidator } from '../../api/validators/SchemaValidator';

test('Create User', async () => {

    const userAPI = new UserAPI();

    const response = await userAPI.createUser(
        UserPayload.createUser()
    );

    expect(response.status).toBe(userData.expectedStatusCodes.POST);

    SchemaValidator.validate(
        createUserSchema,
        response.data
    );

});