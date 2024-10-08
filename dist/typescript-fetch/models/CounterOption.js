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
export function CounterOptionFromJSON(json) {
    return CounterOptionFromJSONTyped(json, false);
}
export function CounterOptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'counterOptionType': !exists(json, 'counterOptionType') ? undefined : json['counterOptionType'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}
export function CounterOptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'counterOptionType': value.counterOptionType,
        'value': value.value,
    };
}
/**
* @export
* @enum {string}
*/
export var CounterOptionCounterOptionTypeEnum;
(function (CounterOptionCounterOptionTypeEnum) {
    CounterOptionCounterOptionTypeEnum["FEE"] = "CHANGE_FEE";
    CounterOptionCounterOptionTypeEnum["MBG"] = "CHANGE_MBG";
})(CounterOptionCounterOptionTypeEnum || (CounterOptionCounterOptionTypeEnum = {}));
