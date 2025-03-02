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
export var CaseActionRequestModel;
(function (CaseActionRequestModel) {
    let ActionTypeEnum;
    (function (ActionTypeEnum) {
        ActionTypeEnum[ActionTypeEnum["CASEACCEPT"] = 'CASE_ACCEPT'] = "CASEACCEPT";
        ActionTypeEnum[ActionTypeEnum["CASECOUNTERACCEPTED"] = 'CASE_COUNTER_ACCEPTED'] = "CASECOUNTERACCEPTED";
        ActionTypeEnum[ActionTypeEnum["CASECOUNTERDECLINED"] = 'CASE_COUNTER_DECLINED'] = "CASECOUNTERDECLINED";
        ActionTypeEnum[ActionTypeEnum["CASECOUNTERINITIATED"] = 'CASE_COUNTER_INITIATED'] = "CASECOUNTERINITIATED";
        ActionTypeEnum[ActionTypeEnum["CASECOUNTERWITHDRAWN"] = 'CASE_COUNTER_WITHDRAWN'] = "CASECOUNTERWITHDRAWN";
        ActionTypeEnum[ActionTypeEnum["CASEDECLINE"] = 'CASE_DECLINE'] = "CASEDECLINE";
        ActionTypeEnum[ActionTypeEnum["CITATIONDATAEXTRACTED"] = 'CITATION_DATA_EXTRACTED'] = "CITATIONDATAEXTRACTED";
        ActionTypeEnum[ActionTypeEnum["COURTDATEREMOVED"] = 'COURT_DATE_REMOVED'] = "COURTDATEREMOVED";
        ActionTypeEnum[ActionTypeEnum["COURTDATESCHEDULED"] = 'COURT_DATE_SCHEDULED'] = "COURTDATESCHEDULED";
        ActionTypeEnum[ActionTypeEnum["DISCOVERYRECEIVED"] = 'DISCOVERY_RECEIVED'] = "DISCOVERYRECEIVED";
        ActionTypeEnum[ActionTypeEnum["DISCOVERYREQUESTED"] = 'DISCOVERY_REQUESTED'] = "DISCOVERYREQUESTED";
        ActionTypeEnum[ActionTypeEnum["DISPUTEFILED"] = 'DISPUTE_FILED'] = "DISPUTEFILED";
        ActionTypeEnum[ActionTypeEnum["DRIVERLICENSEREQUESTED"] = 'DRIVER_LICENSE_REQUESTED'] = "DRIVERLICENSEREQUESTED";
        ActionTypeEnum[ActionTypeEnum["FAILEDPAYMENTATTEMPT"] = 'FAILED_PAYMENT_ATTEMPT'] = "FAILEDPAYMENTATTEMPT";
        ActionTypeEnum[ActionTypeEnum["NOTICEOFAPPEARANCEFILED"] = 'NOTICE_OF_APPEARANCE_FILED'] = "NOTICEOFAPPEARANCEFILED";
        ActionTypeEnum[ActionTypeEnum["OTHER"] = 'OTHER'] = "OTHER";
        ActionTypeEnum[ActionTypeEnum["OVERDUEBALANCEPAID"] = 'OVERDUE_BALANCE_PAID'] = "OVERDUEBALANCEPAID";
        ActionTypeEnum[ActionTypeEnum["REVIEWEDBYLAWFIRM"] = 'REVIEWED_BY_LAWFIRM'] = "REVIEWEDBYLAWFIRM";
        ActionTypeEnum[ActionTypeEnum["SOCIALMEDIAASK"] = 'SOCIAL_MEDIA_ASK'] = "SOCIALMEDIAASK";
        ActionTypeEnum[ActionTypeEnum["TICKETMAILEDTOCOURT"] = 'TICKET_MAILED_TO_COURT'] = "TICKETMAILEDTOCOURT";
    })(ActionTypeEnum = CaseActionRequestModel.ActionTypeEnum || (CaseActionRequestModel.ActionTypeEnum = {}));
})(CaseActionRequestModel || (CaseActionRequestModel = {}));
