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
export declare function ListPhoneCallsModelFromJSON(json: any): ListPhoneCallsModel;
export declare function ListPhoneCallsModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPhoneCallsModel;
export declare function ListPhoneCallsModelToJSON(value?: ListPhoneCallsModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum ListPhoneCallsModelCallDirectionEnum {
    INCOMING = "INCOMING",
    OUTGOING = "OUTGOING"
}
/**
* @export
* @enum {string}
*/
export declare enum ListPhoneCallsModelCallStatusEnum {
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
