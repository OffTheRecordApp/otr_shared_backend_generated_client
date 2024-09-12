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
 * @interface ReplyToReviewRequest
 */
export interface ReplyToReviewRequest {
    /**
     *
     * @type {string}
     * @memberof ReplyToReviewRequest
     */
    copy?: string;
    /**
     *
     * @type {number}
     * @memberof ReplyToReviewRequest
     */
    userId?: number;
}
export declare function ReplyToReviewRequestFromJSON(json: any): ReplyToReviewRequest;
export declare function ReplyToReviewRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReplyToReviewRequest;
export declare function ReplyToReviewRequestToJSON(value?: ReplyToReviewRequest | null): any;