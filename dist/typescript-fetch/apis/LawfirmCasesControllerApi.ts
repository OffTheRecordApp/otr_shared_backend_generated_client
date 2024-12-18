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
    GetLawfirmSummaryCaseRequest,
    GetLawfirmSummaryCaseRequestFromJSON,
    GetLawfirmSummaryCaseRequestToJSON,
    GetLawfirmSummaryCasesResponse,
    GetLawfirmSummaryCasesResponseFromJSON,
    GetLawfirmSummaryCasesResponseToJSON,
} from '../models';

export interface GetLawfirmCasesByPageUsingPOSTRequest {
    lawfirmIdString: string;
    request: GetLawfirmSummaryCaseRequest;
    courtDateFilter?: GetLawfirmCasesByPageUsingPOSTCourtDateFilterEnum;
    end?: Date;
    hasPaymentPlan?: boolean;
    length?: number;
    page?: number;
    start?: Date;
}

/**
 * 
 */
export class LawfirmCasesControllerApi extends runtime.BaseAPI {

    /**
     * getLawfirmCasesByPage
     */
    async getLawfirmCasesByPageUsingPOSTRaw(requestParameters: GetLawfirmCasesByPageUsingPOSTRequest): Promise<runtime.ApiResponse<GetLawfirmSummaryCasesResponse>> {
        if (requestParameters.lawfirmIdString === null || requestParameters.lawfirmIdString === undefined) {
            throw new runtime.RequiredError('lawfirmIdString','Required parameter requestParameters.lawfirmIdString was null or undefined when calling getLawfirmCasesByPageUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling getLawfirmCasesByPageUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.courtDateFilter !== undefined) {
            queryParameters['courtDateFilter'] = requestParameters.courtDateFilter;
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString();
        }

        if (requestParameters.hasPaymentPlan !== undefined) {
            queryParameters['hasPaymentPlan'] = requestParameters.hasPaymentPlan;
        }

        if (requestParameters.length !== undefined) {
            queryParameters['length'] = requestParameters.length;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/lawfirm/{lawfirmIdString}/cases`.replace(`{${"lawfirmIdString"}}`, encodeURIComponent(String(requestParameters.lawfirmIdString))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GetLawfirmSummaryCaseRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLawfirmSummaryCasesResponseFromJSON(jsonValue));
    }

    /**
     * getLawfirmCasesByPage
     */
    async getLawfirmCasesByPageUsingPOST(requestParameters: GetLawfirmCasesByPageUsingPOSTRequest): Promise<GetLawfirmSummaryCasesResponse> {
        const response = await this.getLawfirmCasesByPageUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetLawfirmCasesByPageUsingPOSTCourtDateFilterEnum {
    NOCOURTDATE = 'NO_COURT_DATE',
    PASTDUE = 'PAST_DUE',
    PASTDUEANDNOCOURTDATE = 'PAST_DUE_AND_NO_COURT_DATE',
    UPCOMING = 'UPCOMING'
}
