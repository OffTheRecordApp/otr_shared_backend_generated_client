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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccountLevelFeeToSave
 */
export interface AccountLevelFeeToSave {
    /**
     * 
     * @type {string}
     * @memberof AccountLevelFeeToSave
     */
    classification?: AccountLevelFeeToSaveClassificationEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AccountLevelFeeToSave
     */
    isNewLegalFee?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountLevelFeeToSave
     */
    isPermitted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AccountLevelFeeToSave
     */
    lawfirmFee?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountLevelFeeToSave
     */
    refundEligibility?: AccountLevelFeeToSaveRefundEligibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof AccountLevelFeeToSave
     */
    regionCode?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountLevelFeeToSave
     */
    violationId?: number;
}

export function AccountLevelFeeToSaveFromJSON(json: any): AccountLevelFeeToSave {
    return AccountLevelFeeToSaveFromJSONTyped(json, false);
}

export function AccountLevelFeeToSaveFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLevelFeeToSave {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'classification': !exists(json, 'classification') ? undefined : json['classification'],
        'isNewLegalFee': !exists(json, 'isNewLegalFee') ? undefined : json['isNewLegalFee'],
        'isPermitted': !exists(json, 'isPermitted') ? undefined : json['isPermitted'],
        'lawfirmFee': !exists(json, 'lawfirmFee') ? undefined : json['lawfirmFee'],
        'refundEligibility': !exists(json, 'refundEligibility') ? undefined : json['refundEligibility'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'violationId': !exists(json, 'violationId') ? undefined : json['violationId'],
    };
}

export function AccountLevelFeeToSaveToJSON(value?: AccountLevelFeeToSave | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'classification': value.classification,
        'isNewLegalFee': value.isNewLegalFee,
        'isPermitted': value.isPermitted,
        'lawfirmFee': value.lawfirmFee,
        'refundEligibility': value.refundEligibility,
        'regionCode': value.regionCode,
        'violationId': value.violationId,
    };
}

/**
* @export
* @enum {string}
*/
export enum AccountLevelFeeToSaveClassificationEnum {
    CLASS1FELONY = 'CLASS_1_FELONY',
    CLASS1MISDEMEANOR = 'CLASS_1_MISDEMEANOR',
    CLASS2FELONY = 'CLASS_2_FELONY',
    CLASS2MISDEMEANOR = 'CLASS_2_MISDEMEANOR',
    CLASS3FELONY = 'CLASS_3_FELONY',
    CLASS3MISDEMEANOR = 'CLASS_3_MISDEMEANOR',
    CLASS4FELONY = 'CLASS_4_FELONY',
    CLASS4MISDEMEANOR = 'CLASS_4_MISDEMEANOR',
    CLASS5FELONY = 'CLASS_5_FELONY',
    CLASS6FELONY = 'CLASS_6_FELONY',
    CLASSA1MISDEMEANOR = 'CLASS_A1_MISDEMEANOR',
    CLASSAFELONY = 'CLASS_A_FELONY',
    CLASSAINFRACTION = 'CLASS_A_INFRACTION',
    CLASSAMISDEMEANOR = 'CLASS_A_MISDEMEANOR',
    CLASSAVIOLATION = 'CLASS_A_VIOLATION',
    CLASSBFELONY = 'CLASS_B_FELONY',
    CLASSBINFRACTION = 'CLASS_B_INFRACTION',
    CLASSBMISDEMEANOR = 'CLASS_B_MISDEMEANOR',
    CLASSBVIOLATION = 'CLASS_B_VIOLATION',
    CLASSCFELONY = 'CLASS_C_FELONY',
    CLASSCINFRACTION = 'CLASS_C_INFRACTION',
    CLASSCMISDEMEANOR = 'CLASS_C_MISDEMEANOR',
    CLASSCVIOLATION = 'CLASS_C_VIOLATION',
    CLASSDFELONY = 'CLASS_D_FELONY',
    CLASSDMISDEMEANOR = 'CLASS_D_MISDEMEANOR',
    CLASSDVIOLATION = 'CLASS_D_VIOLATION',
    CLASSEFELONY = 'CLASS_E_FELONY',
    CLASSFFELONY = 'CLASS_F_FELONY',
    CLASSHFELONY = 'CLASS_H_FELONY',
    DISORDERLYPERSONSOFFENSE = 'DISORDERLY_PERSONS_OFFENSE',
    FELONY = 'FELONY',
    FELONY1STDEGREE = 'FELONY_1ST_DEGREE',
    FELONY2NDDEGREE = 'FELONY_2ND_DEGREE',
    FELONY3RDDEGREE = 'FELONY_3RD_DEGREE',
    FELONY4THDEGREE = 'FELONY_4TH_DEGREE',
    FELONY5THDEGREE = 'FELONY_5TH_DEGREE',
    GROSSMISDEMEANOR = 'GROSS_MISDEMEANOR',
    HIGHANDAGGRAVATEDMISDEMEANOR = 'HIGH_AND_AGGRAVATED_MISDEMEANOR',
    INFRACTION = 'INFRACTION',
    LEVEL4FELONY = 'LEVEL_4_FELONY',
    LEVEL5FELONY = 'LEVEL_5_FELONY',
    LEVEL6FELONY = 'LEVEL_6_FELONY',
    MINORMISDEMEANOR = 'MINOR_MISDEMEANOR',
    MISDEMEANOR = 'MISDEMEANOR',
    MISDEMEANOR1STDEGREE = 'MISDEMEANOR_1ST_DEGREE',
    MISDEMEANOR2NDDEGREE = 'MISDEMEANOR_2ND_DEGREE',
    MISDEMEANOR3RDDEGREE = 'MISDEMEANOR_3RD_DEGREE',
    MISDEMEANOR4THDEGREE = 'MISDEMEANOR_4TH_DEGREE',
    MISDEMEANORWITHREFUND = 'MISDEMEANOR_WITH_REFUND',
    NONMOVING = 'NON_MOVING',
    NONREPORTABLE = 'NON_REPORTABLE',
    PETTYMISDEMEANOR = 'PETTY_MISDEMEANOR',
    QUASICRIMINAL = 'QUASI_CRIMINAL',
    SUMMARYOFFENSE = 'SUMMARY_OFFENSE',
    SUMMARYOFFENSENOREFUND = 'SUMMARY_OFFENSE_NO_REFUND',
    WOBBLERTOFELONY = 'WOBBLER_TO_FELONY',
    WOBBLERTOMISDEMEANOR = 'WOBBLER_TO_MISDEMEANOR'
}
/**
* @export
* @enum {string}
*/
export enum AccountLevelFeeToSaveRefundEligibilityEnum {
    FULLREFUND = 'FULL_REFUND',
    NOREFUND = 'NO_REFUND'
}


