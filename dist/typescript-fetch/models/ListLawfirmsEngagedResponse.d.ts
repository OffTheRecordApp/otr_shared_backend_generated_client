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
import { Aggregates, Lawfirm } from './';
/**
 *
 * @export
 * @interface ListLawfirmsEngagedResponse
 */
export interface ListLawfirmsEngagedResponse {
    /**
     *
     * @type {Aggregates}
     * @memberof ListLawfirmsEngagedResponse
     */
    aggregates?: Aggregates;
    /**
     *
     * @type {Array<Lawfirm>}
     * @memberof ListLawfirmsEngagedResponse
     */
    lawfirms?: Array<Lawfirm>;
}
export declare function ListLawfirmsEngagedResponseFromJSON(json: any): ListLawfirmsEngagedResponse;
export declare function ListLawfirmsEngagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListLawfirmsEngagedResponse;
export declare function ListLawfirmsEngagedResponseToJSON(value?: ListLawfirmsEngagedResponse | null): any;
