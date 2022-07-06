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
export interface LawfirmAuditEventModel {
    "authorName"?: string;
    "clientType"?: LawfirmAuditEventModel.ClientTypeEnum;
    "event"?: LawfirmAuditEventModel.EventEnum;
    "eventDate"?: string;
    "eventId"?: number;
    "lawfirmEventId"?: number;
    "newValue"?: string;
    "oldValue"?: string;
    "userId"?: number;
}
export declare namespace LawfirmAuditEventModel {
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
    enum EventEnum {
        CASEBOOKING,
        CASEMATCH,
        CITATIONUPLOAD,
        LAWFIRMACCOUNTPRIORITY,
        LAWFIRMACCOUNTSTATUS,
        LAWFIRMDAILYCAPACITY,
        LAWFIRMTOTALCAPACITY,
        SAVEVACATIONMODEENDDATE,
        SAVEVACATIONMODEREASON,
        VACATIONMODETOGGLE
    }
}
