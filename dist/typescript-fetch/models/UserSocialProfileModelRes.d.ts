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
 * @interface UserSocialProfileModelRes
 */
export interface UserSocialProfileModelRes {
    /**
     *
     * @type {string}
     * @memberof UserSocialProfileModelRes
     */
    platform?: UserSocialProfileModelResPlatformEnum;
    /**
     *
     * @type {string}
     * @memberof UserSocialProfileModelRes
     */
    userHandle?: string;
}
export declare function UserSocialProfileModelResFromJSON(json: any): UserSocialProfileModelRes;
export declare function UserSocialProfileModelResFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSocialProfileModelRes;
export declare function UserSocialProfileModelResToJSON(value?: UserSocialProfileModelRes | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UserSocialProfileModelResPlatformEnum {
    INSTAGRAM = "INSTAGRAM",
    SNAPCHAT = "SNAPCHAT",
    TIKTOK = "TIKTOK",
    TWITCH = "TWITCH",
    X = "X",
    YOUTUBE = "YOUTUBE"
}
