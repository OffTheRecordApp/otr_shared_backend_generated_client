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


export interface CallContact { 
    agentId?: number;
    agentName?: string;
    callDirection?: CallContact.CallDirectionEnum;
    callDurationInSeconds?: number;
    callId?: number;
    callQueueId?: number;
    callQueueName?: string;
    callStartDateUtc?: string;
    callStatus?: CallContact.CallStatusEnum;
    customerName?: string;
    customerNumber?: string;
    integratedResourceType?: CallContact.IntegratedResourceTypeEnum;
    integratedResourceValue?: string;
    ivrId?: number;
    ivrName?: string;
    notes?: string;
    parentCallId?: number;
    recordingUrl?: string;
    rootCallId?: number;
    tags?: string;
    teamId?: number;
    teamName?: string;
    thirdPartyCallId?: number;
    userId?: number;
}
export namespace CallContact {
    export type CallDirectionEnum = 'INCOMING' | 'OUTGOING';
    export const CallDirectionEnum = {
        Incoming: 'INCOMING' as CallDirectionEnum,
        Outgoing: 'OUTGOING' as CallDirectionEnum
    };
    export type CallStatusEnum = 'ABANDONED' | 'BLOCKED' | 'BUSY' | 'COMPLETED' | 'CONNECTING' | 'CONNECTION_FAILED' | 'DEFAULT' | 'DISCONNECTED' | 'ENQUEUED' | 'IN_PROGRESS' | 'MISSED_CALL' | 'ON_HOLD' | 'RECENTLY_COMPLETED' | 'RESTRICTED' | 'VOICEMAIL' | 'VOICEMAIL_RECORDING_IN_PROGRESS';
    export const CallStatusEnum = {
        Abandoned: 'ABANDONED' as CallStatusEnum,
        Blocked: 'BLOCKED' as CallStatusEnum,
        Busy: 'BUSY' as CallStatusEnum,
        Completed: 'COMPLETED' as CallStatusEnum,
        Connecting: 'CONNECTING' as CallStatusEnum,
        ConnectionFailed: 'CONNECTION_FAILED' as CallStatusEnum,
        Default: 'DEFAULT' as CallStatusEnum,
        Disconnected: 'DISCONNECTED' as CallStatusEnum,
        Enqueued: 'ENQUEUED' as CallStatusEnum,
        InProgress: 'IN_PROGRESS' as CallStatusEnum,
        MissedCall: 'MISSED_CALL' as CallStatusEnum,
        OnHold: 'ON_HOLD' as CallStatusEnum,
        RecentlyCompleted: 'RECENTLY_COMPLETED' as CallStatusEnum,
        Restricted: 'RESTRICTED' as CallStatusEnum,
        Voicemail: 'VOICEMAIL' as CallStatusEnum,
        VoicemailRecordingInProgress: 'VOICEMAIL_RECORDING_IN_PROGRESS' as CallStatusEnum
    };
    export type IntegratedResourceTypeEnum = 'FRESHDESK' | 'UNKNOWN';
    export const IntegratedResourceTypeEnum = {
        Freshdesk: 'FRESHDESK' as IntegratedResourceTypeEnum,
        Unknown: 'UNKNOWN' as IntegratedResourceTypeEnum
    };
}


