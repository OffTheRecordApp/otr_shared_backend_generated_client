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
export function ClientConfirmedUnpaidCaseFromJSON(json) {
    return ClientConfirmedUnpaidCaseFromJSONTyped(json, false);
}
export function ClientConfirmedUnpaidCaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountDisputed': !exists(json, 'amountDisputed') ? undefined : json['amountDisputed'],
        'amountDueLater': !exists(json, 'amountDueLater') ? undefined : json['amountDueLater'],
        'amountOverdue': !exists(json, 'amountOverdue') ? undefined : json['amountOverdue'],
        'amountPaid': !exists(json, 'amountPaid') ? undefined : json['amountPaid'],
        'bookingConfirmedDateUtc': !exists(json, 'bookingConfirmedDateUtc') ? undefined : (new Date(json['bookingConfirmedDateUtc'])),
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseSubtotal': !exists(json, 'caseSubtotal') ? undefined : json['caseSubtotal'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
    };
}
export function ClientConfirmedUnpaidCaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountDisputed': value.amountDisputed,
        'amountDueLater': value.amountDueLater,
        'amountOverdue': value.amountOverdue,
        'amountPaid': value.amountPaid,
        'bookingConfirmedDateUtc': value.bookingConfirmedDateUtc === undefined ? undefined : (value.bookingConfirmedDateUtc.toISOString()),
        'caseId': value.caseId,
        'caseSubtotal': value.caseSubtotal,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'userId': value.userId,
        'userName': value.userName,
    };
}