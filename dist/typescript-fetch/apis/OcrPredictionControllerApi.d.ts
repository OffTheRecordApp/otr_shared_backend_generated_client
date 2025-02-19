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
import { OCRCitationPredictionResponse, OCRPredictionCaseResponse, PredictCitationTextRequest, PredictImageClassificationRequest, PredictImageClassificationResponse } from '../models';
export interface GetCitationPredictionUsingGETRequest {
    citationId: number;
}
export interface PredictCitationTextUsingPOSTRequest {
    request: PredictCitationTextRequest;
}
export interface PredictImageClassificationUsingPOSTRequest {
    request: PredictImageClassificationRequest;
}
/**
 *
 */
export declare class OcrPredictionControllerApi extends runtime.BaseAPI {
    /**
     * getCitationPrediction
     */
    getCitationPredictionUsingGETRaw(requestParameters: GetCitationPredictionUsingGETRequest): Promise<runtime.ApiResponse<OCRCitationPredictionResponse>>;
    /**
     * getCitationPrediction
     */
    getCitationPredictionUsingGET(requestParameters: GetCitationPredictionUsingGETRequest): Promise<OCRCitationPredictionResponse>;
    /**
     * predictCitationText
     */
    predictCitationTextUsingPOSTRaw(requestParameters: PredictCitationTextUsingPOSTRequest): Promise<runtime.ApiResponse<OCRPredictionCaseResponse>>;
    /**
     * predictCitationText
     */
    predictCitationTextUsingPOST(requestParameters: PredictCitationTextUsingPOSTRequest): Promise<OCRPredictionCaseResponse>;
    /**
     * predictImageClassification
     */
    predictImageClassificationUsingPOSTRaw(requestParameters: PredictImageClassificationUsingPOSTRequest): Promise<runtime.ApiResponse<PredictImageClassificationResponse>>;
    /**
     * predictImageClassification
     */
    predictImageClassificationUsingPOST(requestParameters: PredictImageClassificationUsingPOSTRequest): Promise<PredictImageClassificationResponse>;
}
