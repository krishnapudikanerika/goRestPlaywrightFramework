import Ajv from 'ajv';

const ajv = new Ajv();

export class SchemaValidator {

    static validate(
        schema: any,
        response: any
    ) {

        const validate =
            ajv.compile(schema);

        const valid =
            validate(response);

        if (!valid) {

            throw new Error(

                JSON.stringify(
                    validate.errors
                )

            );

        }

    }

}