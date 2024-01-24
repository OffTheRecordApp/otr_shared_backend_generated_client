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

import * as models from './models';

export interface RegisterNewUserRequest {
    "citationId"?: number;
    "clientType"?: RegisterNewUserRequest.ClientTypeEnum;
    "fingerPrintId"?: string;
    "httpReferrer"?: string;
    "isAutoLogin"?: boolean;
    "otherNote"?: string;
    "referralCode"?: string;
    "referralSourceData"?: { [key: string]: object; };
    "roleType"?: RegisterNewUserRequest.RoleTypeEnum;
    "shouldVerifyPhoneNumber"?: boolean;
    "user"?: models.NewUser;
    "userReferralSourceTypeId"?: number;
}

export namespace RegisterNewUserRequest {
    export enum ClientTypeEnum {
        ANDROID = <any> 'ANDROID',
        DESKTOPWEBAPP = <any> 'DESKTOP_WEBAPP',
        DMVGO = <any> 'DMV_GO',
        DMVORG = <any> 'DMV_ORG',
        EMAIL = <any> 'EMAIL',
        FRESHDESK = <any> 'FRESH_DESK',
        IOS = <any> 'IOS',
        MOBILEWEBAPP = <any> 'MOBILE_WEBAPP',
        OTRADMINCONSOLE = <any> 'OTR_ADMIN_CONSOLE',
        OTRADMINCONSOLEDEVO = <any> 'OTR_ADMIN_CONSOLE_DEVO',
        OTRADMINCONSOLELOCALHOST = <any> 'OTR_ADMIN_CONSOLE_LOCALHOST',
        OTREXPLORER = <any> 'OTR_EXPLORER',
        OTRLAWFIRMPORTAL = <any> 'OTR_LAWFIRM_PORTAL',
        OTRLAWFIRMPORTALDEVO = <any> 'OTR_LAWFIRM_PORTAL_DEVO',
        OTRLAWFIRMPORTALLOCALHOST = <any> 'OTR_LAWFIRM_PORTAL_LOCALHOST',
        OTRWEBSITE = <any> 'OTR_WEBSITE',
        OTRWEBSITEDEVO = <any> 'OTR_WEBSITE_DEVO',
        OTRWEBSITELOCALHOST = <any> 'OTR_WEBSITE_LOCALHOST',
        OTRWIDGET = <any> 'OTR_WIDGET',
        UNKNOWN = <any> 'UNKNOWN'
    }
    export enum RoleTypeEnum {
        ADMIN = <any> 'ADMIN',
        DEFENDANT = <any> 'DEFENDANT',
        LAWFIRMADMIN = <any> 'LAWFIRM_ADMIN',
        LAWYER = <any> 'LAWYER',
        PARTNER = <any> 'PARTNER',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
