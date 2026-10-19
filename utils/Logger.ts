export class Logger {

    static info(message: string) {

        console.log(
            `[INFO] ${new Date().toISOString()} : ${message}`
        );

    }

    static pass(message: string) {

        console.log(
            `[PASS] ${new Date().toISOString()} : ${message}`
        );

    }

    static fail(message: string) {

        console.log(
            `[FAIL] ${new Date().toISOString()} : ${message}`
        );

    }

    static warn(message: string) {

        console.log(
            `[WARN] ${new Date().toISOString()} : ${message}`
        );

    }

}