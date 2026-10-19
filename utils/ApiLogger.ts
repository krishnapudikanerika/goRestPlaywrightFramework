export class ApiLogger {

    static logRequest(
        method: string,
        endpoint: string,
        payload?: any
    ) {

        console.log('\n================================');
        console.log(`REQUEST METHOD : ${method}`);
        console.log(`REQUEST URL    : ${endpoint}`);

        if (payload) {

            console.log('REQUEST BODY   :');

            console.log(
                JSON.stringify(
                    payload,
                    null,
                    2
                )
            );

        }

        console.log('================================\n');

    }

    static logResponse(
        statusCode: number,
        response: any
    ) {

        console.log('\n================================');
        console.log(`STATUS CODE    : ${statusCode}`);

        if (
            response === '' ||
            response === null ||
            response === undefined
        ) {

            console.log(
                'NO RESPONSE BODY'
            );

        } else {

            console.log(
                'RESPONSE BODY  :'
            );

            console.log(
                JSON.stringify(
                    response,
                    null,
                    2
                )
            );

        }

        console.log('================================\n');

    }

}