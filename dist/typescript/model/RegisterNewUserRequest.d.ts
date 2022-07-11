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
    "clientType"?: RegisterNewUserRequest.ClientTypeEnum;
    "fingerPrintId"?: string;
    "httpReferrer"?: string;
    "isAutoLogin"?: boolean;
    "otherNote"?: string;
    "referralCode"?: string;
    "referralSourceData"?: {
        [key: string]: object;
    };
    "roleType"?: RegisterNewUserRequest.RoleTypeEnum;
    "user"?: models.NewUser;
    "userReferralSourceTypeId"?: number;
}
export declare namespace RegisterNewUserRequest {
    enum ClientTypeEnum {
        ANDROID,
        DESKTOPWEBAPP,
        DMVGO,
        DMVORG,
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
    enum RoleTypeEnum {
        ADMIN,
        DEFENDANT,
        LAWYER,
        PARTNER,
        UNKNOWN
    }
}