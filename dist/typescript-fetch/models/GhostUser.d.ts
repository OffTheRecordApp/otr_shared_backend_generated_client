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
import { PhoneNumberDomain } from './';
/**
 *
 * @export
 * @interface GhostUser
 */
export interface GhostUser {
    /**
     *
     * @type {string}
     * @memberof GhostUser
     */
    clientType?: GhostUserClientTypeEnum;
    /**
     *
     * @type {Date}
     * @memberof GhostUser
     */
    dob?: Date;
    /**
     *
     * @type {string}
     * @memberof GhostUser
     */
    driverLicenseNumber?: string;
    /**
     *
     * @type {string}
     * @memberof GhostUser
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof GhostUser
     */
    firstname?: string;
    /**
     *
     * @type {string}
     * @memberof GhostUser
     */
    gender?: GhostUserGenderEnum;
    /**
     *
     * @type {string}
     * @memberof GhostUser
     */
    lastname?: string;
    /**
     *
     * @type {string}
     * @memberof GhostUser
     */
    password?: string;
    /**
     *
     * @type {Array<PhoneNumberDomain>}
     * @memberof GhostUser
     */
    phoneNumbers?: Array<PhoneNumberDomain>;
    /**
     *
     * @type {string}
     * @memberof GhostUser
     */
    race?: GhostUserRaceEnum;
}
export declare function GhostUserFromJSON(json: any): GhostUser;
export declare function GhostUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): GhostUser;
export declare function GhostUserToJSON(value?: GhostUser | null): any;
/**
* @export
* @enum {string}
*/
export declare enum GhostUserClientTypeEnum {
    ANDROID = "ANDROID",
    DESKTOPWEBAPP = "DESKTOP_WEBAPP",
    DMVGO = "DMV_GO",
    DMVORG = "DMV_ORG",
    EMAIL = "EMAIL",
    FRESHDESK = "FRESH_DESK",
    IOS = "IOS",
    MOBILEWEBAPP = "MOBILE_WEBAPP",
    OTRADMINCONSOLE = "OTR_ADMIN_CONSOLE",
    OTRADMINCONSOLEDEVO = "OTR_ADMIN_CONSOLE_DEVO",
    OTRADMINCONSOLELOCALHOST = "OTR_ADMIN_CONSOLE_LOCALHOST",
    OTREXPLORER = "OTR_EXPLORER",
    OTRLAWFIRMPORTAL = "OTR_LAWFIRM_PORTAL",
    OTRLAWFIRMPORTALDEVO = "OTR_LAWFIRM_PORTAL_DEVO",
    OTRLAWFIRMPORTALLOCALHOST = "OTR_LAWFIRM_PORTAL_LOCALHOST",
    OTRWEBSITE = "OTR_WEBSITE",
    OTRWEBSITEDEVO = "OTR_WEBSITE_DEVO",
    OTRWEBSITELOCALHOST = "OTR_WEBSITE_LOCALHOST",
    OTRWIDGET = "OTR_WIDGET",
    UNKNOWN = "UNKNOWN"
}
/**
* @export
* @enum {string}
*/
export declare enum GhostUserGenderEnum {
    FEMALE = "FEMALE",
    MALE = "MALE",
    NOTAVAILABLE = "NOT_AVAILABLE",
    NOTLISTED = "NOT_LISTED",
    UNVERIFIED = "UNVERIFIED"
}
/**
* @export
* @enum {string}
*/
export declare enum GhostUserRaceEnum {
    ASIAN = "ASIAN",
    BLACK = "BLACK",
    HISPANIC = "HISPANIC",
    MIDDLEEASTERN = "MIDDLE_EASTERN",
    NATIVE = "NATIVE",
    NOTAVAILABLE = "NOT_AVAILABLE",
    PACIFICISLANDER = "PACIFIC_ISLANDER",
    TWOORMORE = "TWO_OR_MORE",
    UNKNOWN = "UNKNOWN",
    UNVERIFIED = "UNVERIFIED",
    WHITE = "WHITE"
}