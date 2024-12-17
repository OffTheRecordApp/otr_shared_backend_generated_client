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
 * @interface MessageByEntityModel
 */
export interface MessageByEntityModel {
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    authorFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    authorLastName?: string;
    /**
     * 
     * @type {number}
     * @memberof MessageByEntityModel
     */
    authorUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    caseDocId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    caseId?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    caseStatus?: MessageByEntityModelCaseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    caseStatusCategory?: MessageByEntityModelCaseStatusCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    customerFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    customerLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    docType?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    docUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MessageByEntityModel
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    messageBody?: string;
    /**
     * 
     * @type {number}
     * @memberof MessageByEntityModel
     */
    messageId?: number;
    /**
     * 
     * @type {Date}
     * @memberof MessageByEntityModel
     */
    messageSentDateUtc?: Date;
    /**
     * 
     * @type {string}
     * @memberof MessageByEntityModel
     */
    profilePictureUrl?: string;
}

export function MessageByEntityModelFromJSON(json: any): MessageByEntityModel {
    return MessageByEntityModelFromJSONTyped(json, false);
}

export function MessageByEntityModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageByEntityModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorFirstName': !exists(json, 'authorFirstName') ? undefined : json['authorFirstName'],
        'authorLastName': !exists(json, 'authorLastName') ? undefined : json['authorLastName'],
        'authorUserId': !exists(json, 'authorUserId') ? undefined : json['authorUserId'],
        'caseDocId': !exists(json, 'caseDocId') ? undefined : json['caseDocId'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseStatus': !exists(json, 'caseStatus') ? undefined : json['caseStatus'],
        'caseStatusCategory': !exists(json, 'caseStatusCategory') ? undefined : json['caseStatusCategory'],
        'customerFirstName': !exists(json, 'customerFirstName') ? undefined : json['customerFirstName'],
        'customerLastName': !exists(json, 'customerLastName') ? undefined : json['customerLastName'],
        'docType': !exists(json, 'docType') ? undefined : json['docType'],
        'docUrl': !exists(json, 'docUrl') ? undefined : json['docUrl'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'messageBody': !exists(json, 'messageBody') ? undefined : json['messageBody'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'messageSentDateUtc': !exists(json, 'messageSentDateUtc') ? undefined : (new Date(json['messageSentDateUtc'])),
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
    };
}

export function MessageByEntityModelToJSON(value?: MessageByEntityModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorFirstName': value.authorFirstName,
        'authorLastName': value.authorLastName,
        'authorUserId': value.authorUserId,
        'caseDocId': value.caseDocId,
        'caseId': value.caseId,
        'caseStatus': value.caseStatus,
        'caseStatusCategory': value.caseStatusCategory,
        'customerFirstName': value.customerFirstName,
        'customerLastName': value.customerLastName,
        'docType': value.docType,
        'docUrl': value.docUrl,
        'isDeleted': value.isDeleted,
        'messageBody': value.messageBody,
        'messageId': value.messageId,
        'messageSentDateUtc': value.messageSentDateUtc === undefined ? undefined : (value.messageSentDateUtc.toISOString()),
        'profilePictureUrl': value.profilePictureUrl,
    };
}

/**
* @export
* @enum {string}
*/
export enum MessageByEntityModelCaseStatusEnum {
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
export enum MessageByEntityModelCaseStatusCategoryEnum {
    ACTIVE = 'ACTIVE',
    CANCELLED = 'CANCELLED',
    RESOLVED = 'RESOLVED',
    UNCONFIRMED = 'UNCONFIRMED'
}

