import axios, {
    AxiosInstance,
    AxiosResponse
} from 'axios';

import { config } from '../config/config';
import { ApiLogger } from '../utils/ApiLogger';

export class BaseAPI {

    protected client: AxiosInstance;

    constructor() {

        this.client = axios.create({

            baseURL: config.apiBaseUrl,

            headers: {

                Authorization:
                    `Bearer ${config.token}`,

                'Content-Type':
                    'application/json'

            }

        });

    }

    async get(
        endpoint: string
    ): Promise<AxiosResponse> {

        ApiLogger.logRequest(
            'GET',
            endpoint
        );

        const response =
            await this.client.get(
                endpoint
            );

        ApiLogger.logResponse(
            response.status,
            response.data
        );

        return response;

    }

    async post(
        endpoint: string,
        payload: any
    ): Promise<AxiosResponse> {

        ApiLogger.logRequest(
            'POST',
            endpoint,
            payload
        );

        const response =
            await this.client.post(
                endpoint,
                payload
            );

        ApiLogger.logResponse(
            response.status,
            response.data
        );

        return response;

    }

    async patch(
        endpoint: string,
        payload: any
    ): Promise<AxiosResponse> {

        ApiLogger.logRequest(
            'PATCH',
            endpoint,
            payload
        );

        const response =
            await this.client.patch(
                endpoint,
                payload
            );

        ApiLogger.logResponse(
            response.status,
            response.data
        );

        return response;

    }

    async delete(
        endpoint: string
    ): Promise<AxiosResponse> {

        ApiLogger.logRequest(
            'DELETE',
            endpoint
        );

        const response =
            await this.client.delete(
                endpoint
            );

        ApiLogger.logResponse(
            response.status,
            response.data
        );

        return response;

    }

}