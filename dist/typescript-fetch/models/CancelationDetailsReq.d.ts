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
import { TimestampReq } from './';
/**
 *
 * @export
 * @interface CancelationDetailsReq
 */
export interface CancelationDetailsReq {
    /**
     *
     * @type {TimestampReq}
     * @memberof CancelationDetailsReq
     */
    cancelationDate?: TimestampReq;
    /**
     *
     * @type {string}
     * @memberof CancelationDetailsReq
     */
    cancelationReason?: string;
    /**
     *
     * @type {number}
     * @memberof CancelationDetailsReq
     */
    canceledByUserId?: number;
    /**
     *
     * @type {string}
     * @memberof CancelationDetailsReq
     */
    canceledByUserName?: string;
}
export declare function CancelationDetailsReqFromJSON(json: any): CancelationDetailsReq;
export declare function CancelationDetailsReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelationDetailsReq;
export declare function CancelationDetailsReqToJSON(value?: CancelationDetailsReq | null): any;
