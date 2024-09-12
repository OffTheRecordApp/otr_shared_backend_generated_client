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
export function AddViolationRequestFromJSON(json) {
    return AddViolationRequestFromJSONTyped(json, false);
}
export function AddViolationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'stateAbbreviation': !exists(json, 'stateAbbreviation') ? undefined : json['stateAbbreviation'],
        'userFriendlyName': !exists(json, 'userFriendlyName') ? undefined : json['userFriendlyName'],
        'userFriendlyShortForm': !exists(json, 'userFriendlyShortForm') ? undefined : json['userFriendlyShortForm'],
        'violationClassification': !exists(json, 'violationClassification') ? undefined : json['violationClassification'],
        'violationCode': !exists(json, 'violationCode') ? undefined : json['violationCode'],
        'violationDescription': !exists(json, 'violationDescription') ? undefined : json['violationDescription'],
    };
}
export function AddViolationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'stateAbbreviation': value.stateAbbreviation,
        'userFriendlyName': value.userFriendlyName,
        'userFriendlyShortForm': value.userFriendlyShortForm,
        'violationClassification': value.violationClassification,
        'violationCode': value.violationCode,
        'violationDescription': value.violationDescription,
    };
}
/**
* @export
* @enum {string}
*/
export var AddViolationRequestViolationClassificationEnum;
(function (AddViolationRequestViolationClassificationEnum) {
    AddViolationRequestViolationClassificationEnum["CLASS1FELONY"] = "CLASS_1_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASS1MISDEMEANOR"] = "CLASS_1_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["CLASS2FELONY"] = "CLASS_2_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASS2MISDEMEANOR"] = "CLASS_2_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["CLASS3FELONY"] = "CLASS_3_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASS3MISDEMEANOR"] = "CLASS_3_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["CLASS4FELONY"] = "CLASS_4_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASS4MISDEMEANOR"] = "CLASS_4_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["CLASS5FELONY"] = "CLASS_5_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASS6FELONY"] = "CLASS_6_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASSA1MISDEMEANOR"] = "CLASS_A1_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["CLASSAFELONY"] = "CLASS_A_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASSAINFRACTION"] = "CLASS_A_INFRACTION";
    AddViolationRequestViolationClassificationEnum["CLASSAMISDEMEANOR"] = "CLASS_A_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["CLASSAVIOLATION"] = "CLASS_A_VIOLATION";
    AddViolationRequestViolationClassificationEnum["CLASSBFELONY"] = "CLASS_B_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASSBINFRACTION"] = "CLASS_B_INFRACTION";
    AddViolationRequestViolationClassificationEnum["CLASSBMISDEMEANOR"] = "CLASS_B_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["CLASSBVIOLATION"] = "CLASS_B_VIOLATION";
    AddViolationRequestViolationClassificationEnum["CLASSCFELONY"] = "CLASS_C_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASSCINFRACTION"] = "CLASS_C_INFRACTION";
    AddViolationRequestViolationClassificationEnum["CLASSCMISDEMEANOR"] = "CLASS_C_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["CLASSCVIOLATION"] = "CLASS_C_VIOLATION";
    AddViolationRequestViolationClassificationEnum["CLASSDFELONY"] = "CLASS_D_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASSDMISDEMEANOR"] = "CLASS_D_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["CLASSDVIOLATION"] = "CLASS_D_VIOLATION";
    AddViolationRequestViolationClassificationEnum["CLASSEFELONY"] = "CLASS_E_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASSFFELONY"] = "CLASS_F_FELONY";
    AddViolationRequestViolationClassificationEnum["CLASSHFELONY"] = "CLASS_H_FELONY";
    AddViolationRequestViolationClassificationEnum["DISORDERLYPERSONSOFFENSE"] = "DISORDERLY_PERSONS_OFFENSE";
    AddViolationRequestViolationClassificationEnum["FELONY"] = "FELONY";
    AddViolationRequestViolationClassificationEnum["FELONY1STDEGREE"] = "FELONY_1ST_DEGREE";
    AddViolationRequestViolationClassificationEnum["FELONY2NDDEGREE"] = "FELONY_2ND_DEGREE";
    AddViolationRequestViolationClassificationEnum["FELONY3RDDEGREE"] = "FELONY_3RD_DEGREE";
    AddViolationRequestViolationClassificationEnum["FELONY4THDEGREE"] = "FELONY_4TH_DEGREE";
    AddViolationRequestViolationClassificationEnum["FELONY5THDEGREE"] = "FELONY_5TH_DEGREE";
    AddViolationRequestViolationClassificationEnum["GROSSMISDEMEANOR"] = "GROSS_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = "HIGH_AND_AGGRAVATED_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["INFRACTION"] = "INFRACTION";
    AddViolationRequestViolationClassificationEnum["LEVEL4FELONY"] = "LEVEL_4_FELONY";
    AddViolationRequestViolationClassificationEnum["LEVEL5FELONY"] = "LEVEL_5_FELONY";
    AddViolationRequestViolationClassificationEnum["LEVEL6FELONY"] = "LEVEL_6_FELONY";
    AddViolationRequestViolationClassificationEnum["MINORMISDEMEANOR"] = "MINOR_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["MISDEMEANOR"] = "MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["MISDEMEANOR1STDEGREE"] = "MISDEMEANOR_1ST_DEGREE";
    AddViolationRequestViolationClassificationEnum["MISDEMEANOR2NDDEGREE"] = "MISDEMEANOR_2ND_DEGREE";
    AddViolationRequestViolationClassificationEnum["MISDEMEANOR3RDDEGREE"] = "MISDEMEANOR_3RD_DEGREE";
    AddViolationRequestViolationClassificationEnum["MISDEMEANOR4THDEGREE"] = "MISDEMEANOR_4TH_DEGREE";
    AddViolationRequestViolationClassificationEnum["MISDEMEANORWITHREFUND"] = "MISDEMEANOR_WITH_REFUND";
    AddViolationRequestViolationClassificationEnum["NONMOVING"] = "NON_MOVING";
    AddViolationRequestViolationClassificationEnum["NONREPORTABLE"] = "NON_REPORTABLE";
    AddViolationRequestViolationClassificationEnum["PETTYMISDEMEANOR"] = "PETTY_MISDEMEANOR";
    AddViolationRequestViolationClassificationEnum["QUASICRIMINAL"] = "QUASI_CRIMINAL";
    AddViolationRequestViolationClassificationEnum["SUMMARYOFFENSE"] = "SUMMARY_OFFENSE";
    AddViolationRequestViolationClassificationEnum["SUMMARYOFFENSENOREFUND"] = "SUMMARY_OFFENSE_NO_REFUND";
    AddViolationRequestViolationClassificationEnum["WOBBLERTOFELONY"] = "WOBBLER_TO_FELONY";
    AddViolationRequestViolationClassificationEnum["WOBBLERTOMISDEMEANOR"] = "WOBBLER_TO_MISDEMEANOR";
})(AddViolationRequestViolationClassificationEnum || (AddViolationRequestViolationClassificationEnum = {}));