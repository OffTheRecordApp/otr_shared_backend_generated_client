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
import { AggregateQueryResults, Aggregates, Case } from './';
/**
 *
 * @export
 * @interface ListCaseBookingsResponse
 */
export interface ListCaseBookingsResponse {
    /**
     *
     * @type {Aggregates}
     * @memberof ListCaseBookingsResponse
     */
    aggregates?: Aggregates;
    /**
     *
     * @type {{ [key: string]: AggregateQueryResults; }}
     * @memberof ListCaseBookingsResponse
     */
    aggregatesByGender?: {
        [key: string]: AggregateQueryResults;
    };
    /**
     *
     * @type {{ [key: string]: AggregateQueryResults; }}
     * @memberof ListCaseBookingsResponse
     */
    aggregatesByRace?: {
        [key: string]: AggregateQueryResults;
    };
    /**
     *
     * @type {{ [key: string]: AggregateQueryResults; }}
     * @memberof ListCaseBookingsResponse
     */
    aggregatesByState?: {
        [key: string]: AggregateQueryResults;
    };
    /**
     *
     * @type {Array<Case>}
     * @memberof ListCaseBookingsResponse
     */
    cases?: Array<Case>;
}
export declare function ListCaseBookingsResponseFromJSON(json: any): ListCaseBookingsResponse;
export declare function ListCaseBookingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCaseBookingsResponse;
export declare function ListCaseBookingsResponseToJSON(value?: ListCaseBookingsResponse | null): any;