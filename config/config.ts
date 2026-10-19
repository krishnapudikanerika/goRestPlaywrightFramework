import { env } from './env';

export const config = {

    uiBaseUrl:
        env.uiBaseUrl,

    apiBaseUrl:
        env.apiBaseUrl,

    token:
        env.token,

    timeout:
        30000

};