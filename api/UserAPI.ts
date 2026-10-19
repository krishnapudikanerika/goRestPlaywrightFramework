import { BaseAPI }
from './BaseAPI';

import { ENDPOINTS }
from './endpoints';

export class UserAPI
extends BaseAPI {

    async getUsers() {

        return await this.get(
            ENDPOINTS.USERS
        );

    }

    async getUser(
        userId: number
    ) {

        return await this.get(
            `${ENDPOINTS.USERS}/${userId}`
        );

    }

    async createUser(
        payload: any
    ) {

        return await this.post(
            ENDPOINTS.USERS,
            payload
        );

    }

    async updateUser(
        userId: number,
        payload: any
    ) {

        return await this.patch(
            `${ENDPOINTS.USERS}/${userId}`,
            payload
        );

    }

    async deleteUser(
        userId: number
    ) {

        return await this.delete(
            `${ENDPOINTS.USERS}/${userId}`
        );

    }

    async getUserById(
    userId: number
) {

    return await this.get(
        `${ENDPOINTS.USERS}/${userId}`
    );

}


}