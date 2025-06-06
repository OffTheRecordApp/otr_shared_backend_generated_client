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
 * @interface UserReferralLinkModelReq
 */
export interface UserReferralLinkModelReq {
    /**
     *
     * @type {string}
     * @memberof UserReferralLinkModelReq
     */
    referralLink?: string;
    /**
     *
     * @type {string}
     * @memberof UserReferralLinkModelReq
     */
    referralLinkType?: UserReferralLinkModelReqReferralLinkTypeEnum;
}
export declare function UserReferralLinkModelReqFromJSON(json: any): UserReferralLinkModelReq;
export declare function UserReferralLinkModelReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserReferralLinkModelReq;
export declare function UserReferralLinkModelReqToJSON(value?: UserReferralLinkModelReq | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UserReferralLinkModelReqReferralLinkTypeEnum {
    FASTLANETEEN = "FASTLANE_TEEN",
    PRIMARY = "PRIMARY"
}
