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
export interface Subscriber {
    "created_at"?: string;
    "custom_fields"?: {
        [key: string]: string;
    };
    "email"?: string;
    "id"?: string;
    "prospect"?: boolean;
    "status"?: string;
    "tags"?: Array<string>;
    "time_zone"?: string;
    "user_id"?: string;
    "utc_offset"?: number;
}
