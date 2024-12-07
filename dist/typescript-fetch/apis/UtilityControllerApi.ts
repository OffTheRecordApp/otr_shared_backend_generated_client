/* tslint:disable */
/* eslint-disable */
/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    BackfillLawfirmTransactionRecordsRequest,
    BackfillLawfirmTransactionRecordsRequestFromJSON,
    BackfillLawfirmTransactionRecordsRequestToJSON,
    BackfillLawfirmTransactionRecordsResponse,
    BackfillLawfirmTransactionRecordsResponseFromJSON,
    BackfillLawfirmTransactionRecordsResponseToJSON,
} from '../models';

export interface BackfillLawfirmTransactionRecordsUsingPOSTRequest {
    request: BackfillLawfirmTransactionRecordsRequest;
}

export interface SetStatusUsingPOSTRequest {
    lawfirmTransactionsStatus?: boolean;
    syncStatus?: boolean;
}

/**
 * 
 */
export class UtilityControllerApi extends runtime.BaseAPI {

    /**
     * backfillLawfirmTransactionRecords
     */
    async backfillLawfirmTransactionRecordsUsingPOSTRaw(requestParameters: BackfillLawfirmTransactionRecordsUsingPOSTRequest): Promise<runtime.ApiResponse<BackfillLawfirmTransactionRecordsResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling backfillLawfirmTransactionRecordsUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/utility/backfill-lawfirm-transaction-records`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BackfillLawfirmTransactionRecordsRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BackfillLawfirmTransactionRecordsResponseFromJSON(jsonValue));
    }

    /**
     * backfillLawfirmTransactionRecords
     */
    async backfillLawfirmTransactionRecordsUsingPOST(requestParameters: BackfillLawfirmTransactionRecordsUsingPOSTRequest): Promise<BackfillLawfirmTransactionRecordsResponse> {
        const response = await this.backfillLawfirmTransactionRecordsUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * getStatus
     */
    async getStatusUsingGETRaw(): Promise<runtime.ApiResponse<{ [key: string]: boolean; }>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/utility/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * getStatus
     */
    async getStatusUsingGET(): Promise<{ [key: string]: boolean; }> {
        const response = await this.getStatusUsingGETRaw();
        return await response.value();
    }

    /**
     * setStatus
     */
    async setStatusUsingPOSTRaw(requestParameters: SetStatusUsingPOSTRequest): Promise<runtime.ApiResponse<{ [key: string]: boolean; }>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.lawfirmTransactionsStatus !== undefined) {
            queryParameters['lawfirmTransactionsStatus'] = requestParameters.lawfirmTransactionsStatus;
        }

        if (requestParameters.syncStatus !== undefined) {
            queryParameters['syncStatus'] = requestParameters.syncStatus;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/utility/status`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * setStatus
     */
    async setStatusUsingPOST(requestParameters: SetStatusUsingPOSTRequest): Promise<{ [key: string]: boolean; }> {
        const response = await this.setStatusUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}
