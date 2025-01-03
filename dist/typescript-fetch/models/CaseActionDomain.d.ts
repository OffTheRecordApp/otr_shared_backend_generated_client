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
import { AuthorModel } from './';
/**
 *
 * @export
 * @interface CaseActionDomain
 */
export interface CaseActionDomain {
    /**
     *
     * @type {Date}
     * @memberof CaseActionDomain
     */
    actionDate?: Date;
    /**
     *
     * @type {string}
     * @memberof CaseActionDomain
     */
    actionNote?: string;
    /**
     *
     * @type {string}
     * @memberof CaseActionDomain
     */
    actionType?: CaseActionDomainActionTypeEnum;
    /**
     *
     * @type {AuthorModel}
     * @memberof CaseActionDomain
     */
    author?: AuthorModel;
    /**
     *
     * @type {number}
     * @memberof CaseActionDomain
     */
    authorId?: number;
    /**
     *
     * @type {string}
     * @memberof CaseActionDomain
     */
    authorName?: string;
    /**
     *
     * @type {number}
     * @memberof CaseActionDomain
     */
    caseActionId?: number;
    /**
     *
     * @type {string}
     * @memberof CaseActionDomain
     */
    courtDateActionNote?: string;
    /**
     *
     * @type {string}
     * @memberof CaseActionDomain
     */
    courtDateActionTitle?: string;
    /**
     *
     * @type {boolean}
     * @memberof CaseActionDomain
     */
    isDeleted?: boolean;
    /**
     *
     * @type {string}
     * @memberof CaseActionDomain
     */
    label1?: string;
    /**
     *
     * @type {string}
     * @memberof CaseActionDomain
     */
    label2?: string;
}
export declare function CaseActionDomainFromJSON(json: any): CaseActionDomain;
export declare function CaseActionDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseActionDomain;
export declare function CaseActionDomainToJSON(value?: CaseActionDomain | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CaseActionDomainActionTypeEnum {
    CASEACCEPT = "CASE_ACCEPT",
    CASECOUNTERACCEPTED = "CASE_COUNTER_ACCEPTED",
    CASECOUNTERDECLINED = "CASE_COUNTER_DECLINED",
    CASECOUNTERINITIATED = "CASE_COUNTER_INITIATED",
    CASECOUNTERWITHDRAWN = "CASE_COUNTER_WITHDRAWN",
    CASEDECLINE = "CASE_DECLINE",
    CITATIONDATAEXTRACTED = "CITATION_DATA_EXTRACTED",
    COURTDATEREMOVED = "COURT_DATE_REMOVED",
    COURTDATESCHEDULED = "COURT_DATE_SCHEDULED",
    DISCOVERYRECEIVED = "DISCOVERY_RECEIVED",
    DISCOVERYREQUESTED = "DISCOVERY_REQUESTED",
    DISPUTEFILED = "DISPUTE_FILED",
    DRIVERLICENSEREQUESTED = "DRIVER_LICENSE_REQUESTED",
    FAILEDPAYMENTATTEMPT = "FAILED_PAYMENT_ATTEMPT",
    NOTICEOFAPPEARANCEFILED = "NOTICE_OF_APPEARANCE_FILED",
    OTHER = "OTHER",
    OVERDUEBALANCEPAID = "OVERDUE_BALANCE_PAID",
    REVIEWEDBYLAWFIRM = "REVIEWED_BY_LAWFIRM",
    SOCIALMEDIAASK = "SOCIAL_MEDIA_ASK",
    TICKETMAILEDTOCOURT = "TICKET_MAILED_TO_COURT"
}
