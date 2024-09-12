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
/**
 *
 * @export
 * @interface GetLawfirmJobTitleResponse
 */
export interface GetLawfirmJobTitleResponse {
    /**
     *
     * @type {Array<string>}
     * @memberof GetLawfirmJobTitleResponse
     */
    jobTitles?: Array<GetLawfirmJobTitleResponseJobTitlesEnum>;
}
export declare function GetLawfirmJobTitleResponseFromJSON(json: any): GetLawfirmJobTitleResponse;
export declare function GetLawfirmJobTitleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmJobTitleResponse;
export declare function GetLawfirmJobTitleResponseToJSON(value?: GetLawfirmJobTitleResponse | null): any;
/**
* @export
* @enum {string}
*/
export declare enum GetLawfirmJobTitleResponseJobTitlesEnum {
    ACCOUNTANT = "ACCOUNTANT",
    ATTORNEY = "ATTORNEY",
    ATTORNEYASSOCIATE = "ATTORNEY_ASSOCIATE",
    ATTORNEYCOUNSEL = "ATTORNEY_COUNSEL",
    ATTORNEYMANAGINGPARTNER = "ATTORNEY_MANAGING_PARTNER",
    ATTORNEYPARTNER = "ATTORNEY_PARTNER",
    ATTORNEYSTAFF = "ATTORNEY_STAFF",
    CUSTOMERSERVICEREP = "CUSTOMER_SERVICE_REP",
    LEGALASSISTANT = "LEGAL_ASSISTANT",
    LEGALINTERN = "LEGAL_INTERN",
    LEGALSECRETARY = "LEGAL_SECRETARY",
    OTHER = "OTHER",
    PARALEGAL = "PARALEGAL"
}