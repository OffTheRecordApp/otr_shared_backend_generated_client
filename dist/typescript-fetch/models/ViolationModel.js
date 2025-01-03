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
import { ViolationPenaltyModelFromJSON, ViolationPenaltyModelToJSON, } from './';
export function ViolationModelFromJSON(json) {
    return ViolationModelFromJSONTyped(json, false);
}
export function ViolationModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classDescription': !exists(json, 'classDescription') ? undefined : json['classDescription'],
        'insuranceIncreasePercent': !exists(json, 'insuranceIncreasePercent') ? undefined : json['insuranceIncreasePercent'],
        'isCriminal': !exists(json, 'isCriminal') ? undefined : json['isCriminal'],
        'isMovingViolation': !exists(json, 'isMovingViolation') ? undefined : json['isMovingViolation'],
        'isWobblerToCriminal': !exists(json, 'isWobblerToCriminal') ? undefined : json['isWobblerToCriminal'],
        'penalties': !exists(json, 'penalties') ? undefined : (json['penalties'].map(ViolationPenaltyModelFromJSON)),
        'trafficViolationDesc': !exists(json, 'trafficViolationDesc') ? undefined : json['trafficViolationDesc'],
        'trafficViolationTypeId': !exists(json, 'trafficViolationTypeId') ? undefined : json['trafficViolationTypeId'],
        'userFriendlyName': !exists(json, 'userFriendlyName') ? undefined : json['userFriendlyName'],
        'userFriendlyShortForm': !exists(json, 'userFriendlyShortForm') ? undefined : json['userFriendlyShortForm'],
        'violationClassification': !exists(json, 'violationClassification') ? undefined : json['violationClassification'],
        'violationCode': !exists(json, 'violationCode') ? undefined : json['violationCode'],
    };
}
export function ViolationModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classDescription': value.classDescription,
        'insuranceIncreasePercent': value.insuranceIncreasePercent,
        'isCriminal': value.isCriminal,
        'isMovingViolation': value.isMovingViolation,
        'isWobblerToCriminal': value.isWobblerToCriminal,
        'penalties': value.penalties === undefined ? undefined : (value.penalties.map(ViolationPenaltyModelToJSON)),
        'trafficViolationDesc': value.trafficViolationDesc,
        'trafficViolationTypeId': value.trafficViolationTypeId,
        'userFriendlyName': value.userFriendlyName,
        'userFriendlyShortForm': value.userFriendlyShortForm,
        'violationClassification': value.violationClassification,
        'violationCode': value.violationCode,
    };
}
/**
* @export
* @enum {string}
*/
export var ViolationModelViolationClassificationEnum;
(function (ViolationModelViolationClassificationEnum) {
    ViolationModelViolationClassificationEnum["CLASS1FELONY"] = "CLASS_1_FELONY";
    ViolationModelViolationClassificationEnum["CLASS1MISDEMEANOR"] = "CLASS_1_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["CLASS2FELONY"] = "CLASS_2_FELONY";
    ViolationModelViolationClassificationEnum["CLASS2MISDEMEANOR"] = "CLASS_2_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["CLASS3FELONY"] = "CLASS_3_FELONY";
    ViolationModelViolationClassificationEnum["CLASS3MISDEMEANOR"] = "CLASS_3_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["CLASS4FELONY"] = "CLASS_4_FELONY";
    ViolationModelViolationClassificationEnum["CLASS4MISDEMEANOR"] = "CLASS_4_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["CLASS5FELONY"] = "CLASS_5_FELONY";
    ViolationModelViolationClassificationEnum["CLASS6FELONY"] = "CLASS_6_FELONY";
    ViolationModelViolationClassificationEnum["CLASSA1MISDEMEANOR"] = "CLASS_A1_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["CLASSAFELONY"] = "CLASS_A_FELONY";
    ViolationModelViolationClassificationEnum["CLASSAINFRACTION"] = "CLASS_A_INFRACTION";
    ViolationModelViolationClassificationEnum["CLASSAMISDEMEANOR"] = "CLASS_A_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["CLASSAVIOLATION"] = "CLASS_A_VIOLATION";
    ViolationModelViolationClassificationEnum["CLASSBFELONY"] = "CLASS_B_FELONY";
    ViolationModelViolationClassificationEnum["CLASSBINFRACTION"] = "CLASS_B_INFRACTION";
    ViolationModelViolationClassificationEnum["CLASSBMISDEMEANOR"] = "CLASS_B_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["CLASSBVIOLATION"] = "CLASS_B_VIOLATION";
    ViolationModelViolationClassificationEnum["CLASSCFELONY"] = "CLASS_C_FELONY";
    ViolationModelViolationClassificationEnum["CLASSCINFRACTION"] = "CLASS_C_INFRACTION";
    ViolationModelViolationClassificationEnum["CLASSCMISDEMEANOR"] = "CLASS_C_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["CLASSCVIOLATION"] = "CLASS_C_VIOLATION";
    ViolationModelViolationClassificationEnum["CLASSDFELONY"] = "CLASS_D_FELONY";
    ViolationModelViolationClassificationEnum["CLASSDMISDEMEANOR"] = "CLASS_D_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["CLASSDVIOLATION"] = "CLASS_D_VIOLATION";
    ViolationModelViolationClassificationEnum["CLASSEFELONY"] = "CLASS_E_FELONY";
    ViolationModelViolationClassificationEnum["CLASSFFELONY"] = "CLASS_F_FELONY";
    ViolationModelViolationClassificationEnum["CLASSHFELONY"] = "CLASS_H_FELONY";
    ViolationModelViolationClassificationEnum["DISORDERLYPERSONSOFFENSE"] = "DISORDERLY_PERSONS_OFFENSE";
    ViolationModelViolationClassificationEnum["FELONY"] = "FELONY";
    ViolationModelViolationClassificationEnum["FELONY1STDEGREE"] = "FELONY_1ST_DEGREE";
    ViolationModelViolationClassificationEnum["FELONY2NDDEGREE"] = "FELONY_2ND_DEGREE";
    ViolationModelViolationClassificationEnum["FELONY3RDDEGREE"] = "FELONY_3RD_DEGREE";
    ViolationModelViolationClassificationEnum["FELONY4THDEGREE"] = "FELONY_4TH_DEGREE";
    ViolationModelViolationClassificationEnum["FELONY5THDEGREE"] = "FELONY_5TH_DEGREE";
    ViolationModelViolationClassificationEnum["GROSSMISDEMEANOR"] = "GROSS_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = "HIGH_AND_AGGRAVATED_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["INFRACTION"] = "INFRACTION";
    ViolationModelViolationClassificationEnum["LEVEL4FELONY"] = "LEVEL_4_FELONY";
    ViolationModelViolationClassificationEnum["LEVEL5FELONY"] = "LEVEL_5_FELONY";
    ViolationModelViolationClassificationEnum["LEVEL6FELONY"] = "LEVEL_6_FELONY";
    ViolationModelViolationClassificationEnum["MINORMISDEMEANOR"] = "MINOR_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["MISDEMEANOR"] = "MISDEMEANOR";
    ViolationModelViolationClassificationEnum["MISDEMEANOR1STDEGREE"] = "MISDEMEANOR_1ST_DEGREE";
    ViolationModelViolationClassificationEnum["MISDEMEANOR2NDDEGREE"] = "MISDEMEANOR_2ND_DEGREE";
    ViolationModelViolationClassificationEnum["MISDEMEANOR3RDDEGREE"] = "MISDEMEANOR_3RD_DEGREE";
    ViolationModelViolationClassificationEnum["MISDEMEANOR4THDEGREE"] = "MISDEMEANOR_4TH_DEGREE";
    ViolationModelViolationClassificationEnum["MISDEMEANORWITHREFUND"] = "MISDEMEANOR_WITH_REFUND";
    ViolationModelViolationClassificationEnum["NONMOVING"] = "NON_MOVING";
    ViolationModelViolationClassificationEnum["NONREPORTABLE"] = "NON_REPORTABLE";
    ViolationModelViolationClassificationEnum["PETTYMISDEMEANOR"] = "PETTY_MISDEMEANOR";
    ViolationModelViolationClassificationEnum["QUASICRIMINAL"] = "QUASI_CRIMINAL";
    ViolationModelViolationClassificationEnum["SUMMARYOFFENSE"] = "SUMMARY_OFFENSE";
    ViolationModelViolationClassificationEnum["SUMMARYOFFENSENOREFUND"] = "SUMMARY_OFFENSE_NO_REFUND";
    ViolationModelViolationClassificationEnum["WOBBLERTOFELONY"] = "WOBBLER_TO_FELONY";
    ViolationModelViolationClassificationEnum["WOBBLERTOMISDEMEANOR"] = "WOBBLER_TO_MISDEMEANOR";
})(ViolationModelViolationClassificationEnum || (ViolationModelViolationClassificationEnum = {}));
