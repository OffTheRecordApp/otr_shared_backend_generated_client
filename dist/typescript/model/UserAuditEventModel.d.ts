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
export interface UserAuditEventModel {
    "clientType"?: UserAuditEventModel.ClientTypeEnum;
    "eventDate"?: string;
    "eventId"?: number;
    "eventType"?: UserAuditEventModel.EventTypeEnum;
    "newValue"?: string;
    "oldValue"?: string;
    "requesterName"?: string;
    "requesterUserId"?: number;
    "userEventId"?: number;
}
export declare namespace UserAuditEventModel {
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
    enum EventTypeEnum {
        CASEACCEPT,
        CASEBOOKING,
        CASEDECLINE,
        CASEMATCH,
        CASERESOLVE,
        CITATIONUPLOAD,
        EXTERNALTICKETREQUEST,
        LAWFIRMACCOUNTPRIORITY,
        LAWFIRMACCOUNTSTATUS,
        LAWFIRMDAILYCAPACITY,
        LAWFIRMTOTALCAPACITY,
        PASSWORDCHANGE,
        PASSWORDRESETREQUESTED,
        PAYMENTMETHODADD,
        PAYMENTMETHODDELETE,
        SAVEVACATIONMODEENDDATE,
        SAVEVACATIONMODEREASON,
        UNKNOWN,
        USERLOGINEVENT,
        VACATIONMODETOGGLE,
        VACATIONMODEUPDATE,
        VERIFYEMAIL
    }
}
