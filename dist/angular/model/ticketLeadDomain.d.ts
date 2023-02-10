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
import { NoteDomain } from './noteDomain';
import { CountryRegion } from './countryRegion';
import { TimestampRes } from './timestampRes';
export interface TicketLeadDomain {
    caseId?: string;
    citationCreationDateUtc?: TimestampRes;
    citationId?: number;
    classification?: TicketLeadDomain.ClassificationEnum;
    courtName?: string;
    notes?: Array<NoteDomain>;
    region?: CountryRegion;
    ticketImageUrl?: string;
}
export declare namespace TicketLeadDomain {
    type ClassificationEnum = 'CLASS_1_FELONY' | 'CLASS_1_MISDEMEANOR' | 'CLASS_2_FELONY' | 'CLASS_2_MISDEMEANOR' | 'CLASS_3_FELONY' | 'CLASS_3_MISDEMEANOR' | 'CLASS_4_FELONY' | 'CLASS_4_MISDEMEANOR' | 'CLASS_5_FELONY' | 'CLASS_6_FELONY' | 'CLASS_A1_MISDEMEANOR' | 'CLASS_A_FELONY' | 'CLASS_A_INFRACTION' | 'CLASS_A_MISDEMEANOR' | 'CLASS_A_VIOLATION' | 'CLASS_B_FELONY' | 'CLASS_B_INFRACTION' | 'CLASS_B_MISDEMEANOR' | 'CLASS_B_VIOLATION' | 'CLASS_C_FELONY' | 'CLASS_C_INFRACTION' | 'CLASS_C_MISDEMEANOR' | 'CLASS_C_VIOLATION' | 'CLASS_D_FELONY' | 'CLASS_D_MISDEMEANOR' | 'CLASS_D_VIOLATION' | 'CLASS_E_FELONY' | 'CLASS_F_FELONY' | 'CLASS_H_FELONY' | 'DISORDERLY_PERSONS_OFFENSE' | 'FELONY' | 'FELONY_1ST_DEGREE' | 'FELONY_2ND_DEGREE' | 'FELONY_3RD_DEGREE' | 'FELONY_4TH_DEGREE' | 'FELONY_5TH_DEGREE' | 'GROSS_MISDEMEANOR' | 'HIGH_AND_AGGRAVATED_MISDEMEANOR' | 'INFRACTION' | 'LEVEL_4_FELONY' | 'LEVEL_5_FELONY' | 'LEVEL_6_FELONY' | 'MINOR_MISDEMEANOR' | 'MISDEMEANOR' | 'MISDEMEANOR_1ST_DEGREE' | 'MISDEMEANOR_2ND_DEGREE' | 'MISDEMEANOR_3RD_DEGREE' | 'MISDEMEANOR_4TH_DEGREE' | 'MISDEMEANOR_WITH_REFUND' | 'NON_MOVING' | 'NON_REPORTABLE' | 'PETTY_MISDEMEANOR' | 'QUASI_CRIMINAL' | 'SUMMARY_OFFENSE' | 'SUMMARY_OFFENSE_NO_REFUND' | 'WOBBLER_TO_FELONY' | 'WOBBLER_TO_MISDEMEANOR';
    const ClassificationEnum: {
        Class1Felony: ClassificationEnum;
        Class1Misdemeanor: ClassificationEnum;
        Class2Felony: ClassificationEnum;
        Class2Misdemeanor: ClassificationEnum;
        Class3Felony: ClassificationEnum;
        Class3Misdemeanor: ClassificationEnum;
        Class4Felony: ClassificationEnum;
        Class4Misdemeanor: ClassificationEnum;
        Class5Felony: ClassificationEnum;
        Class6Felony: ClassificationEnum;
        ClassA1Misdemeanor: ClassificationEnum;
        ClassAFelony: ClassificationEnum;
        ClassAInfraction: ClassificationEnum;
        ClassAMisdemeanor: ClassificationEnum;
        ClassAViolation: ClassificationEnum;
        ClassBFelony: ClassificationEnum;
        ClassBInfraction: ClassificationEnum;
        ClassBMisdemeanor: ClassificationEnum;
        ClassBViolation: ClassificationEnum;
        ClassCFelony: ClassificationEnum;
        ClassCInfraction: ClassificationEnum;
        ClassCMisdemeanor: ClassificationEnum;
        ClassCViolation: ClassificationEnum;
        ClassDFelony: ClassificationEnum;
        ClassDMisdemeanor: ClassificationEnum;
        ClassDViolation: ClassificationEnum;
        ClassEFelony: ClassificationEnum;
        ClassFFelony: ClassificationEnum;
        ClassHFelony: ClassificationEnum;
        DisorderlyPersonsOffense: ClassificationEnum;
        Felony: ClassificationEnum;
        Felony1StDegree: ClassificationEnum;
        Felony2NdDegree: ClassificationEnum;
        Felony3RdDegree: ClassificationEnum;
        Felony4ThDegree: ClassificationEnum;
        Felony5ThDegree: ClassificationEnum;
        GrossMisdemeanor: ClassificationEnum;
        HighAndAggravatedMisdemeanor: ClassificationEnum;
        Infraction: ClassificationEnum;
        Level4Felony: ClassificationEnum;
        Level5Felony: ClassificationEnum;
        Level6Felony: ClassificationEnum;
        MinorMisdemeanor: ClassificationEnum;
        Misdemeanor: ClassificationEnum;
        Misdemeanor1StDegree: ClassificationEnum;
        Misdemeanor2NdDegree: ClassificationEnum;
        Misdemeanor3RdDegree: ClassificationEnum;
        Misdemeanor4ThDegree: ClassificationEnum;
        MisdemeanorWithRefund: ClassificationEnum;
        NonMoving: ClassificationEnum;
        NonReportable: ClassificationEnum;
        PettyMisdemeanor: ClassificationEnum;
        QuasiCriminal: ClassificationEnum;
        SummaryOffense: ClassificationEnum;
        SummaryOffenseNoRefund: ClassificationEnum;
        WobblerToFelony: ClassificationEnum;
        WobblerToMisdemeanor: ClassificationEnum;
    };
}
