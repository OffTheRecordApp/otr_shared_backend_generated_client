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
import { ReviewRatingModel } from './';
/**
 *
 * @export
 * @interface EditCustomerReviewRequest
 */
export interface EditCustomerReviewRequest {
    /**
     *
     * @type {string}
     * @memberof EditCustomerReviewRequest
     */
    copy?: string;
    /**
     *
     * @type {boolean}
     * @memberof EditCustomerReviewRequest
     */
    isRecommended?: boolean;
    /**
     *
     * @type {string}
     * @memberof EditCustomerReviewRequest
     */
    privacyMode?: EditCustomerReviewRequestPrivacyModeEnum;
    /**
     *
     * @type {ReviewRatingModel}
     * @memberof EditCustomerReviewRequest
     */
    ratingModel?: ReviewRatingModel;
}
export declare function EditCustomerReviewRequestFromJSON(json: any): EditCustomerReviewRequest;
export declare function EditCustomerReviewRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditCustomerReviewRequest;
export declare function EditCustomerReviewRequestToJSON(value?: EditCustomerReviewRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum EditCustomerReviewRequestPrivacyModeEnum {
    FRIENDS = "FRIENDS",
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC",
    SEMIPUBLIC = "SEMI_PUBLIC"
}
