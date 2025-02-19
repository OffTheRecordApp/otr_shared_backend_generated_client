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
import { TicketPart } from './';
/**
 *
 * @export
 * @interface TicketPartsWrapper
 */
export interface TicketPartsWrapper {
    /**
     *
     * @type {Array<TicketPart>}
     * @memberof TicketPartsWrapper
     */
    ticketParts?: Array<TicketPart>;
    /**
     *
     * @type {string}
     * @memberof TicketPartsWrapper
     */
    type?: string;
}
export declare function TicketPartsWrapperFromJSON(json: any): TicketPartsWrapper;
export declare function TicketPartsWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketPartsWrapper;
export declare function TicketPartsWrapperToJSON(value?: TicketPartsWrapper | null): any;
