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
export var PredictImageClassificationResponse;
(function (PredictImageClassificationResponse) {
    let DocumentTypeEnum;
    (function (DocumentTypeEnum) {
        DocumentTypeEnum[DocumentTypeEnum["CAMERATICKET"] = 'CAMERA_TICKET'] = "CAMERATICKET";
        DocumentTypeEnum[DocumentTypeEnum["CASEDOCKET"] = 'CASE_DOCKET'] = "CASEDOCKET";
        DocumentTypeEnum[DocumentTypeEnum["CASERESOLUTION"] = 'CASE_RESOLUTION'] = "CASERESOLUTION";
        DocumentTypeEnum[DocumentTypeEnum["CHANGEOFCOUNCIL"] = 'CHANGE_OF_COUNCIL'] = "CHANGEOFCOUNCIL";
        DocumentTypeEnum[DocumentTypeEnum["COLLECTIONSNOTICE"] = 'COLLECTIONS_NOTICE'] = "COLLECTIONSNOTICE";
        DocumentTypeEnum[DocumentTypeEnum["COURTNOTICE"] = 'COURT_NOTICE'] = "COURTNOTICE";
        DocumentTypeEnum[DocumentTypeEnum["DRIVERLICENSE"] = 'DRIVER_LICENSE'] = "DRIVERLICENSE";
        DocumentTypeEnum[DocumentTypeEnum["FAILURETOAPPEAR"] = 'FAILURE_TO_APPEAR'] = "FAILURETOAPPEAR";
        DocumentTypeEnum[DocumentTypeEnum["FAILURETOPAY"] = 'FAILURE_TO_PAY'] = "FAILURETOPAY";
        DocumentTypeEnum[DocumentTypeEnum["INSURANCECARD"] = 'INSURANCE_CARD'] = "INSURANCECARD";
        DocumentTypeEnum[DocumentTypeEnum["NOTICEOFAPPEARANCE"] = 'NOTICE_OF_APPEARANCE'] = "NOTICEOFAPPEARANCE";
        DocumentTypeEnum[DocumentTypeEnum["NOTADOCUMENT"] = 'NOT_A_DOCUMENT'] = "NOTADOCUMENT";
        DocumentTypeEnum[DocumentTypeEnum["PARKINGTICKET"] = 'PARKING_TICKET'] = "PARKINGTICKET";
        DocumentTypeEnum[DocumentTypeEnum["POLICEREPORT"] = 'POLICE_REPORT'] = "POLICEREPORT";
        DocumentTypeEnum[DocumentTypeEnum["REMINDERNOTICE"] = 'REMINDER_NOTICE'] = "REMINDERNOTICE";
        DocumentTypeEnum[DocumentTypeEnum["REQUESTFORDISCOVERY"] = 'REQUEST_FOR_DISCOVERY'] = "REQUESTFORDISCOVERY";
        DocumentTypeEnum[DocumentTypeEnum["SCREENSHOTTICKETLIST"] = 'SCREENSHOT_TICKET_LIST'] = "SCREENSHOTTICKETLIST";
        DocumentTypeEnum[DocumentTypeEnum["SCREENSHOTTRAFFICTICKET"] = 'SCREENSHOT_TRAFFIC_TICKET'] = "SCREENSHOTTRAFFICTICKET";
        DocumentTypeEnum[DocumentTypeEnum["SUSPENSIONNOTICE"] = 'SUSPENSION_NOTICE'] = "SUSPENSIONNOTICE";
        DocumentTypeEnum[DocumentTypeEnum["TRAFFICTICKET"] = 'TRAFFIC_TICKET'] = "TRAFFICTICKET";
        DocumentTypeEnum[DocumentTypeEnum["UNRECOGNIZEDDOCUMENT"] = 'UNRECOGNIZED_DOCUMENT'] = "UNRECOGNIZEDDOCUMENT";
        DocumentTypeEnum[DocumentTypeEnum["WARNINGNOTICE"] = 'WARNING_NOTICE'] = "WARNINGNOTICE";
        DocumentTypeEnum[DocumentTypeEnum["WARRANT"] = 'WARRANT'] = "WARRANT";
    })(DocumentTypeEnum = PredictImageClassificationResponse.DocumentTypeEnum || (PredictImageClassificationResponse.DocumentTypeEnum = {}));
})(PredictImageClassificationResponse || (PredictImageClassificationResponse = {}));
