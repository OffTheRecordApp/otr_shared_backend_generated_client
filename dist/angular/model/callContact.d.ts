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
export declare namespace CallContact {
    type CallDirectionEnum = 'INCOMING' | 'OUTGOING';
    const CallDirectionEnum: {
        Incoming: CallDirectionEnum;
        Outgoing: CallDirectionEnum;
    };
    type CallStatusEnum = 'ABANDONED' | 'BLOCKED' | 'BUSY' | 'COMPLETED' | 'CONNECTING' | 'CONNECTION_FAILED' | 'DEFAULT' | 'DISCONNECTED' | 'ENQUEUED' | 'IN_PROGRESS' | 'MISSED_CALL' | 'ON_HOLD' | 'RECENTLY_COMPLETED' | 'RESTRICTED' | 'VOICEMAIL' | 'VOICEMAIL_RECORDING_IN_PROGRESS';
    const CallStatusEnum: {
        Abandoned: CallStatusEnum;
        Blocked: CallStatusEnum;
        Busy: CallStatusEnum;
        Completed: CallStatusEnum;
        Connecting: CallStatusEnum;
        ConnectionFailed: CallStatusEnum;
        Default: CallStatusEnum;
        Disconnected: CallStatusEnum;
        Enqueued: CallStatusEnum;
        InProgress: CallStatusEnum;
        MissedCall: CallStatusEnum;
        OnHold: CallStatusEnum;
        RecentlyCompleted: CallStatusEnum;
        Restricted: CallStatusEnum;
        Voicemail: CallStatusEnum;
        VoicemailRecordingInProgress: CallStatusEnum;
    };
    type IntegratedResourceTypeEnum = 'FRESHDESK' | 'UNKNOWN';
    const IntegratedResourceTypeEnum: {
        Freshdesk: IntegratedResourceTypeEnum;
        Unknown: IntegratedResourceTypeEnum;
    };
}
