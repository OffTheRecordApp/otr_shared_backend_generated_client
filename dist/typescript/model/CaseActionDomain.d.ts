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
export interface CaseActionDomain {
    "actionDate"?: string;
    "actionNote"?: string;
    "actionType"?: CaseActionDomain.ActionTypeEnum;
    "author"?: models.AuthorModel;
    "authorId"?: number;
    "authorName"?: string;
    "caseActionId"?: number;
    "courtDateActionNote"?: string;
    "courtDateActionTitle"?: string;
    "isDeleted"?: boolean;
    "label1"?: string;
    "label2"?: string;
}
export declare namespace CaseActionDomain {
    enum ActionTypeEnum {
        CASEACCEPT,
        CASECOUNTERACCEPTED,
        CASECOUNTERDECLINED,
        CASECOUNTERINITIATED,
        CASECOUNTERWITHDRAWN,
        CASEDECLINE,
        CITATIONDATAEXTRACTED,
        COURTDATEREMOVED,
        COURTDATESCHEDULED,
        DISCOVERYRECEIVED,
        DISCOVERYREQUESTED,
        DISPUTEFILED,
        DRIVERLICENSEREQUESTED,
        FAILEDPAYMENTATTEMPT,
        NOTICEOFAPPEARANCEFILED,
        OTHER,
        OVERDUEBALANCEPAID,
        REVIEWEDBYLAWFIRM,
        SOCIALMEDIAASK,
        TICKETMAILEDTOCOURT
    }
}
