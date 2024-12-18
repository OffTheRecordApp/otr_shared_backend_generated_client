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
    PredictCitationRequest,
    PredictCitationRequestFromJSON,
    PredictCitationRequestToJSON,
    PredictCitationResponse,
    PredictCitationResponseFromJSON,
    PredictCitationResponseToJSON,
    PredictRichCitationResponse,
    PredictRichCitationResponseFromJSON,
    PredictRichCitationResponseToJSON,
} from '../models';

export interface PredictCitationFieldsUsingPOSTRequest {
    request: PredictCitationRequest;
}

export interface PredictRichCitationFieldsUsingPOSTRequest {
    request: PredictCitationRequest;
}

/**
 * 
 */
export class OcrPipelineControllerApi extends runtime.BaseAPI {

    /**
     * predictCitationFields
     */
    async predictCitationFieldsUsingPOSTRaw(requestParameters: PredictCitationFieldsUsingPOSTRequest): Promise<runtime.ApiResponse<PredictCitationResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling predictCitationFieldsUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/ocr_pipeline/predict_citation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PredictCitationRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PredictCitationResponseFromJSON(jsonValue));
    }

    /**
     * predictCitationFields
     */
    async predictCitationFieldsUsingPOST(requestParameters: PredictCitationFieldsUsingPOSTRequest): Promise<PredictCitationResponse> {
        const response = await this.predictCitationFieldsUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * predictRichCitationFields
     */
    async predictRichCitationFieldsUsingPOSTRaw(requestParameters: PredictRichCitationFieldsUsingPOSTRequest): Promise<runtime.ApiResponse<PredictRichCitationResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling predictRichCitationFieldsUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/ocr_pipeline/predict_rich_citation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PredictCitationRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PredictRichCitationResponseFromJSON(jsonValue));
    }

    /**
     * predictRichCitationFields
     */
    async predictRichCitationFieldsUsingPOST(requestParameters: PredictRichCitationFieldsUsingPOSTRequest): Promise<PredictRichCitationResponse> {
        const response = await this.predictRichCitationFieldsUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}
