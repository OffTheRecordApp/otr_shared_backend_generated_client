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
 * @interface ScheduledTaskResponse
 */
export interface ScheduledTaskResponse {
    /**
     *
     * @type {Date}
     * @memberof ScheduledTaskResponse
     */
    completionDate?: Date;
    /**
     *
     * @type {string}
     * @memberof ScheduledTaskResponse
     */
    errorMessage?: string;
    /**
     *
     * @type {Date}
     * @memberof ScheduledTaskResponse
     */
    runAtDateUtc?: Date;
    /**
     *
     * @type {string}
     * @memberof ScheduledTaskResponse
     */
    taskId?: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTaskResponse
     */
    taskReferenceId?: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTaskResponse
     */
    taskStatus?: ScheduledTaskResponseTaskStatusEnum;
    /**
     *
     * @type {string}
     * @memberof ScheduledTaskResponse
     */
    taskType?: ScheduledTaskResponseTaskTypeEnum;
}
export declare function ScheduledTaskResponseFromJSON(json: any): ScheduledTaskResponse;
export declare function ScheduledTaskResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTaskResponse;
export declare function ScheduledTaskResponseToJSON(value?: ScheduledTaskResponse | null): any;
/**
* @export
* @enum {string}
*/
export declare enum ScheduledTaskResponseTaskStatusEnum {
    CANCELLED = "CANCELLED",
    COMPLETE = "COMPLETE",
    ERROR = "ERROR",
    INPROGRESS = "IN_PROGRESS",
    NOOPERATION = "NO_OPERATION",
    QUEUED = "QUEUED"
}
/**
* @export
* @enum {string}
*/
export declare enum ScheduledTaskResponseTaskTypeEnum {
    EMAILFOLLOWUPTASK = "EMAIL_FOLLOW_UP_TASK",
    PAYINSTALLMENTTASK = "PAY_INSTALLMENT_TASK",
    PDFTOIMAGETASK = "PDF_TO_IMAGE_TASK",
    TICKETREVIEWTASK = "TICKET_REVIEW_TASK",
    VALIDATESUBSCRIPTIONTASK = "VALIDATE_SUBSCRIPTION_TASK"
}
