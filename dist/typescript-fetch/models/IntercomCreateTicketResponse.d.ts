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
import { ContactList, IntercomTicketAttributes, LinkedObjects, TicketPartsWrapper, TicketType } from './';
/**
 *
 * @export
 * @interface IntercomCreateTicketResponse
 */
export interface IntercomCreateTicketResponse {
    /**
     *
     * @type {string}
     * @memberof IntercomCreateTicketResponse
     */
    adminAssigneeId?: string;
    /**
     *
     * @type {string}
     * @memberof IntercomCreateTicketResponse
     */
    category?: string;
    /**
     *
     * @type {ContactList}
     * @memberof IntercomCreateTicketResponse
     */
    contacts?: ContactList;
    /**
     *
     * @type {number}
     * @memberof IntercomCreateTicketResponse
     */
    createdAt?: number;
    /**
     *
     * @type {string}
     * @memberof IntercomCreateTicketResponse
     */
    id?: string;
    /**
     *
     * @type {boolean}
     * @memberof IntercomCreateTicketResponse
     */
    isShared?: boolean;
    /**
     *
     * @type {LinkedObjects}
     * @memberof IntercomCreateTicketResponse
     */
    linkedObjects?: LinkedObjects;
    /**
     *
     * @type {boolean}
     * @memberof IntercomCreateTicketResponse
     */
    open?: boolean;
    /**
     *
     * @type {number}
     * @memberof IntercomCreateTicketResponse
     */
    snoozedUntil?: number;
    /**
     *
     * @type {string}
     * @memberof IntercomCreateTicketResponse
     */
    teamAssigneeId?: string;
    /**
     *
     * @type {IntercomTicketAttributes}
     * @memberof IntercomCreateTicketResponse
     */
    ticketAttributes?: IntercomTicketAttributes;
    /**
     *
     * @type {string}
     * @memberof IntercomCreateTicketResponse
     */
    ticketId?: string;
    /**
     *
     * @type {TicketPartsWrapper}
     * @memberof IntercomCreateTicketResponse
     */
    ticketParts?: TicketPartsWrapper;
    /**
     *
     * @type {string}
     * @memberof IntercomCreateTicketResponse
     */
    ticketState?: string;
    /**
     *
     * @type {string}
     * @memberof IntercomCreateTicketResponse
     */
    ticketStateExternalLabel?: string;
    /**
     *
     * @type {string}
     * @memberof IntercomCreateTicketResponse
     */
    ticketStateInternalLabel?: string;
    /**
     *
     * @type {TicketType}
     * @memberof IntercomCreateTicketResponse
     */
    ticketType?: TicketType;
    /**
     *
     * @type {string}
     * @memberof IntercomCreateTicketResponse
     */
    type?: string;
    /**
     *
     * @type {number}
     * @memberof IntercomCreateTicketResponse
     */
    updatedAt?: number;
}
export declare function IntercomCreateTicketResponseFromJSON(json: any): IntercomCreateTicketResponse;
export declare function IntercomCreateTicketResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntercomCreateTicketResponse;
export declare function IntercomCreateTicketResponseToJSON(value?: IntercomCreateTicketResponse | null): any;