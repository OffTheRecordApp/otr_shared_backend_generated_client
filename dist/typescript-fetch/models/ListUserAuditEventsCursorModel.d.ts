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
 * @interface ListUserAuditEventsCursorModel
 */
export interface ListUserAuditEventsCursorModel {
    /**
     *
     * @type {string}
     * @memberof ListUserAuditEventsCursorModel
     */
    nextPageToken?: string;
}
export declare function ListUserAuditEventsCursorModelFromJSON(json: any): ListUserAuditEventsCursorModel;
export declare function ListUserAuditEventsCursorModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUserAuditEventsCursorModel;
export declare function ListUserAuditEventsCursorModelToJSON(value?: ListUserAuditEventsCursorModel | null): any;
