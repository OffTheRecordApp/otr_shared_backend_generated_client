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
export var Alert;
(function (Alert) {
    let ActionTypeEnum;
    (function (ActionTypeEnum) {
        ActionTypeEnum[ActionTypeEnum["ANNOUNCEMENT"] = 'ANNOUNCEMENT'] = "ANNOUNCEMENT";
        ActionTypeEnum[ActionTypeEnum["ENGAGEMENTLETTER"] = 'ENGAGEMENT_LETTER'] = "ENGAGEMENTLETTER";
    })(ActionTypeEnum = Alert.ActionTypeEnum || (Alert.ActionTypeEnum = {}));
    let AlertTypeEnum;
    (function (AlertTypeEnum) {
        AlertTypeEnum[AlertTypeEnum["ERROR"] = 'ERROR'] = "ERROR";
        AlertTypeEnum[AlertTypeEnum["INFO"] = 'INFO'] = "INFO";
        AlertTypeEnum[AlertTypeEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
        AlertTypeEnum[AlertTypeEnum["WARNING"] = 'WARNING'] = "WARNING";
    })(AlertTypeEnum = Alert.AlertTypeEnum || (Alert.AlertTypeEnum = {}));
})(Alert || (Alert = {}));
