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
export function DirectMailContactFromJSON(json) {
    return DirectMailContactFromJSONTyped(json, false);
}
export function DirectMailContactFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'backTemplateUrlSent': !exists(json, 'backTemplateUrlSent') ? undefined : json['backTemplateUrlSent'],
        'costInCents': !exists(json, 'costInCents') ? undefined : json['costInCents'],
        'estimatedDeliveryDate': !exists(json, 'estimatedDeliveryDate') ? undefined : (new Date(json['estimatedDeliveryDate'])),
        'frontTemplateUrlSent': !exists(json, 'frontTemplateUrlSent') ? undefined : json['frontTemplateUrlSent'],
        'lobReferenceId': !exists(json, 'lobReferenceId') ? undefined : json['lobReferenceId'],
        'mailDimensions': !exists(json, 'mailDimensions') ? undefined : json['mailDimensions'],
        'mailTemplateName': !exists(json, 'mailTemplateName') ? undefined : json['mailTemplateName'],
        'mailType': !exists(json, 'mailType') ? undefined : json['mailType'],
        'processedForDeliveryDate': !exists(json, 'processedForDeliveryDate') ? undefined : (new Date(json['processedForDeliveryDate'])),
        'trackingStatus': !exists(json, 'trackingStatus') ? undefined : json['trackingStatus'],
    };
}
export function DirectMailContactToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'backTemplateUrlSent': value.backTemplateUrlSent,
        'costInCents': value.costInCents,
        'estimatedDeliveryDate': value.estimatedDeliveryDate === undefined ? undefined : (value.estimatedDeliveryDate.toISOString()),
        'frontTemplateUrlSent': value.frontTemplateUrlSent,
        'lobReferenceId': value.lobReferenceId,
        'mailDimensions': value.mailDimensions,
        'mailTemplateName': value.mailTemplateName,
        'mailType': value.mailType,
        'processedForDeliveryDate': value.processedForDeliveryDate === undefined ? undefined : (value.processedForDeliveryDate.toISOString()),
        'trackingStatus': value.trackingStatus,
    };
}
/**
* @export
* @enum {string}
*/
export var DirectMailContactMailTypeEnum;
(function (DirectMailContactMailTypeEnum) {
    DirectMailContactMailTypeEnum["CHECK"] = "CHECK";
    DirectMailContactMailTypeEnum["LETTER"] = "LETTER";
    DirectMailContactMailTypeEnum["POSTCARD"] = "POST_CARD";
})(DirectMailContactMailTypeEnum || (DirectMailContactMailTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var DirectMailContactTrackingStatusEnum;
(function (DirectMailContactTrackingStatusEnum) {
    DirectMailContactTrackingStatusEnum["CREATED"] = "CREATED";
    DirectMailContactTrackingStatusEnum["INLOCALAREA"] = "IN_LOCAL_AREA";
    DirectMailContactTrackingStatusEnum["INTRANSIT"] = "IN_TRANSIT";
    DirectMailContactTrackingStatusEnum["PROCESSEDFORDELIVERY"] = "PROCESSED_FOR_DELIVERY";
    DirectMailContactTrackingStatusEnum["RETURNEDTOSENDER"] = "RETURNED_TO_SENDER";
    DirectMailContactTrackingStatusEnum["REROUTED"] = "RE_ROUTED";
})(DirectMailContactTrackingStatusEnum || (DirectMailContactTrackingStatusEnum = {}));
