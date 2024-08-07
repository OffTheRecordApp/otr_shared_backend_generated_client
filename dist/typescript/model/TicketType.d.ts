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
import * as models from './models';
export interface TicketType {
    "archived"?: boolean;
    "created_at"?: number;
    "description"?: string;
    "id"?: string;
    "is_internal"?: boolean;
    "name"?: string;
    "ticket_type_attributes"?: models.TicketTypeAttributesWrapper;
    "type"?: string;
    "updated_at"?: number;
}
