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

export interface CallContact {
    "agentId"?: number;
    "agentName"?: string;
    "callDirection"?: CallContact.CallDirectionEnum;
    "callDurationInSeconds"?: number;
    "callId"?: number;
    "callQueueId"?: number;
    "callQueueName"?: string;
    "callStartDateUtc"?: string;
    "callStatus"?: CallContact.CallStatusEnum;
    "customerName"?: string;
    "customerNumber"?: string;
    "integratedResourceType"?: CallContact.IntegratedResourceTypeEnum;
    "integratedResourceValue"?: string;
    "ivrId"?: number;
    "ivrName"?: string;
    "notes"?: string;
    "parentCallId"?: number;
    "recordingUrl"?: string;
    "rootCallId"?: number;
    "tags"?: string;
    "teamId"?: number;
    "teamName"?: string;
    "thirdPartyCallId"?: number;
    "userId"?: number;
}

export namespace CallContact {
    export enum CallDirectionEnum {
        INCOMING = <any> 'INCOMING',
        OUTGOING = <any> 'OUTGOING'
    }
    export enum CallStatusEnum {
        ABANDONED = <any> 'ABANDONED',
        BLOCKED = <any> 'BLOCKED',
        BUSY = <any> 'BUSY',
        COMPLETED = <any> 'COMPLETED',
        CONNECTING = <any> 'CONNECTING',
        CONNECTIONFAILED = <any> 'CONNECTION_FAILED',
        DEFAULT = <any> 'DEFAULT',
        DISCONNECTED = <any> 'DISCONNECTED',
        ENQUEUED = <any> 'ENQUEUED',
        INPROGRESS = <any> 'IN_PROGRESS',
        MISSEDCALL = <any> 'MISSED_CALL',
        ONHOLD = <any> 'ON_HOLD',
        RECENTLYCOMPLETED = <any> 'RECENTLY_COMPLETED',
        RESTRICTED = <any> 'RESTRICTED',
        VOICEMAIL = <any> 'VOICEMAIL',
        VOICEMAILRECORDINGINPROGRESS = <any> 'VOICEMAIL_RECORDING_IN_PROGRESS'
    }
    export enum IntegratedResourceTypeEnum {
        FRESHDESK = <any> 'FRESHDESK',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
