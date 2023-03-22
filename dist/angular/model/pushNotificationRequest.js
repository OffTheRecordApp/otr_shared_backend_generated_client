"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationRequest = void 0;
var PushNotificationRequest;
(function (PushNotificationRequest) {
    PushNotificationRequest.PageTypeEnum = {
        CaseAction: 'CASE_ACTION',
        CaseMessages: 'CASE_MESSAGES',
        CaseStatus: 'CASE_STATUS',
        CourtDateScheduled: 'COURT_DATE_SCHEDULED',
        NewTicket: 'NEW_TICKET',
        Profile: 'PROFILE'
    };
    PushNotificationRequest.PlatformTypeEnum = {
        Android: 'ANDROID',
        Ios: 'IOS',
        Webapp: 'WEBAPP'
    };
})(PushNotificationRequest = exports.PushNotificationRequest || (exports.PushNotificationRequest = {}));