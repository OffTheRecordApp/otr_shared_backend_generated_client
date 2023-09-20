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
import { Timestamp } from './timestamp';
import { AuditLog } from './auditLog';


export interface CitationAuditLog { 
    auditLogType?: CitationAuditLog.AuditLogTypeEnum;
    citationId?: number;
    creationDateUTC?: Timestamp;
    isActive?: boolean;
    logTrails?: Array<AuditLog>;
}
export namespace CitationAuditLog {
    export type AuditLogTypeEnum = 'APPLY_REFERRAL_CODE' | 'CREATE_LEGAL_SERVICES' | 'INITIATE_CASE' | 'MATCH_CASE' | 'OTHER' | 'TRANSFER_CASE';
    export const AuditLogTypeEnum = {
        ApplyReferralCode: 'APPLY_REFERRAL_CODE' as AuditLogTypeEnum,
        CreateLegalServices: 'CREATE_LEGAL_SERVICES' as AuditLogTypeEnum,
        InitiateCase: 'INITIATE_CASE' as AuditLogTypeEnum,
        MatchCase: 'MATCH_CASE' as AuditLogTypeEnum,
        Other: 'OTHER' as AuditLogTypeEnum,
        TransferCase: 'TRANSFER_CASE' as AuditLogTypeEnum
    };
}

