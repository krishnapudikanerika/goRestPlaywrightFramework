import { expect } from '@playwright/test';

export class ValidationLogger {

    static validateStatusCode(
        actual: number,
        expected: number
    ) {

        console.log(
            `Expected Status : ${expected}`
        );

        console.log(
            `Actual Status   : ${actual}`
        );

        expect(actual)
            .toBe(expected);

    }

    static validateValue(
        actual: any,
        expected: any,
        field: string
    ) {

        console.log(
            `Validating Field : ${field}`
        );

        console.log(
            `Expected         : ${expected}`
        );

        console.log(
            `Actual           : ${actual}`
        );

        expect(actual)
            .toBe(expected);

    }

}