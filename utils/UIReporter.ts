import { Logger } from './Logger';

export class UIReporter {

    static step(
        message: string
    ) {

        Logger.info(
            `[UI STEP] ${message}`
        );

    }

    static action(
        message: string
    ) {

        Logger.info(
            `[ACTION] ${message}`
        );

    }

    static verification(
        message: string
    ) {

        Logger.info(
            `[VERIFY] ${message}`
        );

    }

}