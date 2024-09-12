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
import { CourtResponseModel } from './';
/**
 *
 * @export
 * @interface GetCourtResponse
 */
export interface GetCourtResponse {
    /**
     *
     * @type {CourtResponseModel}
     * @memberof GetCourtResponse
     */
    court?: CourtResponseModel;
}
export declare function GetCourtResponseFromJSON(json: any): GetCourtResponse;
export declare function GetCourtResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCourtResponse;
export declare function GetCourtResponseToJSON(value?: GetCourtResponse | null): any;