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
    "authorName"?: string;
    "clientType"?: UserAuditEventModel.ClientTypeEnum;
    "event"?: UserAuditEventModel.EventEnum;
    "eventDate"?: string;
    "eventId"?: number;
    "eventType"?: UserAuditEventModel.EventTypeEnum;
    "newValue"?: string;
    "oldValue"?: string;
    "requesterName"?: string;
    "requesterUserId"?: number;
    "subject"?: string;
    "userEventId"?: number;
    "userId"?: number;
}
export declare namespace UserAuditEventModel {
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
    enum EventEnum {
        ACCOUNTCOVERAGEADDED,
        ACCOUNTCOVERAGEREMOVED,
        ACCOUNTNOTIFICATIONSTATUSCHANGED,
        ACCOUNTSTATUSCHANGED,
        CASEACCEPT,
        CASEBOOKING,
        CASECANCEL,
        CASECOUNTERACCEPTED,
        CASECOUNTERDECLINED,
        CASECOUNTERINITIATED,
        CASEDECLINE,
        CASEMATCH,
        CASEPAYMENTDELETED,
        CASEPAYMENTRESCHEDULED,
        CASERESOLVE,
        CASESTATUS,
        CASETRANSFER,
        CASEUNSERVICEABLEREQUEST,
        CITATIONUPDATED,
        CITATIONUPLOAD,
        COURTCOVERAGEADDED,
        COURTCOVERAGEREMOVED,
        COURTFEECHANGED,
        CUSTOMFEESRESETTODEFAULTFORVIOLATION,
        DECIDEEXPERIMENTGROUPCOMMAND,
        DEFAULTFEEADDED,
        DEFAULTFEECHANGED,
        DEFAULTFEEREMOVED,
        EMAILSENT,
        EXTERNALTICKETREQUEST,
        GHOSTACCOUNTCREATED,
        LAWFIRMACCOUNTPRIORITY,
        LAWFIRMACCOUNTSTATUS,
        LAWFIRMDAILYCAPACITY,
        LAWFIRMFEEREFUNDED,
        LAWFIRMPERSONNELADDED,
        LAWFIRMTOTALCAPACITY,
        LAWFIRMTRANSFERREVERSED,
        LINEITEMADDED,
        LINEITEMDELETED,
        LINEITEMUPDATED,
        MBGELIGIBILITYCHANGED,
        NAMECHANGED,
        OCRTEXTEXTRACTED,
        PASSWORDCHANGE,
        PASSWORDRESETREQUESTED,
        PAYMENTAUTHORIZED,
        PAYMENTCAPTURED,
        PAYMENTMETHODADD,
        PAYMENTMETHODDELETE,
        PAYMENTPLANOPTIONCHANGED,
        PAYMENTREFUNDED,
        PAYMENTSCHEDULED,
        PHONENUMBERADDED,
        PHONENUMBERDELETED,
        REFERRALCODEAPPLIED,
        REFERRALCODEATTEMPTFAILED,
        REFERRALCODEREMOVED,
        SAVEVACATIONMODEENDDATE,
        SAVEVACATIONMODEREASON,
        UNKNOWN,
        USERLOGINEVENT,
        USERMERGE,
        USERREGISTRATION,
        USERREGISTRATIONATTRIBUTED,
        USERSETTINGUPDATED,
        VACATIONMODETOGGLE,
        VACATIONMODEUPDATE,
        VERIFYEMAIL,
        VERIFYPHONE,
        VIOLATIONENABLEDFORALLCOVEREDCOURTS
    }
    enum EventTypeEnum {
        ACCOUNTCOVERAGEADDED,
        ACCOUNTCOVERAGEREMOVED,
        ACCOUNTNOTIFICATIONSTATUSCHANGED,
        ACCOUNTSTATUSCHANGED,
        CASEACCEPT,
        CASEBOOKING,
        CASECANCEL,
        CASECOUNTERACCEPTED,
        CASECOUNTERDECLINED,
        CASECOUNTERINITIATED,
        CASEDECLINE,
        CASEMATCH,
        CASEPAYMENTDELETED,
        CASEPAYMENTRESCHEDULED,
        CASERESOLVE,
        CASESTATUS,
        CASETRANSFER,
        CASEUNSERVICEABLEREQUEST,
        CITATIONUPDATED,
        CITATIONUPLOAD,
        COURTCOVERAGEADDED,
        COURTCOVERAGEREMOVED,
        COURTFEECHANGED,
        CUSTOMFEESRESETTODEFAULTFORVIOLATION,
        DECIDEEXPERIMENTGROUPCOMMAND,
        DEFAULTFEEADDED,
        DEFAULTFEECHANGED,
        DEFAULTFEEREMOVED,
        EMAILSENT,
        EXTERNALTICKETREQUEST,
        GHOSTACCOUNTCREATED,
        LAWFIRMACCOUNTPRIORITY,
        LAWFIRMACCOUNTSTATUS,
        LAWFIRMDAILYCAPACITY,
        LAWFIRMFEEREFUNDED,
        LAWFIRMPERSONNELADDED,
        LAWFIRMTOTALCAPACITY,
        LAWFIRMTRANSFERREVERSED,
        LINEITEMADDED,
        LINEITEMDELETED,
        LINEITEMUPDATED,
        MBGELIGIBILITYCHANGED,
        NAMECHANGED,
        OCRTEXTEXTRACTED,
        PASSWORDCHANGE,
        PASSWORDRESETREQUESTED,
        PAYMENTAUTHORIZED,
        PAYMENTCAPTURED,
        PAYMENTMETHODADD,
        PAYMENTMETHODDELETE,
        PAYMENTPLANOPTIONCHANGED,
        PAYMENTREFUNDED,
        PAYMENTSCHEDULED,
        PHONENUMBERADDED,
        PHONENUMBERDELETED,
        REFERRALCODEAPPLIED,
        REFERRALCODEATTEMPTFAILED,
        REFERRALCODEREMOVED,
        SAVEVACATIONMODEENDDATE,
        SAVEVACATIONMODEREASON,
        UNKNOWN,
        USERLOGINEVENT,
        USERMERGE,
        USERREGISTRATION,
        USERREGISTRATIONATTRIBUTED,
        USERSETTINGUPDATED,
        VACATIONMODETOGGLE,
        VACATIONMODEUPDATE,
        VERIFYEMAIL,
        VERIFYPHONE,
        VIOLATIONENABLEDFORALLCOVEREDCOURTS
    }
}
