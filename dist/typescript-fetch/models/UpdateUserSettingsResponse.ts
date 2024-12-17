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
    SettingResponse,
    SettingResponseFromJSON,
    SettingResponseFromJSONTyped,
    SettingResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface UpdateUserSettingsResponse
 */
export interface UpdateUserSettingsResponse {
    /**
     * 
     * @type {Array<SettingResponse>}
     * @memberof UpdateUserSettingsResponse
     */
    settings?: Array<SettingResponse>;
}

export function UpdateUserSettingsResponseFromJSON(json: any): UpdateUserSettingsResponse {
    return UpdateUserSettingsResponseFromJSONTyped(json, false);
}

export function UpdateUserSettingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserSettingsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'settings': !exists(json, 'settings') ? undefined : ((json['settings'] as Array<any>).map(SettingResponseFromJSON)),
    };
}

export function UpdateUserSettingsResponseToJSON(value?: UpdateUserSettingsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'settings': value.settings === undefined ? undefined : ((value.settings as Array<any>).map(SettingResponseToJSON)),
    };
}

