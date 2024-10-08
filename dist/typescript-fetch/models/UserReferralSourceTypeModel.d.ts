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
 * @interface UserReferralSourceTypeModel
 */
export interface UserReferralSourceTypeModel {
    /**
     *
     * @type {Array<UserReferralSourceTypeModel>}
     * @memberof UserReferralSourceTypeModel
     */
    children?: Array<UserReferralSourceTypeModel>;
    /**
     *
     * @type {string}
     * @memberof UserReferralSourceTypeModel
     */
    imageUrl?: string;
    /**
     *
     * @type {boolean}
     * @memberof UserReferralSourceTypeModel
     */
    isDisplayed?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserReferralSourceTypeModel
     */
    sourceDesc?: string;
    /**
     *
     * @type {string}
     * @memberof UserReferralSourceTypeModel
     */
    sourceName?: string;
    /**
     *
     * @type {number}
     * @memberof UserReferralSourceTypeModel
     */
    sourceTypeId?: number;
    /**
     *
     * @type {string}
     * @memberof UserReferralSourceTypeModel
     */
    uiDisplayText?: string;
}
export declare function UserReferralSourceTypeModelFromJSON(json: any): UserReferralSourceTypeModel;
export declare function UserReferralSourceTypeModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserReferralSourceTypeModel;
export declare function UserReferralSourceTypeModelToJSON(value?: UserReferralSourceTypeModel | null): any;
