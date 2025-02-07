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
import { LastLoginAttributes } from './';
/**
 *
 * @export
 * @interface UserAccountModel
 */
export interface UserAccountModel {
    /**
     *
     * @type {Date}
     * @memberof UserAccountModel
     */
    accountCreationDateUtc?: Date;
    /**
     *
     * @type {number}
     * @memberof UserAccountModel
     */
    formerUserId?: number;
    /**
     *
     * @type {LastLoginAttributes}
     * @memberof UserAccountModel
     */
    lastLoginAttributes?: LastLoginAttributes;
    /**
     *
     * @type {string}
     * @memberof UserAccountModel
     */
    loginProvider?: UserAccountModelLoginProviderEnum;
    /**
     *
     * @type {boolean}
     * @memberof UserAccountModel
     */
    merged?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserAccountModel
     */
    primary?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserAccountModel
     */
    profilePictureUrl?: string;
    /**
     *
     * @type {string}
     * @memberof UserAccountModel
     */
    signedProfilePictureUrl?: string;
    /**
     *
     * @type {string}
     * @memberof UserAccountModel
     */
    userHandle?: string;
    /**
     *
     * @type {Date}
     * @memberof UserAccountModel
     */
    verificationDateUtc?: Date;
}
export declare function UserAccountModelFromJSON(json: any): UserAccountModel;
export declare function UserAccountModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAccountModel;
export declare function UserAccountModelToJSON(value?: UserAccountModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UserAccountModelLoginProviderEnum {
    APPLE = "APPLE",
    EMAIL = "EMAIL",
    FACEBOOK = "FACEBOOK",
    GOOGLE = "GOOGLE",
    PHONE = "PHONE",
    TWITTER = "TWITTER",
    UNKNOWN = "UNKNOWN"
}
