/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ActionByEntityModel
 */
export interface ActionByEntityModel {
    /**
     * 
     * @type {Date}
     * @memberof ActionByEntityModel
     */
    actionDateUtc?: Date;
    /**
     * 
     * @type {number}
     * @memberof ActionByEntityModel
     */
    actionId?: number;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    actionNote?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    actionType?: ActionByEntityModelActionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    authorFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    authorLastName?: string;
    /**
     * 
     * @type {number}
     * @memberof ActionByEntityModel
     */
    authorUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    caseId?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    caseStatus?: ActionByEntityModelCaseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    caseStatusCategory?: ActionByEntityModelCaseStatusCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    customerFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    customerLastName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ActionByEntityModel
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ActionByEntityModel
     */
    profilePictureUrl?: string;
}

export function ActionByEntityModelFromJSON(json: any): ActionByEntityModel {
    return ActionByEntityModelFromJSONTyped(json, false);
}

export function ActionByEntityModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionByEntityModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionDateUtc': !exists(json, 'actionDateUtc') ? undefined : (new Date(json['actionDateUtc'])),
        'actionId': !exists(json, 'actionId') ? undefined : json['actionId'],
        'actionNote': !exists(json, 'actionNote') ? undefined : json['actionNote'],
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'authorFirstName': !exists(json, 'authorFirstName') ? undefined : json['authorFirstName'],
        'authorLastName': !exists(json, 'authorLastName') ? undefined : json['authorLastName'],
        'authorUserId': !exists(json, 'authorUserId') ? undefined : json['authorUserId'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseStatus': !exists(json, 'caseStatus') ? undefined : json['caseStatus'],
        'caseStatusCategory': !exists(json, 'caseStatusCategory') ? undefined : json['caseStatusCategory'],
        'customerFirstName': !exists(json, 'customerFirstName') ? undefined : json['customerFirstName'],
        'customerLastName': !exists(json, 'customerLastName') ? undefined : json['customerLastName'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
    };
}

export function ActionByEntityModelToJSON(value?: ActionByEntityModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionDateUtc': value.actionDateUtc === undefined ? undefined : (value.actionDateUtc.toISOString()),
        'actionId': value.actionId,
        'actionNote': value.actionNote,
        'actionType': value.actionType,
        'authorFirstName': value.authorFirstName,
        'authorLastName': value.authorLastName,
        'authorUserId': value.authorUserId,
        'caseId': value.caseId,
        'caseStatus': value.caseStatus,
        'caseStatusCategory': value.caseStatusCategory,
        'customerFirstName': value.customerFirstName,
        'customerLastName': value.customerLastName,
        'isDeleted': value.isDeleted,
        'profilePictureUrl': value.profilePictureUrl,
    };
}

/**
* @export
* @enum {string}
*/
export enum ActionByEntityModelActionTypeEnum {
    CASEACCEPT = 'CASE_ACCEPT',
    CASECOUNTERACCEPTED = 'CASE_COUNTER_ACCEPTED',
    CASECOUNTERDECLINED = 'CASE_COUNTER_DECLINED',
    CASECOUNTERINITIATED = 'CASE_COUNTER_INITIATED',
    CASECOUNTERWITHDRAWN = 'CASE_COUNTER_WITHDRAWN',
    CASEDECLINE = 'CASE_DECLINE',
    CITATIONDATAEXTRACTED = 'CITATION_DATA_EXTRACTED',
    COURTDATEREMOVED = 'COURT_DATE_REMOVED',
    COURTDATESCHEDULED = 'COURT_DATE_SCHEDULED',
    DISCOVERYRECEIVED = 'DISCOVERY_RECEIVED',
    DISCOVERYREQUESTED = 'DISCOVERY_REQUESTED',
    DISPUTEFILED = 'DISPUTE_FILED',
    DRIVERLICENSEREQUESTED = 'DRIVER_LICENSE_REQUESTED',
    FAILEDPAYMENTATTEMPT = 'FAILED_PAYMENT_ATTEMPT',
    NOTICEOFAPPEARANCEFILED = 'NOTICE_OF_APPEARANCE_FILED',
    OTHER = 'OTHER',
    OVERDUEBALANCEPAID = 'OVERDUE_BALANCE_PAID',
    REVIEWEDBYLAWFIRM = 'REVIEWED_BY_LAWFIRM',
    SOCIALMEDIAASK = 'SOCIAL_MEDIA_ASK',
    TICKETMAILEDTOCOURT = 'TICKET_MAILED_TO_COURT'
}
/**
* @export
* @enum {string}
*/
export enum ActionByEntityModelCaseStatusEnum {
    AMENDEDDOWNWITHINCLASS = 'AMENDED_DOWN_WITHIN_CLASS',
    AMENDEDFULLFINE = 'AMENDED_FULL_FINE',
    AMENDEDINCREASEDFINE = 'AMENDED_INCREASED_FINE',
    AMENDEDNOFINE = 'AMENDED_NO_FINE',
    AMENDEDREDUCEDFINE = 'AMENDED_REDUCED_FINE',
    AMENDEDTOINFRACTION = 'AMENDED_TO_INFRACTION',
    AMENDEDTONMV = 'AMENDED_TO_NMV',
    CANCELLEDATTORNEYATFAULT = 'CANCELLED_ATTORNEY_AT_FAULT',
    CANCELLEDBYLAWFIRM = 'CANCELLED_BY_LAWFIRM',
    CANCELLEDBYUSER = 'CANCELLED_BY_USER',
    CANCELLEDDUPLICATE = 'CANCELLED_DUPLICATE',
    CANCELLEDNMV = 'CANCELLED_NMV',
    CANCELLEDNONPAYMENT = 'CANCELLED_NON_PAYMENT',
    CANCELLEDNOLAWFIRM = 'CANCELLED_NO_LAWFIRM',
    CANCELLEDOVERDUE = 'CANCELLED_OVERDUE',
    CANCELLEDTOOSHORTNOTICE = 'CANCELLED_TOO_SHORT_NOTICE',
    CASEINPROGRESS = 'CASE_IN_PROGRESS',
    CLIENTCONFIRMED = 'CLIENT_CONFIRMED',
    CLIENTCONFIRMEDUNPAID = 'CLIENT_CONFIRMED_UNPAID',
    CLIENTFIREDLAWFIRM = 'CLIENT_FIRED_LAWFIRM',
    CLIENTFORCEDLOSS = 'CLIENT_FORCED_LOSS',
    CLIENTPAIDFINE = 'CLIENT_PAID_FINE',
    CLIENTUNRESPONSIVE = 'CLIENT_UNRESPONSIVE',
    DEFERRED = 'DEFERRED',
    DISMISSED = 'DISMISSED',
    DIVERSION = 'DIVERSION',
    FEESDISPUTED = 'FEES_DISPUTED',
    FINEREDUCTIONONLY = 'FINE_REDUCTION_ONLY',
    LAWFIRMWITHDRAWN = 'LAWFIRM_WITHDRAWN',
    LOST = 'LOST',
    NOLAWFIRMAVAILABLE = 'NO_LAWFIRM_AVAILABLE',
    POINTREDUCTION = 'POINT_REDUCTION',
    REFUSEDBYLAWFIRM = 'REFUSED_BY_LAWFIRM',
    RESOLVEDNONPAYMENT = 'RESOLVED_NON_PAYMENT',
    STALE = 'STALE',
    TRAFFICSCHOOL = 'TRAFFIC_SCHOOL',
    UNCONFIRMED = 'UNCONFIRMED'
}
/**
* @export
* @enum {string}
*/
export enum ActionByEntityModelCaseStatusCategoryEnum {
    ACTIVE = 'ACTIVE',
    CANCELLED = 'CANCELLED',
    RESOLVED = 'RESOLVED',
    UNCONFIRMED = 'UNCONFIRMED'
}

