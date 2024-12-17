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

export interface Statistics {
    "count_assignments"?: number;
    "count_conversation_parts"?: number;
    "count_reopens"?: number;
    "first_admin_reply_at"?: number;
    "first_assignment_at"?: number;
    "first_close_at"?: number;
    "first_contact_reply_at"?: number;
    "last_admin_reply_at"?: number;
    "last_assignment_admin_reply_at"?: number;
    "last_assignment_at"?: number;
    "last_close_at"?: number;
    "last_closed_by_id"?: string;
    "last_contact_reply_at"?: number;
    "median_time_to_reply"?: number;
    "time_to_admin_reply"?: number;
    "time_to_assignment"?: number;
    "time_to_first_close"?: number;
    "time_to_last_close"?: number;
    "type"?: string;
}
