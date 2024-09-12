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
 * @interface SetReferralSourceRequest
 */
export interface SetReferralSourceRequest {
    /**
     *
     * @type {string}
     * @memberof SetReferralSourceRequest
     */
    clientType?: SetReferralSourceRequestClientTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof SetReferralSourceRequest
     */
    isFromAdvertisement?: boolean;
    /**
     *
     * @type {string}
     * @memberof SetReferralSourceRequest
     */
    otherNote?: string;
    /**
     *
     * @type {string}
     * @memberof SetReferralSourceRequest
     */
    referralCode?: string;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof SetReferralSourceRequest
     */
    referralSourceData?: {
        [key: string]: object;
    };
    /**
     *
     * @type {string}
     * @memberof SetReferralSourceRequest
     */
    referrerEmail?: string;
    /**
     *
     * @type {string}
     * @memberof SetReferralSourceRequest
     */
    referrerName?: string;
    /**
     *
     * @type {number}
     * @memberof SetReferralSourceRequest
     */
    userId?: number;
    /**
     *
     * @type {number}
     * @memberof SetReferralSourceRequest
     */
    userReferralSourceTypeId?: number;
}
export declare function SetReferralSourceRequestFromJSON(json: any): SetReferralSourceRequest;
export declare function SetReferralSourceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetReferralSourceRequest;
export declare function SetReferralSourceRequestToJSON(value?: SetReferralSourceRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum SetReferralSourceRequestClientTypeEnum {
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