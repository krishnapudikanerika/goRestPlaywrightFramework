import {
    userData
}
from '../../testData/userData';

export class UserPayload {

    static createUser() {

        return {

            name:
                `User_${Date.now()}`,

            email:
                `user${Date.now()}@mail.com`,

            gender:
                userData
                .createUser
                .gender,

            status:
                userData
                .createUser
                .status

        };

    }

    static updateUser() {

        return {

            status:
                userData
                .updateUser
                .status

        };

    }

}