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
 * @interface IntercomTicketAttributes
 */
export interface IntercomTicketAttributes {
    /**
     *
     * @type {string}
     * @memberof IntercomTicketAttributes
     */
    defaultDescription?: string;
    /**
     *
     * @type {string}
     * @memberof IntercomTicketAttributes
     */
    defaultTitle?: string;
}
export declare function IntercomTicketAttributesFromJSON(json: any): IntercomTicketAttributes;
export declare function IntercomTicketAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntercomTicketAttributes;
export declare function IntercomTicketAttributesToJSON(value?: IntercomTicketAttributes | null): any;
