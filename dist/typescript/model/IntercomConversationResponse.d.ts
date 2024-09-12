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
export interface IntercomConversationResponse {
    "admin_assignee_id"?: string;
    "ai_agent"?: string;
    "ai_agent_participated"?: boolean;
    "contacts"?: models.ContactList;
    "conversation_rating"?: string;
    "created_at"?: number;
    "custom_attributes"?: object;
    "first_contact_reply"?: models.FirstContactReply;
    "id"?: string;
    "linked_objects"?: models.LinkedObjects;
    "open"?: boolean;
    "priority"?: string;
    "read"?: boolean;
    "sla_applied"?: string;
    "snoozed_until"?: number;
    "source"?: models.Source;
    "state"?: string;
    "statistics"?: models.Statistics;
    "tags"?: models.Tags;
    "team_assignee_id"?: string;
    "teammates"?: models.Teammates;
    "title"?: string;
    "topics"?: models.Topics;
    "type"?: string;
    "updated_at"?: number;
    "waiting_since"?: number;
}