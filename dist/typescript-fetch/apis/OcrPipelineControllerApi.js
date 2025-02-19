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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { PredictCitationRequestToJSON, PredictCitationResponseFromJSON, PredictRichCitationResponseFromJSON, } from '../models';
/**
 *
 */
export class OcrPipelineControllerApi extends runtime.BaseAPI {
    /**
     * predictCitationFields
     */
    predictCitationFieldsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling predictCitationFieldsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/ocr_pipeline/predict_citation`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PredictCitationRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => PredictCitationResponseFromJSON(jsonValue));
        });
    }
    /**
     * predictCitationFields
     */
    predictCitationFieldsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.predictCitationFieldsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * predictRichCitationFields
     */
    predictRichCitationFieldsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling predictRichCitationFieldsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/ocr_pipeline/predict_rich_citation`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PredictCitationRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => PredictRichCitationResponseFromJSON(jsonValue));
        });
    }
    /**
     * predictRichCitationFields
     */
    predictRichCitationFieldsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.predictRichCitationFieldsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
}
