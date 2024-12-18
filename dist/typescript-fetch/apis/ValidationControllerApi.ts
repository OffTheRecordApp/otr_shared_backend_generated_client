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

export interface ValidateEmailAddressUsingGETRequest {
    email: string;
}

/**
 * 
 */
export class ValidationControllerApi extends runtime.BaseAPI {

    /**
     * validateEmailAddress
     */
    async validateEmailAddressUsingGETRaw(requestParameters: ValidateEmailAddressUsingGETRequest): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.email === null || requestParameters.email === undefined) {
            throw new runtime.RequiredError('email','Required parameter requestParameters.email was null or undefined when calling validateEmailAddressUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/validate/email`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * validateEmailAddress
     */
    async validateEmailAddressUsingGET(requestParameters: ValidateEmailAddressUsingGETRequest): Promise<boolean> {
        const response = await this.validateEmailAddressUsingGETRaw(requestParameters);
        return await response.value();
    }

}
