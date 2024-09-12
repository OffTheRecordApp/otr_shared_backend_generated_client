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
import { exists } from '../runtime';
export function ListPhoneCallsModelFromJSON(json) {
    return ListPhoneCallsModelFromJSONTyped(json, false);
}
export function ListPhoneCallsModelFromJSONTyped(json, ignoreDiscriminator) {
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
        'customerName': !exists(json, 'customerName') ? undefined : json['customerName'],
        'holdDurationInSeconds': !exists(json, 'holdDurationInSeconds') ? undefined : json['holdDurationInSeconds'],
        'ivrDurationInSeconds': !exists(json, 'ivrDurationInSeconds') ? undefined : json['ivrDurationInSeconds'],
        'ivrName': !exists(json, 'ivrName') ? undefined : json['ivrName'],
        'recordingUrl': !exists(json, 'recordingUrl') ? undefined : json['recordingUrl'],
        'talkDurationInSeconds': !exists(json, 'talkDurationInSeconds') ? undefined : json['talkDurationInSeconds'],
        'teamName': !exists(json, 'teamName') ? undefined : json['teamName'],
    };
}
export function ListPhoneCallsModelToJSON(value) {
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
        'customerName': value.customerName,
        'holdDurationInSeconds': value.holdDurationInSeconds,
        'ivrDurationInSeconds': value.ivrDurationInSeconds,
        'ivrName': value.ivrName,
        'recordingUrl': value.recordingUrl,
        'talkDurationInSeconds': value.talkDurationInSeconds,
        'teamName': value.teamName,
    };
}
/**
* @export
* @enum {string}
*/
export var ListPhoneCallsModelCallDirectionEnum;
(function (ListPhoneCallsModelCallDirectionEnum) {
    ListPhoneCallsModelCallDirectionEnum["INCOMING"] = "INCOMING";
    ListPhoneCallsModelCallDirectionEnum["OUTGOING"] = "OUTGOING";
})(ListPhoneCallsModelCallDirectionEnum || (ListPhoneCallsModelCallDirectionEnum = {}));
/**
* @export
* @enum {string}
*/
export var ListPhoneCallsModelCallStatusEnum;
(function (ListPhoneCallsModelCallStatusEnum) {
    ListPhoneCallsModelCallStatusEnum["ABANDONED"] = "ABANDONED";
    ListPhoneCallsModelCallStatusEnum["BLOCKED"] = "BLOCKED";
    ListPhoneCallsModelCallStatusEnum["BUSY"] = "BUSY";
    ListPhoneCallsModelCallStatusEnum["COMPLETED"] = "COMPLETED";
    ListPhoneCallsModelCallStatusEnum["CONNECTING"] = "CONNECTING";
    ListPhoneCallsModelCallStatusEnum["CONNECTIONFAILED"] = "CONNECTION_FAILED";
    ListPhoneCallsModelCallStatusEnum["DEFAULT"] = "DEFAULT";
    ListPhoneCallsModelCallStatusEnum["DISCONNECTED"] = "DISCONNECTED";
    ListPhoneCallsModelCallStatusEnum["ENQUEUED"] = "ENQUEUED";
    ListPhoneCallsModelCallStatusEnum["INPROGRESS"] = "IN_PROGRESS";
    ListPhoneCallsModelCallStatusEnum["MISSEDCALL"] = "MISSED_CALL";
    ListPhoneCallsModelCallStatusEnum["ONHOLD"] = "ON_HOLD";
    ListPhoneCallsModelCallStatusEnum["RECENTLYCOMPLETED"] = "RECENTLY_COMPLETED";
    ListPhoneCallsModelCallStatusEnum["RESTRICTED"] = "RESTRICTED";
    ListPhoneCallsModelCallStatusEnum["VOICEMAIL"] = "VOICEMAIL";
    ListPhoneCallsModelCallStatusEnum["VOICEMAILRECORDINGINPROGRESS"] = "VOICEMAIL_RECORDING_IN_PROGRESS";
})(ListPhoneCallsModelCallStatusEnum || (ListPhoneCallsModelCallStatusEnum = {}));