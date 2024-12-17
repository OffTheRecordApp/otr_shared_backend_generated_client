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
 * @interface ListPhoneCallsModel
 */
export interface ListPhoneCallsModel {
    /**
     * 
     * @type {number}
     * @memberof ListPhoneCallsModel
     */
    agentId?: number;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    agentName?: string;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    callDirection?: ListPhoneCallsModelCallDirectionEnum;
    /**
     * 
     * @type {number}
     * @memberof ListPhoneCallsModel
     */
    callDurationInSeconds?: number;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    callQueueName?: string;
    /**
     * 
     * @type {Date}
     * @memberof ListPhoneCallsModel
     */
    callStartDateUtc?: Date;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    callStatus?: ListPhoneCallsModelCallStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    callStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    customerName?: string;
    /**
     * 
     * @type {number}
     * @memberof ListPhoneCallsModel
     */
    holdDurationInSeconds?: number;
    /**
     * 
     * @type {number}
     * @memberof ListPhoneCallsModel
     */
    ivrDurationInSeconds?: number;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    ivrName?: string;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    recordingUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof ListPhoneCallsModel
     */
    talkDurationInSeconds?: number;
    /**
     * 
     * @type {string}
     * @memberof ListPhoneCallsModel
     */
    teamName?: string;
    /**
     * 
     * @type {number}
     * @memberof ListPhoneCallsModel
     */
    totalCalls?: number;
    /**
     * 
     * @type {number}
     * @memberof ListPhoneCallsModel
     */
    totalOtrAccounts?: number;
    /**
     * 
     * @type {number}
     * @memberof ListPhoneCallsModel
     */
    userId?: number;
}

export function ListPhoneCallsModelFromJSON(json: any): ListPhoneCallsModel {
    return ListPhoneCallsModelFromJSONTyped(json, false);
}

export function ListPhoneCallsModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPhoneCallsModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agentId': !exists(json, 'agentId') ? undefined : json['agentId'],
        'agentName': !exists(json, 'agentName') ? undefined : json['agentName'],
        'callDirection': !exists(json, 'callDirection') ? undefined : json['callDirection'],
        'callDurationInSeconds': !exists(json, 'callDurationInSeconds') ? undefined : json['callDurationInSeconds'],
        'callQueueName': !exists(json, 'callQueueName') ? undefined : json['callQueueName'],
        'callStartDateUtc': !exists(json, 'callStartDateUtc') ? undefined : (new Date(json['callStartDateUtc'])),
        'callStatus': !exists(json, 'callStatus') ? undefined : json['callStatus'],
        'callStatusName': !exists(json, 'callStatusName') ? undefined : json['callStatusName'],
        'customerName': !exists(json, 'customerName') ? undefined : json['customerName'],
        'holdDurationInSeconds': !exists(json, 'holdDurationInSeconds') ? undefined : json['holdDurationInSeconds'],
        'ivrDurationInSeconds': !exists(json, 'ivrDurationInSeconds') ? undefined : json['ivrDurationInSeconds'],
        'ivrName': !exists(json, 'ivrName') ? undefined : json['ivrName'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'recordingUrl': !exists(json, 'recordingUrl') ? undefined : json['recordingUrl'],
        'talkDurationInSeconds': !exists(json, 'talkDurationInSeconds') ? undefined : json['talkDurationInSeconds'],
        'teamName': !exists(json, 'teamName') ? undefined : json['teamName'],
        'totalCalls': !exists(json, 'totalCalls') ? undefined : json['totalCalls'],
        'totalOtrAccounts': !exists(json, 'totalOtrAccounts') ? undefined : json['totalOtrAccounts'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function ListPhoneCallsModelToJSON(value?: ListPhoneCallsModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agentId': value.agentId,
        'agentName': value.agentName,
        'callDirection': value.callDirection,
        'callDurationInSeconds': value.callDurationInSeconds,
        'callQueueName': value.callQueueName,
        'callStartDateUtc': value.callStartDateUtc === undefined ? undefined : (value.callStartDateUtc.toISOString()),
        'callStatus': value.callStatus,
        'callStatusName': value.callStatusName,
        'customerName': value.customerName,
        'holdDurationInSeconds': value.holdDurationInSeconds,
        'ivrDurationInSeconds': value.ivrDurationInSeconds,
        'ivrName': value.ivrName,
        'phoneNumber': value.phoneNumber,
        'recordingUrl': value.recordingUrl,
        'talkDurationInSeconds': value.talkDurationInSeconds,
        'teamName': value.teamName,
        'totalCalls': value.totalCalls,
        'totalOtrAccounts': value.totalOtrAccounts,
        'userId': value.userId,
    };
}

/**
* @export
* @enum {string}
*/
export enum ListPhoneCallsModelCallDirectionEnum {
    INCOMING = 'INCOMING',
    OUTGOING = 'OUTGOING'
}
/**
* @export
* @enum {string}
*/
export enum ListPhoneCallsModelCallStatusEnum {
    ABANDONED = 'ABANDONED',
    BLOCKED = 'BLOCKED',
    BUSY = 'BUSY',
    COMPLETED = 'COMPLETED',
    CONNECTING = 'CONNECTING',
    CONNECTIONFAILED = 'CONNECTION_FAILED',
    DEFAULT = 'DEFAULT',
    DISCONNECTED = 'DISCONNECTED',
    ENQUEUED = 'ENQUEUED',
    INPROGRESS = 'IN_PROGRESS',
    MISSEDCALL = 'MISSED_CALL',
    ONHOLD = 'ON_HOLD',
    RECENTLYCOMPLETED = 'RECENTLY_COMPLETED',
    RESTRICTED = 'RESTRICTED',
    VOICEMAIL = 'VOICEMAIL',
    VOICEMAILRECORDINGINPROGRESS = 'VOICEMAIL_RECORDING_IN_PROGRESS'
}

