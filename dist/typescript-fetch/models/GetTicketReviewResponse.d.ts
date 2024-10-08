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
import { TicketReviewRequestRes } from './';
/**
 *
 * @export
 * @interface GetTicketReviewResponse
 */
export interface GetTicketReviewResponse {
    /**
     *
     * @type {TicketReviewRequestRes}
     * @memberof GetTicketReviewResponse
     */
    ticketReview?: TicketReviewRequestRes;
}
export declare function GetTicketReviewResponseFromJSON(json: any): GetTicketReviewResponse;
export declare function GetTicketReviewResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTicketReviewResponse;
export declare function GetTicketReviewResponseToJSON(value?: GetTicketReviewResponse | null): any;
