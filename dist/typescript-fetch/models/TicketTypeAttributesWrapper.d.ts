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
import { TicketTypeAttribute } from './';
/**
 *
 * @export
 * @interface TicketTypeAttributesWrapper
 */
export interface TicketTypeAttributesWrapper {
    /**
     *
     * @type {Array<TicketTypeAttribute>}
     * @memberof TicketTypeAttributesWrapper
     */
    data?: Array<TicketTypeAttribute>;
    /**
     *
     * @type {string}
     * @memberof TicketTypeAttributesWrapper
     */
    type?: string;
}
export declare function TicketTypeAttributesWrapperFromJSON(json: any): TicketTypeAttributesWrapper;
export declare function TicketTypeAttributesWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketTypeAttributesWrapper;
export declare function TicketTypeAttributesWrapperToJSON(value?: TicketTypeAttributesWrapper | null): any;
