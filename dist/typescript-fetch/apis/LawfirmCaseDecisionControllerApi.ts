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
    SetLawfirmCaseDecisionRequest,
    SetLawfirmCaseDecisionRequestFromJSON,
    SetLawfirmCaseDecisionRequestToJSON,
} from '../models';

export interface SetLawfirmCaseDecisionUsingPOSTRequest {
    caseId: string;
    request: SetLawfirmCaseDecisionRequest;
}

/**
 * 
 */
export class LawfirmCaseDecisionControllerApi extends runtime.BaseAPI {

    /**
     * setLawfirmCaseDecision
     */
    async setLawfirmCaseDecisionUsingPOSTRaw(requestParameters: SetLawfirmCaseDecisionUsingPOSTRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling setLawfirmCaseDecisionUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling setLawfirmCaseDecisionUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirm/cases/{caseId}/decision`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetLawfirmCaseDecisionRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * setLawfirmCaseDecision
     */
    async setLawfirmCaseDecisionUsingPOST(requestParameters: SetLawfirmCaseDecisionUsingPOSTRequest): Promise<object> {
        const response = await this.setLawfirmCaseDecisionUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}
