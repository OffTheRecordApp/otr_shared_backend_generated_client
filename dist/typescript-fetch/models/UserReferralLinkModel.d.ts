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
 * @interface UserReferralLinkModel
 */
export interface UserReferralLinkModel {
    /**
     *
     * @type {string}
     * @memberof UserReferralLinkModel
     */
    referralLink?: string;
    /**
     *
     * @type {string}
     * @memberof UserReferralLinkModel
     */
    referralLinkType?: UserReferralLinkModelReferralLinkTypeEnum;
}
export declare function UserReferralLinkModelFromJSON(json: any): UserReferralLinkModel;
export declare function UserReferralLinkModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserReferralLinkModel;
export declare function UserReferralLinkModelToJSON(value?: UserReferralLinkModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UserReferralLinkModelReferralLinkTypeEnum {
    FASTLANETEEN = "FASTLANE_TEEN",
    PRIMARY = "PRIMARY"
}
