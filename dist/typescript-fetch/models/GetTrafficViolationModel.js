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
import { PenaltyModelFromJSON, PenaltyModelToJSON, } from './';
export function GetTrafficViolationModelFromJSON(json) {
    return GetTrafficViolationModelFromJSONTyped(json, false);
}
export function GetTrafficViolationModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classDescription': !exists(json, 'classDescription') ? undefined : json['classDescription'],
        'criminal': !exists(json, 'criminal') ? undefined : json['criminal'],
        'enabledForCustomers': !exists(json, 'enabledForCustomers') ? undefined : json['enabledForCustomers'],
        'enabledForLawfirms': !exists(json, 'enabledForLawfirms') ? undefined : json['enabledForLawfirms'],
        'penalties': !exists(json, 'penalties') ? undefined : (json['penalties'].map(PenaltyModelFromJSON)),
        'refundEligibilityType': !exists(json, 'refundEligibilityType') ? undefined : json['refundEligibilityType'],
        'trafficViolationDesc': !exists(json, 'trafficViolationDesc') ? undefined : json['trafficViolationDesc'],
        'trafficViolationTypeId': !exists(json, 'trafficViolationTypeId') ? undefined : json['trafficViolationTypeId'],
        'userFriendlyName': !exists(json, 'userFriendlyName') ? undefined : json['userFriendlyName'],
        'userFriendlyShortForm': !exists(json, 'userFriendlyShortForm') ? undefined : json['userFriendlyShortForm'],
        'violationClassification': !exists(json, 'violationClassification') ? undefined : json['violationClassification'],
        'violationCode': !exists(json, 'violationCode') ? undefined : json['violationCode'],
        'wobblerToCriminal': !exists(json, 'wobblerToCriminal') ? undefined : json['wobblerToCriminal'],
    };
}
export function GetTrafficViolationModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classDescription': value.classDescription,
        'criminal': value.criminal,
        'enabledForCustomers': value.enabledForCustomers,
        'enabledForLawfirms': value.enabledForLawfirms,
        'penalties': value.penalties === undefined ? undefined : (value.penalties.map(PenaltyModelToJSON)),
        'refundEligibilityType': value.refundEligibilityType,
        'trafficViolationDesc': value.trafficViolationDesc,
        'trafficViolationTypeId': value.trafficViolationTypeId,
        'userFriendlyName': value.userFriendlyName,
        'userFriendlyShortForm': value.userFriendlyShortForm,
        'violationClassification': value.violationClassification,
        'violationCode': value.violationCode,
        'wobblerToCriminal': value.wobblerToCriminal,
    };
}
/**
* @export
* @enum {string}
*/
export var GetTrafficViolationModelRefundEligibilityTypeEnum;
(function (GetTrafficViolationModelRefundEligibilityTypeEnum) {
    GetTrafficViolationModelRefundEligibilityTypeEnum["FULLREFUND"] = "FULL_REFUND";
    GetTrafficViolationModelRefundEligibilityTypeEnum["NOREFUND"] = "NO_REFUND";
})(GetTrafficViolationModelRefundEligibilityTypeEnum || (GetTrafficViolationModelRefundEligibilityTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var GetTrafficViolationModelViolationClassificationEnum;
(function (GetTrafficViolationModelViolationClassificationEnum) {
    GetTrafficViolationModelViolationClassificationEnum["CLASS1FELONY"] = "CLASS_1_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASS1MISDEMEANOR"] = "CLASS_1_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["CLASS2FELONY"] = "CLASS_2_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASS2MISDEMEANOR"] = "CLASS_2_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["CLASS3FELONY"] = "CLASS_3_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASS3MISDEMEANOR"] = "CLASS_3_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["CLASS4FELONY"] = "CLASS_4_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASS4MISDEMEANOR"] = "CLASS_4_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["CLASS5FELONY"] = "CLASS_5_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASS6FELONY"] = "CLASS_6_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASSA1MISDEMEANOR"] = "CLASS_A1_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["CLASSAFELONY"] = "CLASS_A_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASSAINFRACTION"] = "CLASS_A_INFRACTION";
    GetTrafficViolationModelViolationClassificationEnum["CLASSAMISDEMEANOR"] = "CLASS_A_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["CLASSAVIOLATION"] = "CLASS_A_VIOLATION";
    GetTrafficViolationModelViolationClassificationEnum["CLASSBFELONY"] = "CLASS_B_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASSBINFRACTION"] = "CLASS_B_INFRACTION";
    GetTrafficViolationModelViolationClassificationEnum["CLASSBMISDEMEANOR"] = "CLASS_B_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["CLASSBVIOLATION"] = "CLASS_B_VIOLATION";
    GetTrafficViolationModelViolationClassificationEnum["CLASSCFELONY"] = "CLASS_C_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASSCINFRACTION"] = "CLASS_C_INFRACTION";
    GetTrafficViolationModelViolationClassificationEnum["CLASSCMISDEMEANOR"] = "CLASS_C_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["CLASSCVIOLATION"] = "CLASS_C_VIOLATION";
    GetTrafficViolationModelViolationClassificationEnum["CLASSDFELONY"] = "CLASS_D_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASSDMISDEMEANOR"] = "CLASS_D_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["CLASSDVIOLATION"] = "CLASS_D_VIOLATION";
    GetTrafficViolationModelViolationClassificationEnum["CLASSEFELONY"] = "CLASS_E_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASSFFELONY"] = "CLASS_F_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["CLASSHFELONY"] = "CLASS_H_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["DISORDERLYPERSONSOFFENSE"] = "DISORDERLY_PERSONS_OFFENSE";
    GetTrafficViolationModelViolationClassificationEnum["FELONY"] = "FELONY";
    GetTrafficViolationModelViolationClassificationEnum["FELONY1STDEGREE"] = "FELONY_1ST_DEGREE";
    GetTrafficViolationModelViolationClassificationEnum["FELONY2NDDEGREE"] = "FELONY_2ND_DEGREE";
    GetTrafficViolationModelViolationClassificationEnum["FELONY3RDDEGREE"] = "FELONY_3RD_DEGREE";
    GetTrafficViolationModelViolationClassificationEnum["FELONY4THDEGREE"] = "FELONY_4TH_DEGREE";
    GetTrafficViolationModelViolationClassificationEnum["FELONY5THDEGREE"] = "FELONY_5TH_DEGREE";
    GetTrafficViolationModelViolationClassificationEnum["GROSSMISDEMEANOR"] = "GROSS_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = "HIGH_AND_AGGRAVATED_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["INFRACTION"] = "INFRACTION";
    GetTrafficViolationModelViolationClassificationEnum["LEVEL4FELONY"] = "LEVEL_4_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["LEVEL5FELONY"] = "LEVEL_5_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["LEVEL6FELONY"] = "LEVEL_6_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["MINORMISDEMEANOR"] = "MINOR_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["MISDEMEANOR"] = "MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["MISDEMEANOR1STDEGREE"] = "MISDEMEANOR_1ST_DEGREE";
    GetTrafficViolationModelViolationClassificationEnum["MISDEMEANOR2NDDEGREE"] = "MISDEMEANOR_2ND_DEGREE";
    GetTrafficViolationModelViolationClassificationEnum["MISDEMEANOR3RDDEGREE"] = "MISDEMEANOR_3RD_DEGREE";
    GetTrafficViolationModelViolationClassificationEnum["MISDEMEANOR4THDEGREE"] = "MISDEMEANOR_4TH_DEGREE";
    GetTrafficViolationModelViolationClassificationEnum["MISDEMEANORWITHREFUND"] = "MISDEMEANOR_WITH_REFUND";
    GetTrafficViolationModelViolationClassificationEnum["NONMOVING"] = "NON_MOVING";
    GetTrafficViolationModelViolationClassificationEnum["NONREPORTABLE"] = "NON_REPORTABLE";
    GetTrafficViolationModelViolationClassificationEnum["PETTYMISDEMEANOR"] = "PETTY_MISDEMEANOR";
    GetTrafficViolationModelViolationClassificationEnum["QUASICRIMINAL"] = "QUASI_CRIMINAL";
    GetTrafficViolationModelViolationClassificationEnum["SUMMARYOFFENSE"] = "SUMMARY_OFFENSE";
    GetTrafficViolationModelViolationClassificationEnum["SUMMARYOFFENSENOREFUND"] = "SUMMARY_OFFENSE_NO_REFUND";
    GetTrafficViolationModelViolationClassificationEnum["WOBBLERTOFELONY"] = "WOBBLER_TO_FELONY";
    GetTrafficViolationModelViolationClassificationEnum["WOBBLERTOMISDEMEANOR"] = "WOBBLER_TO_MISDEMEANOR";
})(GetTrafficViolationModelViolationClassificationEnum || (GetTrafficViolationModelViolationClassificationEnum = {}));
