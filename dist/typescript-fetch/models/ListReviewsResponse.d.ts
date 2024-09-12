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
import { AggregateRatingMetrics, CursorModel, CustomerReview } from './';
/**
 *
 * @export
 * @interface ListReviewsResponse
 */
export interface ListReviewsResponse {
    /**
     *
     * @type {AggregateRatingMetrics}
     * @memberof ListReviewsResponse
     */
    aggregates?: AggregateRatingMetrics;
    /**
     *
     * @type {CursorModel}
     * @memberof ListReviewsResponse
     */
    cursorModel?: CursorModel;
    /**
     *
     * @type {Array<CustomerReview>}
     * @memberof ListReviewsResponse
     */
    reviews?: Array<CustomerReview>;
}
export declare function ListReviewsResponseFromJSON(json: any): ListReviewsResponse;
export declare function ListReviewsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListReviewsResponse;
export declare function ListReviewsResponseToJSON(value?: ListReviewsResponse | null): any;