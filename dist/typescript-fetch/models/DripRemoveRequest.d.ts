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
 * @interface DripRemoveRequest
 */
export interface DripRemoveRequest {
    /**
     *
     * @type {string}
     * @memberof DripRemoveRequest
     */
    dripAccountId?: string;
    /**
     *
     * @type {string}
     * @memberof DripRemoveRequest
     */
    dripAction?: DripRemoveRequestDripActionEnum;
    /**
     *
     * @type {string}
     * @memberof DripRemoveRequest
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof DripRemoveRequest
     */
    ticketIssueId?: string;
}
export declare function DripRemoveRequestFromJSON(json: any): DripRemoveRequest;
export declare function DripRemoveRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DripRemoveRequest;
export declare function DripRemoveRequestToJSON(value?: DripRemoveRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum DripRemoveRequestDripActionEnum {
    DELETE = "DELETE",
    UNSUBSCRIBE = "UNSUBSCRIBE"
}
