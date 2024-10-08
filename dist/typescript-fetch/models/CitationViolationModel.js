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
export function CitationViolationModelFromJSON(json) {
    return CitationViolationModelFromJSONTyped(json, false);
}
export function CitationViolationModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classDescription': !exists(json, 'classDescription') ? undefined : json['classDescription'],
        'criminal': !exists(json, 'criminal') ? undefined : json['criminal'],
        'trafficViolationDesc': !exists(json, 'trafficViolationDesc') ? undefined : json['trafficViolationDesc'],
        'trafficViolationTypeId': !exists(json, 'trafficViolationTypeId') ? undefined : json['trafficViolationTypeId'],
        'violationClassification': !exists(json, 'violationClassification') ? undefined : json['violationClassification'],
        'violationCode': !exists(json, 'violationCode') ? undefined : json['violationCode'],
    };
}
export function CitationViolationModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classDescription': value.classDescription,
        'criminal': value.criminal,
        'trafficViolationDesc': value.trafficViolationDesc,
        'trafficViolationTypeId': value.trafficViolationTypeId,
        'violationClassification': value.violationClassification,
        'violationCode': value.violationCode,
    };
}
/**
* @export
* @enum {string}
*/
export var CitationViolationModelViolationClassificationEnum;
(function (CitationViolationModelViolationClassificationEnum) {
    CitationViolationModelViolationClassificationEnum["CLASS1FELONY"] = "CLASS_1_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASS1MISDEMEANOR"] = "CLASS_1_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["CLASS2FELONY"] = "CLASS_2_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASS2MISDEMEANOR"] = "CLASS_2_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["CLASS3FELONY"] = "CLASS_3_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASS3MISDEMEANOR"] = "CLASS_3_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["CLASS4FELONY"] = "CLASS_4_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASS4MISDEMEANOR"] = "CLASS_4_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["CLASS5FELONY"] = "CLASS_5_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASS6FELONY"] = "CLASS_6_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASSA1MISDEMEANOR"] = "CLASS_A1_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["CLASSAFELONY"] = "CLASS_A_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASSAINFRACTION"] = "CLASS_A_INFRACTION";
    CitationViolationModelViolationClassificationEnum["CLASSAMISDEMEANOR"] = "CLASS_A_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["CLASSAVIOLATION"] = "CLASS_A_VIOLATION";
    CitationViolationModelViolationClassificationEnum["CLASSBFELONY"] = "CLASS_B_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASSBINFRACTION"] = "CLASS_B_INFRACTION";
    CitationViolationModelViolationClassificationEnum["CLASSBMISDEMEANOR"] = "CLASS_B_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["CLASSBVIOLATION"] = "CLASS_B_VIOLATION";
    CitationViolationModelViolationClassificationEnum["CLASSCFELONY"] = "CLASS_C_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASSCINFRACTION"] = "CLASS_C_INFRACTION";
    CitationViolationModelViolationClassificationEnum["CLASSCMISDEMEANOR"] = "CLASS_C_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["CLASSCVIOLATION"] = "CLASS_C_VIOLATION";
    CitationViolationModelViolationClassificationEnum["CLASSDFELONY"] = "CLASS_D_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASSDMISDEMEANOR"] = "CLASS_D_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["CLASSDVIOLATION"] = "CLASS_D_VIOLATION";
    CitationViolationModelViolationClassificationEnum["CLASSEFELONY"] = "CLASS_E_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASSFFELONY"] = "CLASS_F_FELONY";
    CitationViolationModelViolationClassificationEnum["CLASSHFELONY"] = "CLASS_H_FELONY";
    CitationViolationModelViolationClassificationEnum["DISORDERLYPERSONSOFFENSE"] = "DISORDERLY_PERSONS_OFFENSE";
    CitationViolationModelViolationClassificationEnum["FELONY"] = "FELONY";
    CitationViolationModelViolationClassificationEnum["FELONY1STDEGREE"] = "FELONY_1ST_DEGREE";
    CitationViolationModelViolationClassificationEnum["FELONY2NDDEGREE"] = "FELONY_2ND_DEGREE";
    CitationViolationModelViolationClassificationEnum["FELONY3RDDEGREE"] = "FELONY_3RD_DEGREE";
    CitationViolationModelViolationClassificationEnum["FELONY4THDEGREE"] = "FELONY_4TH_DEGREE";
    CitationViolationModelViolationClassificationEnum["FELONY5THDEGREE"] = "FELONY_5TH_DEGREE";
    CitationViolationModelViolationClassificationEnum["GROSSMISDEMEANOR"] = "GROSS_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = "HIGH_AND_AGGRAVATED_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["INFRACTION"] = "INFRACTION";
    CitationViolationModelViolationClassificationEnum["LEVEL4FELONY"] = "LEVEL_4_FELONY";
    CitationViolationModelViolationClassificationEnum["LEVEL5FELONY"] = "LEVEL_5_FELONY";
    CitationViolationModelViolationClassificationEnum["LEVEL6FELONY"] = "LEVEL_6_FELONY";
    CitationViolationModelViolationClassificationEnum["MINORMISDEMEANOR"] = "MINOR_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["MISDEMEANOR"] = "MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["MISDEMEANOR1STDEGREE"] = "MISDEMEANOR_1ST_DEGREE";
    CitationViolationModelViolationClassificationEnum["MISDEMEANOR2NDDEGREE"] = "MISDEMEANOR_2ND_DEGREE";
    CitationViolationModelViolationClassificationEnum["MISDEMEANOR3RDDEGREE"] = "MISDEMEANOR_3RD_DEGREE";
    CitationViolationModelViolationClassificationEnum["MISDEMEANOR4THDEGREE"] = "MISDEMEANOR_4TH_DEGREE";
    CitationViolationModelViolationClassificationEnum["MISDEMEANORWITHREFUND"] = "MISDEMEANOR_WITH_REFUND";
    CitationViolationModelViolationClassificationEnum["NONMOVING"] = "NON_MOVING";
    CitationViolationModelViolationClassificationEnum["NONREPORTABLE"] = "NON_REPORTABLE";
    CitationViolationModelViolationClassificationEnum["PETTYMISDEMEANOR"] = "PETTY_MISDEMEANOR";
    CitationViolationModelViolationClassificationEnum["QUASICRIMINAL"] = "QUASI_CRIMINAL";
    CitationViolationModelViolationClassificationEnum["SUMMARYOFFENSE"] = "SUMMARY_OFFENSE";
    CitationViolationModelViolationClassificationEnum["SUMMARYOFFENSENOREFUND"] = "SUMMARY_OFFENSE_NO_REFUND";
    CitationViolationModelViolationClassificationEnum["WOBBLERTOFELONY"] = "WOBBLER_TO_FELONY";
    CitationViolationModelViolationClassificationEnum["WOBBLERTOMISDEMEANOR"] = "WOBBLER_TO_MISDEMEANOR";
})(CitationViolationModelViolationClassificationEnum || (CitationViolationModelViolationClassificationEnum = {}));
