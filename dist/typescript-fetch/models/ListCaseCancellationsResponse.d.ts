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
import { CancellationAggregates, Case } from './';
/**
 *
 * @export
 * @interface ListCaseCancellationsResponse
 */
export interface ListCaseCancellationsResponse {
    /**
     *
     * @type {CancellationAggregates}
     * @memberof ListCaseCancellationsResponse
     */
    cancellationAggregates?: CancellationAggregates;
    /**
     *
     * @type {Array<Case>}
     * @memberof ListCaseCancellationsResponse
     */
    cancellations?: Array<Case>;
}
export declare function ListCaseCancellationsResponseFromJSON(json: any): ListCaseCancellationsResponse;
export declare function ListCaseCancellationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCaseCancellationsResponse;
export declare function ListCaseCancellationsResponseToJSON(value?: ListCaseCancellationsResponse | null): any;