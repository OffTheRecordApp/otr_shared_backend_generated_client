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
import { SlimCitationInferenceResponse } from './';
/**
 *
 * @export
 * @interface PredictCitationResponse
 */
export interface PredictCitationResponse {
    /**
     *
     * @type {SlimCitationInferenceResponse}
     * @memberof PredictCitationResponse
     */
    ocrResult?: SlimCitationInferenceResponse;
}
export declare function PredictCitationResponseFromJSON(json: any): PredictCitationResponse;
export declare function PredictCitationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictCitationResponse;
export declare function PredictCitationResponseToJSON(value?: PredictCitationResponse | null): any;