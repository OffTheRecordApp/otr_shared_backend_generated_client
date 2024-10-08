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
 * @interface DashboardAuthorModel
 */
export interface DashboardAuthorModel {
    /**
     *
     * @type {string}
     * @memberof DashboardAuthorModel
     */
    authorFirstName?: string;
    /**
     *
     * @type {string}
     * @memberof DashboardAuthorModel
     */
    authorLastName?: string;
    /**
     *
     * @type {string}
     * @memberof DashboardAuthorModel
     */
    profilePictureUrl?: string;
}
export declare function DashboardAuthorModelFromJSON(json: any): DashboardAuthorModel;
export declare function DashboardAuthorModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardAuthorModel;
export declare function DashboardAuthorModelToJSON(value?: DashboardAuthorModel | null): any;
