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
/**
 *
 * @export
 * @interface CallContact
 */
export interface CallContact {
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    agentId?: number;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    agentName?: string;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    callDirection?: CallContactCallDirectionEnum;
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    callDurationInSeconds?: number;
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    callId?: number;
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    callQueueId?: number;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    callQueueName?: string;
    /**
     *
     * @type {Date}
     * @memberof CallContact
     */
    callStartDateUtc?: Date;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    callStatus?: CallContactCallStatusEnum;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    customerName?: string;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    customerNumber?: string;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    integratedResourceType?: CallContactIntegratedResourceTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    integratedResourceValue?: string;
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    ivrId?: number;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    ivrName?: string;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    notes?: string;
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    parentCallId?: number;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    recordingUrl?: string;
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    rootCallId?: number;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    tags?: string;
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    teamId?: number;
    /**
     *
     * @type {string}
     * @memberof CallContact
     */
    teamName?: string;
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    thirdPartyCallId?: number;
    /**
     *
     * @type {number}
     * @memberof CallContact
     */
    userId?: number;
}
export declare function CallContactFromJSON(json: any): CallContact;
export declare function CallContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallContact;
export declare function CallContactToJSON(value?: CallContact | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CallContactCallDirectionEnum {
    INCOMING = "INCOMING",
    OUTGOING = "OUTGOING"
}
/**
* @export
* @enum {string}
*/
export declare enum CallContactCallStatusEnum {
    ABANDONED = "ABANDONED",
    BLOCKED = "BLOCKED",
    BUSY = "BUSY",
    COMPLETED = "COMPLETED",
    CONNECTING = "CONNECTING",
    CONNECTIONFAILED = "CONNECTION_FAILED",
    DEFAULT = "DEFAULT",
    DISCONNECTED = "DISCONNECTED",
    ENQUEUED = "ENQUEUED",
    INPROGRESS = "IN_PROGRESS",
    MISSEDCALL = "MISSED_CALL",
    ONHOLD = "ON_HOLD",
    RECENTLYCOMPLETED = "RECENTLY_COMPLETED",
    RESTRICTED = "RESTRICTED",
    VOICEMAIL = "VOICEMAIL",
    VOICEMAILRECORDINGINPROGRESS = "VOICEMAIL_RECORDING_IN_PROGRESS"
}
/**
* @export
* @enum {string}
*/
export declare enum CallContactIntegratedResourceTypeEnum {
    FRESHDESK = "FRESHDESK",
    UNKNOWN = "UNKNOWN"
}
