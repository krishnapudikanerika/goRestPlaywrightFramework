export class RandomDataGenerator {

    static getEmail() {

        return `user${Date.now()}@mail.com`;

    }

    static getUserName() {

        return `User_${Date.now()}`;

    }

}
