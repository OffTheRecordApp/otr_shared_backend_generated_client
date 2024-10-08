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
 * @interface DeleteNotificationByPagesRequest
 */
export interface DeleteNotificationByPagesRequest {
    /**
     *
     * @type {Array<string>}
     * @memberof DeleteNotificationByPagesRequest
     */
    pageTypes?: Array<DeleteNotificationByPagesRequestPageTypesEnum>;
}
export declare function DeleteNotificationByPagesRequestFromJSON(json: any): DeleteNotificationByPagesRequest;
export declare function DeleteNotificationByPagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteNotificationByPagesRequest;
export declare function DeleteNotificationByPagesRequestToJSON(value?: DeleteNotificationByPagesRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum DeleteNotificationByPagesRequestPageTypesEnum {
    CASEACTION = "CASE_ACTION",
    CASEMESSAGES = "CASE_MESSAGES",
    CASESTATUS = "CASE_STATUS",
    COURTDATESCHEDULED = "COURT_DATE_SCHEDULED",
    NEWTICKET = "NEW_TICKET",
    PROFILE = "PROFILE"
}
