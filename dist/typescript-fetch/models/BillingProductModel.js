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
import { BillingPriceModelFromJSON, BillingPriceModelToJSON, } from './';
export function BillingProductModelFromJSON(json) {
    return BillingProductModelFromJSONTyped(json, false);
}
export function BillingProductModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'active': !exists(json, 'active') ? undefined : json['active'],
        'caption': !exists(json, 'caption') ? undefined : json['caption'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'priceModels': !exists(json, 'priceModels') ? undefined : (json['priceModels'].map(BillingPriceModelFromJSON)),
    };
}
export function BillingProductModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'active': value.active,
        'caption': value.caption,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'description': value.description,
        'id': value.id,
        'name': value.name,
        'priceModels': value.priceModels === undefined ? undefined : (value.priceModels.map(BillingPriceModelToJSON)),
    };
}