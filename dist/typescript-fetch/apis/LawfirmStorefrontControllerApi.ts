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
    ListLawfirmStorefrontsResponse,
    ListLawfirmStorefrontsResponseFromJSON,
    ListLawfirmStorefrontsResponseToJSON,
} from '../models';

export interface ListLawfirmStorefrontsUsingGETRequest {
    page?: number;
    regionCode?: string;
    size?: number;
}

/**
 * 
 */
export class LawfirmStorefrontControllerApi extends runtime.BaseAPI {

    /**
     * listLawfirmStorefronts
     */
    async listLawfirmStorefrontsUsingGETRaw(requestParameters: ListLawfirmStorefrontsUsingGETRequest): Promise<runtime.ApiResponse<ListLawfirmStorefrontsResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.regionCode !== undefined) {
            queryParameters['regionCode'] = requestParameters.regionCode;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/lawfirm-storefronts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListLawfirmStorefrontsResponseFromJSON(jsonValue));
    }

    /**
     * listLawfirmStorefronts
     */
    async listLawfirmStorefrontsUsingGET(requestParameters: ListLawfirmStorefrontsUsingGETRequest): Promise<ListLawfirmStorefrontsResponse> {
        const response = await this.listLawfirmStorefrontsUsingGETRaw(requestParameters);
        return await response.value();
    }

}
