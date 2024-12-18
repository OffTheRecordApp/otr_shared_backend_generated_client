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

import { exists, mapValues } from '../runtime';
import {
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetEmployeeModel
 */
export interface GetEmployeeModel {
    /**
     * 
     * @type {string}
     * @memberof GetEmployeeModel
     */
    firstName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetEmployeeModel
     */
    isActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetEmployeeModel
     */
    lastName?: string;
    /**
     * 
     * @type {Timestamp}
     * @memberof GetEmployeeModel
     */
    startDate?: Timestamp;
    /**
     * 
     * @type {string}
     * @memberof GetEmployeeModel
     */
    team?: string;
    /**
     * 
     * @type {Timestamp}
     * @memberof GetEmployeeModel
     */
    terminationDate?: Timestamp;
    /**
     * 
     * @type {string}
     * @memberof GetEmployeeModel
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof GetEmployeeModel
     */
    userId?: number;
}

export function GetEmployeeModelFromJSON(json: any): GetEmployeeModel {
    return GetEmployeeModelFromJSONTyped(json, false);
}

export function GetEmployeeModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEmployeeModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'startDate': !exists(json, 'startDate') ? undefined : TimestampFromJSON(json['startDate']),
        'team': !exists(json, 'team') ? undefined : json['team'],
        'terminationDate': !exists(json, 'terminationDate') ? undefined : TimestampFromJSON(json['terminationDate']),
        'title': !exists(json, 'title') ? undefined : json['title'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function GetEmployeeModelToJSON(value?: GetEmployeeModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'isActive': value.isActive,
        'lastName': value.lastName,
        'startDate': TimestampToJSON(value.startDate),
        'team': value.team,
        'terminationDate': TimestampToJSON(value.terminationDate),
        'title': value.title,
        'userId': value.userId,
    };
}


