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
import { CaseModel, CitationModel } from './';
/**
 *
 * @export
 * @interface GetUserCasesResponse
 */
export interface GetUserCasesResponse {
    /**
     *
     * @type {Array<CaseModel>}
     * @memberof GetUserCasesResponse
     */
    cases?: Array<CaseModel>;
    /**
     *
     * @type {Array<CitationModel>}
     * @memberof GetUserCasesResponse
     */
    citations?: Array<CitationModel>;
    /**
     *
     * @type {number}
     * @memberof GetUserCasesResponse
     */
    numBookings?: number;
    /**
     *
     * @type {number}
     * @memberof GetUserCasesResponse
     */
    numCitationUploads?: number;
}
export declare function GetUserCasesResponseFromJSON(json: any): GetUserCasesResponse;
export declare function GetUserCasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserCasesResponse;
export declare function GetUserCasesResponseToJSON(value?: GetUserCasesResponse | null): any;