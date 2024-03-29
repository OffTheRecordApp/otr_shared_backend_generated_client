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
import { ZoneId } from './zoneId';


export interface Aggregates { 
    endDate?: string;
    matchingRecords?: number;
    matchingRevenue?: number;
    matchingTransactionVolume?: number;
    startDate?: string;
    totalRecords?: number;
    totalRevenue?: number;
    totalTransactionVolume?: number;
    zoneId?: ZoneId;
}

