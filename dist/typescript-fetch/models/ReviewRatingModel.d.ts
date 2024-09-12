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
 * @interface ReviewRatingModel
 */
export interface ReviewRatingModel {
    /**
     *
     * @type {number}
     * @memberof ReviewRatingModel
     */
    communicationRating?: number;
    /**
     *
     * @type {number}
     * @memberof ReviewRatingModel
     */
    outcomeRating?: number;
    /**
     *
     * @type {number}
     * @memberof ReviewRatingModel
     */
    overallRating?: number;
}
export declare function ReviewRatingModelFromJSON(json: any): ReviewRatingModel;
export declare function ReviewRatingModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewRatingModel;
export declare function ReviewRatingModelToJSON(value?: ReviewRatingModel | null): any;