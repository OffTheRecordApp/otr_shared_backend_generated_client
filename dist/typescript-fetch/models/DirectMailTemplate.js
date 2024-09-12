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
export function DirectMailTemplateFromJSON(json) {
    return DirectMailTemplateFromJSONTyped(json, false);
}
export function DirectMailTemplateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mailDimensions': !exists(json, 'mailDimensions') ? undefined : json['mailDimensions'],
        'mailTemplateBackUrl': !exists(json, 'mailTemplateBackUrl') ? undefined : json['mailTemplateBackUrl'],
        'mailTemplateFrontUrl': !exists(json, 'mailTemplateFrontUrl') ? undefined : json['mailTemplateFrontUrl'],
        'mailTemplateId': !exists(json, 'mailTemplateId') ? undefined : json['mailTemplateId'],
        'mailTemplateName': !exists(json, 'mailTemplateName') ? undefined : json['mailTemplateName'],
        'mailType': !exists(json, 'mailType') ? undefined : json['mailType'],
    };
}
export function DirectMailTemplateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mailDimensions': value.mailDimensions,
        'mailTemplateBackUrl': value.mailTemplateBackUrl,
        'mailTemplateFrontUrl': value.mailTemplateFrontUrl,
        'mailTemplateId': value.mailTemplateId,
        'mailTemplateName': value.mailTemplateName,
        'mailType': value.mailType,
    };
}
/**
* @export
* @enum {string}
*/
export var DirectMailTemplateMailTypeEnum;
(function (DirectMailTemplateMailTypeEnum) {
    DirectMailTemplateMailTypeEnum["CHECK"] = "CHECK";
    DirectMailTemplateMailTypeEnum["LETTER"] = "LETTER";
    DirectMailTemplateMailTypeEnum["POSTCARD"] = "POST_CARD";
})(DirectMailTemplateMailTypeEnum || (DirectMailTemplateMailTypeEnum = {}));