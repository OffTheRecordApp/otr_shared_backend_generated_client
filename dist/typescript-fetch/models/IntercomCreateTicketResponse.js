/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime';
import { ContactListFromJSON, ContactListToJSON, IntercomTicketAttributesFromJSON, IntercomTicketAttributesToJSON, LinkedObjectsFromJSON, LinkedObjectsToJSON, TicketPartsWrapperFromJSON, TicketPartsWrapperToJSON, TicketTypeFromJSON, TicketTypeToJSON, } from './';
export function IntercomCreateTicketResponseFromJSON(json) {
    return IntercomCreateTicketResponseFromJSONTyped(json, false);
}
export function IntercomCreateTicketResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adminAssigneeId': !exists(json, 'admin_assignee_id') ? undefined : json['admin_assignee_id'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'contacts': !exists(json, 'contacts') ? undefined : ContactListFromJSON(json['contacts']),
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isShared': !exists(json, 'is_shared') ? undefined : json['is_shared'],
        'linkedObjects': !exists(json, 'linked_objects') ? undefined : LinkedObjectsFromJSON(json['linked_objects']),
        'open': !exists(json, 'open') ? undefined : json['open'],
        'snoozedUntil': !exists(json, 'snoozed_until') ? undefined : json['snoozed_until'],
        'teamAssigneeId': !exists(json, 'team_assignee_id') ? undefined : json['team_assignee_id'],
        'ticketAttributes': !exists(json, 'ticket_attributes') ? undefined : IntercomTicketAttributesFromJSON(json['ticket_attributes']),
        'ticketId': !exists(json, 'ticket_id') ? undefined : json['ticket_id'],
        'ticketParts': !exists(json, 'ticket_parts') ? undefined : TicketPartsWrapperFromJSON(json['ticket_parts']),
        'ticketState': !exists(json, 'ticket_state') ? undefined : json['ticket_state'],
        'ticketStateExternalLabel': !exists(json, 'ticket_state_external_label') ? undefined : json['ticket_state_external_label'],
        'ticketStateInternalLabel': !exists(json, 'ticket_state_internal_label') ? undefined : json['ticket_state_internal_label'],
        'ticketType': !exists(json, 'ticket_type') ? undefined : TicketTypeFromJSON(json['ticket_type']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}
export function IntercomCreateTicketResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'admin_assignee_id': value.adminAssigneeId,
        'category': value.category,
        'contacts': ContactListToJSON(value.contacts),
        'created_at': value.createdAt,
        'id': value.id,
        'is_shared': value.isShared,
        'linked_objects': LinkedObjectsToJSON(value.linkedObjects),
        'open': value.open,
        'snoozed_until': value.snoozedUntil,
        'team_assignee_id': value.teamAssigneeId,
        'ticket_attributes': IntercomTicketAttributesToJSON(value.ticketAttributes),
        'ticket_id': value.ticketId,
        'ticket_parts': TicketPartsWrapperToJSON(value.ticketParts),
        'ticket_state': value.ticketState,
        'ticket_state_external_label': value.ticketStateExternalLabel,
        'ticket_state_internal_label': value.ticketStateInternalLabel,
        'ticket_type': TicketTypeToJSON(value.ticketType),
        'type': value.type,
        'updated_at': value.updatedAt,
    };
}