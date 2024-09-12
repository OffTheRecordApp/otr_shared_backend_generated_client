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
import { CitationInputRequest } from './';
/**
 *
 * @export
 * @interface UpdateCitationRequest
 */
export interface UpdateCitationRequest {
    /**
     *
     * @type {CitationInputRequest}
     * @memberof UpdateCitationRequest
     */
    citation?: CitationInputRequest;
}
export declare function UpdateCitationRequestFromJSON(json: any): UpdateCitationRequest;
export declare function UpdateCitationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCitationRequest;
export declare function UpdateCitationRequestToJSON(value?: UpdateCitationRequest | null): any;