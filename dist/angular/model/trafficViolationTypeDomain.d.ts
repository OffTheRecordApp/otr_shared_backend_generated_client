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
import { PenaltyModel } from './penaltyModel';
export interface TrafficViolationTypeDomain {
    insuranceIncreasePercent?: number;
    isMovingViolation?: boolean;
    penalties?: Array<PenaltyModel>;
    trafficViolationDesc?: string;
    trafficViolationTypeId?: number;
    userFriendlyName?: string;
    userFriendlyShortForm?: string;
    violationClassification?: TrafficViolationTypeDomain.ViolationClassificationEnum;
    violationCode?: string;
}
export declare namespace TrafficViolationTypeDomain {
    type ViolationClassificationEnum = 'CLASS_1_FELONY' | 'CLASS_1_MISDEMEANOR' | 'CLASS_2_FELONY' | 'CLASS_2_MISDEMEANOR' | 'CLASS_3_FELONY' | 'CLASS_3_MISDEMEANOR' | 'CLASS_4_FELONY' | 'CLASS_4_MISDEMEANOR' | 'CLASS_5_FELONY' | 'CLASS_6_FELONY' | 'CLASS_A1_MISDEMEANOR' | 'CLASS_A_FELONY' | 'CLASS_A_INFRACTION' | 'CLASS_A_MISDEMEANOR' | 'CLASS_A_VIOLATION' | 'CLASS_B_FELONY' | 'CLASS_B_INFRACTION' | 'CLASS_B_MISDEMEANOR' | 'CLASS_B_VIOLATION' | 'CLASS_C_FELONY' | 'CLASS_C_INFRACTION' | 'CLASS_C_MISDEMEANOR' | 'CLASS_C_VIOLATION' | 'CLASS_D_FELONY' | 'CLASS_D_MISDEMEANOR' | 'CLASS_D_VIOLATION' | 'CLASS_E_FELONY' | 'CLASS_F_FELONY' | 'CLASS_H_FELONY' | 'DISORDERLY_PERSONS_OFFENSE' | 'FELONY' | 'FELONY_1ST_DEGREE' | 'FELONY_2ND_DEGREE' | 'FELONY_3RD_DEGREE' | 'FELONY_4TH_DEGREE' | 'FELONY_5TH_DEGREE' | 'GROSS_MISDEMEANOR' | 'HIGH_AND_AGGRAVATED_MISDEMEANOR' | 'INFRACTION' | 'LEVEL_4_FELONY' | 'LEVEL_5_FELONY' | 'LEVEL_6_FELONY' | 'MINOR_MISDEMEANOR' | 'MISDEMEANOR' | 'MISDEMEANOR_1ST_DEGREE' | 'MISDEMEANOR_2ND_DEGREE' | 'MISDEMEANOR_3RD_DEGREE' | 'MISDEMEANOR_4TH_DEGREE' | 'MISDEMEANOR_WITH_REFUND' | 'NON_MOVING' | 'NON_REPORTABLE' | 'PETTY_MISDEMEANOR' | 'QUASI_CRIMINAL' | 'SUMMARY_OFFENSE' | 'SUMMARY_OFFENSE_NO_REFUND' | 'WOBBLER_TO_FELONY' | 'WOBBLER_TO_MISDEMEANOR';
    const ViolationClassificationEnum: {
        Class1Felony: ViolationClassificationEnum;
        Class1Misdemeanor: ViolationClassificationEnum;
        Class2Felony: ViolationClassificationEnum;
        Class2Misdemeanor: ViolationClassificationEnum;
        Class3Felony: ViolationClassificationEnum;
        Class3Misdemeanor: ViolationClassificationEnum;
        Class4Felony: ViolationClassificationEnum;
        Class4Misdemeanor: ViolationClassificationEnum;
        Class5Felony: ViolationClassificationEnum;
        Class6Felony: ViolationClassificationEnum;
        ClassA1Misdemeanor: ViolationClassificationEnum;
        ClassAFelony: ViolationClassificationEnum;
        ClassAInfraction: ViolationClassificationEnum;
        ClassAMisdemeanor: ViolationClassificationEnum;
        ClassAViolation: ViolationClassificationEnum;
        ClassBFelony: ViolationClassificationEnum;
        ClassBInfraction: ViolationClassificationEnum;
        ClassBMisdemeanor: ViolationClassificationEnum;
        ClassBViolation: ViolationClassificationEnum;
        ClassCFelony: ViolationClassificationEnum;
        ClassCInfraction: ViolationClassificationEnum;
        ClassCMisdemeanor: ViolationClassificationEnum;
        ClassCViolation: ViolationClassificationEnum;
        ClassDFelony: ViolationClassificationEnum;
        ClassDMisdemeanor: ViolationClassificationEnum;
        ClassDViolation: ViolationClassificationEnum;
        ClassEFelony: ViolationClassificationEnum;
        ClassFFelony: ViolationClassificationEnum;
        ClassHFelony: ViolationClassificationEnum;
        DisorderlyPersonsOffense: ViolationClassificationEnum;
        Felony: ViolationClassificationEnum;
        Felony1StDegree: ViolationClassificationEnum;
        Felony2NdDegree: ViolationClassificationEnum;
        Felony3RdDegree: ViolationClassificationEnum;
        Felony4ThDegree: ViolationClassificationEnum;
        Felony5ThDegree: ViolationClassificationEnum;
        GrossMisdemeanor: ViolationClassificationEnum;
        HighAndAggravatedMisdemeanor: ViolationClassificationEnum;
        Infraction: ViolationClassificationEnum;
        Level4Felony: ViolationClassificationEnum;
        Level5Felony: ViolationClassificationEnum;
        Level6Felony: ViolationClassificationEnum;
        MinorMisdemeanor: ViolationClassificationEnum;
        Misdemeanor: ViolationClassificationEnum;
        Misdemeanor1StDegree: ViolationClassificationEnum;
        Misdemeanor2NdDegree: ViolationClassificationEnum;
        Misdemeanor3RdDegree: ViolationClassificationEnum;
        Misdemeanor4ThDegree: ViolationClassificationEnum;
        MisdemeanorWithRefund: ViolationClassificationEnum;
        NonMoving: ViolationClassificationEnum;
        NonReportable: ViolationClassificationEnum;
        PettyMisdemeanor: ViolationClassificationEnum;
        QuasiCriminal: ViolationClassificationEnum;
        SummaryOffense: ViolationClassificationEnum;
        SummaryOffenseNoRefund: ViolationClassificationEnum;
        WobblerToFelony: ViolationClassificationEnum;
        WobblerToMisdemeanor: ViolationClassificationEnum;
    };
}
