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

export interface AddSocialMediaActionUsingPOSTRequest {
    caseId: string;
}

/**
 * 
 */
export class CaseResolutionControllerApi extends runtime.BaseAPI {

    /**
     * addSocialMediaAction
     */
    async addSocialMediaActionUsingPOSTRaw(requestParameters: AddSocialMediaActionUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling addSocialMediaActionUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/send-social-media-ask`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * addSocialMediaAction
     */
    async addSocialMediaActionUsingPOST(requestParameters: AddSocialMediaActionUsingPOSTRequest): Promise<void> {
        await this.addSocialMediaActionUsingPOSTRaw(requestParameters);
    }

}
