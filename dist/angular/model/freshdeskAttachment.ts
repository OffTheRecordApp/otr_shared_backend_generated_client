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
import { Timestamp } from './timestamp';


export interface FreshdeskAttachment { 
    attachment_url?: string;
    content_type?: string;
    created_at?: Timestamp;
    id?: number;
    name?: string;
    size?: number;
    updated_at?: Timestamp;
}
