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
export function CoverageToRemoveFromJSON(json) {
    return CoverageToRemoveFromJSONTyped(json, false);
}
export function CoverageToRemoveFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classification': !exists(json, 'classification') ? undefined : json['classification'],
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'violationId': !exists(json, 'violationId') ? undefined : json['violationId'],
    };
}
export function CoverageToRemoveToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classification': value.classification,
        'courtId': value.courtId,
        'regionCode': value.regionCode,
        'violationId': value.violationId,
    };
}
/**
* @export
* @enum {string}
*/
export var CoverageToRemoveClassificationEnum;
(function (CoverageToRemoveClassificationEnum) {
    CoverageToRemoveClassificationEnum["CLASS1FELONY"] = "CLASS_1_FELONY";
    CoverageToRemoveClassificationEnum["CLASS1MISDEMEANOR"] = "CLASS_1_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["CLASS2FELONY"] = "CLASS_2_FELONY";
    CoverageToRemoveClassificationEnum["CLASS2MISDEMEANOR"] = "CLASS_2_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["CLASS3FELONY"] = "CLASS_3_FELONY";
    CoverageToRemoveClassificationEnum["CLASS3MISDEMEANOR"] = "CLASS_3_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["CLASS4FELONY"] = "CLASS_4_FELONY";
    CoverageToRemoveClassificationEnum["CLASS4MISDEMEANOR"] = "CLASS_4_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["CLASS5FELONY"] = "CLASS_5_FELONY";
    CoverageToRemoveClassificationEnum["CLASS6FELONY"] = "CLASS_6_FELONY";
    CoverageToRemoveClassificationEnum["CLASSA1MISDEMEANOR"] = "CLASS_A1_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["CLASSAFELONY"] = "CLASS_A_FELONY";
    CoverageToRemoveClassificationEnum["CLASSAINFRACTION"] = "CLASS_A_INFRACTION";
    CoverageToRemoveClassificationEnum["CLASSAMISDEMEANOR"] = "CLASS_A_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["CLASSAVIOLATION"] = "CLASS_A_VIOLATION";
    CoverageToRemoveClassificationEnum["CLASSBFELONY"] = "CLASS_B_FELONY";
    CoverageToRemoveClassificationEnum["CLASSBINFRACTION"] = "CLASS_B_INFRACTION";
    CoverageToRemoveClassificationEnum["CLASSBMISDEMEANOR"] = "CLASS_B_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["CLASSBVIOLATION"] = "CLASS_B_VIOLATION";
    CoverageToRemoveClassificationEnum["CLASSCFELONY"] = "CLASS_C_FELONY";
    CoverageToRemoveClassificationEnum["CLASSCINFRACTION"] = "CLASS_C_INFRACTION";
    CoverageToRemoveClassificationEnum["CLASSCMISDEMEANOR"] = "CLASS_C_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["CLASSCVIOLATION"] = "CLASS_C_VIOLATION";
    CoverageToRemoveClassificationEnum["CLASSDFELONY"] = "CLASS_D_FELONY";
    CoverageToRemoveClassificationEnum["CLASSDMISDEMEANOR"] = "CLASS_D_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["CLASSDVIOLATION"] = "CLASS_D_VIOLATION";
    CoverageToRemoveClassificationEnum["CLASSEFELONY"] = "CLASS_E_FELONY";
    CoverageToRemoveClassificationEnum["CLASSFFELONY"] = "CLASS_F_FELONY";
    CoverageToRemoveClassificationEnum["CLASSHFELONY"] = "CLASS_H_FELONY";
    CoverageToRemoveClassificationEnum["DISORDERLYPERSONSOFFENSE"] = "DISORDERLY_PERSONS_OFFENSE";
    CoverageToRemoveClassificationEnum["FELONY"] = "FELONY";
    CoverageToRemoveClassificationEnum["FELONY1STDEGREE"] = "FELONY_1ST_DEGREE";
    CoverageToRemoveClassificationEnum["FELONY2NDDEGREE"] = "FELONY_2ND_DEGREE";
    CoverageToRemoveClassificationEnum["FELONY3RDDEGREE"] = "FELONY_3RD_DEGREE";
    CoverageToRemoveClassificationEnum["FELONY4THDEGREE"] = "FELONY_4TH_DEGREE";
    CoverageToRemoveClassificationEnum["FELONY5THDEGREE"] = "FELONY_5TH_DEGREE";
    CoverageToRemoveClassificationEnum["GROSSMISDEMEANOR"] = "GROSS_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = "HIGH_AND_AGGRAVATED_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["INFRACTION"] = "INFRACTION";
    CoverageToRemoveClassificationEnum["LEVEL4FELONY"] = "LEVEL_4_FELONY";
    CoverageToRemoveClassificationEnum["LEVEL5FELONY"] = "LEVEL_5_FELONY";
    CoverageToRemoveClassificationEnum["LEVEL6FELONY"] = "LEVEL_6_FELONY";
    CoverageToRemoveClassificationEnum["MINORMISDEMEANOR"] = "MINOR_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["MISDEMEANOR"] = "MISDEMEANOR";
    CoverageToRemoveClassificationEnum["MISDEMEANOR1STDEGREE"] = "MISDEMEANOR_1ST_DEGREE";
    CoverageToRemoveClassificationEnum["MISDEMEANOR2NDDEGREE"] = "MISDEMEANOR_2ND_DEGREE";
    CoverageToRemoveClassificationEnum["MISDEMEANOR3RDDEGREE"] = "MISDEMEANOR_3RD_DEGREE";
    CoverageToRemoveClassificationEnum["MISDEMEANOR4THDEGREE"] = "MISDEMEANOR_4TH_DEGREE";
    CoverageToRemoveClassificationEnum["MISDEMEANORWITHREFUND"] = "MISDEMEANOR_WITH_REFUND";
    CoverageToRemoveClassificationEnum["NONMOVING"] = "NON_MOVING";
    CoverageToRemoveClassificationEnum["NONREPORTABLE"] = "NON_REPORTABLE";
    CoverageToRemoveClassificationEnum["PETTYMISDEMEANOR"] = "PETTY_MISDEMEANOR";
    CoverageToRemoveClassificationEnum["QUASICRIMINAL"] = "QUASI_CRIMINAL";
    CoverageToRemoveClassificationEnum["SUMMARYOFFENSE"] = "SUMMARY_OFFENSE";
    CoverageToRemoveClassificationEnum["SUMMARYOFFENSENOREFUND"] = "SUMMARY_OFFENSE_NO_REFUND";
    CoverageToRemoveClassificationEnum["WOBBLERTOFELONY"] = "WOBBLER_TO_FELONY";
    CoverageToRemoveClassificationEnum["WOBBLERTOMISDEMEANOR"] = "WOBBLER_TO_MISDEMEANOR";
})(CoverageToRemoveClassificationEnum || (CoverageToRemoveClassificationEnum = {}));