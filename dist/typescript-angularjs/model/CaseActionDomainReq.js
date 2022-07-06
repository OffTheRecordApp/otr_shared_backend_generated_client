"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseActionDomainReq = void 0;
var CaseActionDomainReq;
(function (CaseActionDomainReq) {
    var ActionTypeEnum;
    (function (ActionTypeEnum) {
        ActionTypeEnum[ActionTypeEnum["CITATIONDATAEXTRACTED"] = 'CITATION_DATA_EXTRACTED'] = "CITATIONDATAEXTRACTED";
        ActionTypeEnum[ActionTypeEnum["COURTDATEREMOVED"] = 'COURT_DATE_REMOVED'] = "COURTDATEREMOVED";
        ActionTypeEnum[ActionTypeEnum["COURTDATESCHEDULED"] = 'COURT_DATE_SCHEDULED'] = "COURTDATESCHEDULED";
        ActionTypeEnum[ActionTypeEnum["DISCOVERYRECEIVED"] = 'DISCOVERY_RECEIVED'] = "DISCOVERYRECEIVED";
        ActionTypeEnum[ActionTypeEnum["DISCOVERYREQUESTED"] = 'DISCOVERY_REQUESTED'] = "DISCOVERYREQUESTED";
        ActionTypeEnum[ActionTypeEnum["FAILEDPAYMENTATTEMPT"] = 'FAILED_PAYMENT_ATTEMPT'] = "FAILEDPAYMENTATTEMPT";
        ActionTypeEnum[ActionTypeEnum["NOTICEOFAPPEARANCEFILED"] = 'NOTICE_OF_APPEARANCE_FILED'] = "NOTICEOFAPPEARANCEFILED";
        ActionTypeEnum[ActionTypeEnum["OTHER"] = 'OTHER'] = "OTHER";
        ActionTypeEnum[ActionTypeEnum["REVIEWEDBYLAWFIRM"] = 'REVIEWED_BY_LAWFIRM'] = "REVIEWEDBYLAWFIRM";
        ActionTypeEnum[ActionTypeEnum["TICKETMAILEDTOCOURT"] = 'TICKET_MAILED_TO_COURT'] = "TICKETMAILEDTOCOURT";
    })(ActionTypeEnum = CaseActionDomainReq.ActionTypeEnum || (CaseActionDomainReq.ActionTypeEnum = {}));
})(CaseActionDomainReq = exports.CaseActionDomainReq || (exports.CaseActionDomainReq = {}));
