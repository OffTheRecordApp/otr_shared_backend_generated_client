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
 * @interface UserSocialProfileModelReq
 */
export interface UserSocialProfileModelReq {
    /**
     *
     * @type {string}
     * @memberof UserSocialProfileModelReq
     */
    platform?: UserSocialProfileModelReqPlatformEnum;
    /**
     *
     * @type {string}
     * @memberof UserSocialProfileModelReq
     */
    userHandle?: string;
}
export declare function UserSocialProfileModelReqFromJSON(json: any): UserSocialProfileModelReq;
export declare function UserSocialProfileModelReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSocialProfileModelReq;
export declare function UserSocialProfileModelReqToJSON(value?: UserSocialProfileModelReq | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UserSocialProfileModelReqPlatformEnum {
    INSTAGRAM = "INSTAGRAM",
    SNAPCHAT = "SNAPCHAT",
    TIKTOK = "TIKTOK",
    TWITCH = "TWITCH",
    X = "X",
    YOUTUBE = "YOUTUBE"
}
