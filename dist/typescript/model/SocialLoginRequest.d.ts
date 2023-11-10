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
export interface SocialLoginRequest {
    "citationId"?: number;
    "clientType"?: SocialLoginRequest.ClientTypeEnum;
    "fingerPrintId"?: string;
    "firstName"?: string;
    "httpReferrer"?: string;
    "lastName"?: string;
    "otherNote"?: string;
    "referralCode"?: string;
    "referralSourceData"?: {
        [key: string]: object;
    };
    "userAccessToken"?: string;
    "userReferralSourceTypeId"?: number;
}
export declare namespace SocialLoginRequest {
    enum ClientTypeEnum {
        ANDROID,
        DESKTOPWEBAPP,
        DMVGO,
        DMVORG,
        EMAIL,
        FRESHDESK,
        IOS,
        MOBILEWEBAPP,
        OTRADMINCONSOLE,
        OTRADMINCONSOLEDEVO,
        OTRADMINCONSOLELOCALHOST,
        OTREXPLORER,
        OTRLAWFIRMPORTAL,
        OTRLAWFIRMPORTALDEVO,
        OTRLAWFIRMPORTALLOCALHOST,
        OTRWEBSITE,
        OTRWEBSITEDEVO,
        OTRWEBSITELOCALHOST,
        OTRWIDGET,
        UNKNOWN
    }
}
