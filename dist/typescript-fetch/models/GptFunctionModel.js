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
import { ActionFromJSON, ActionToJSON, ExternalTicketCourtFromJSON, ExternalTicketCourtToJSON, FineInformationFromJSON, FineInformationToJSON, OtherCaseFromJSON, OtherCaseToJSON, } from './';
export function GptFunctionModelFromJSON(json) {
    return GptFunctionModelFromJSONTyped(json, false);
}
export function GptFunctionModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actions': !exists(json, 'actions') ? undefined : (json['actions'].map(ActionFromJSON)),
        'agency': !exists(json, 'agency') ? undefined : json['agency'],
        'arrestDate': !exists(json, 'arrestDate') ? undefined : json['arrestDate'],
        'bail': !exists(json, 'bail') ? undefined : json['bail'],
        'bonds': !exists(json, 'bonds') ? undefined : json['bonds'],
        'caseNumber': !exists(json, 'caseNumber') ? undefined : json['caseNumber'],
        'caseReport': !exists(json, 'caseReport') ? undefined : json['caseReport'],
        'charge': !exists(json, 'charge') ? undefined : json['charge'],
        'chargeDescription': !exists(json, 'chargeDescription') ? undefined : json['chargeDescription'],
        'chargeSeverity': !exists(json, 'chargeSeverity') ? undefined : json['chargeSeverity'],
        'citationFilingDate': !exists(json, 'citationFilingDate') ? undefined : json['citationFilingDate'],
        'citationFilingType': !exists(json, 'citationFilingType') ? undefined : json['citationFilingType'],
        'court': !exists(json, 'court') ? undefined : ExternalTicketCourtFromJSON(json['court']),
        'custodyStatus': !exists(json, 'custodyStatus') ? undefined : json['custodyStatus'],
        'disposition': !exists(json, 'disposition') ? undefined : json['disposition'],
        'docketNumber': !exists(json, 'docketNumber') ? undefined : json['docketNumber'],
        'drNumber': !exists(json, 'drNumber') ? undefined : json['drNumber'],
        'dueDate': !exists(json, 'dueDate') ? undefined : json['dueDate'],
        'fineAndPenalty': !exists(json, 'fineAndPenalty') ? undefined : json['fineAndPenalty'],
        'fineInformation': !exists(json, 'fineInformation') ? undefined : (json['fineInformation'].map(FineInformationFromJSON)),
        'lawEnforcementAgency': !exists(json, 'lawEnforcementAgency') ? undefined : json['lawEnforcementAgency'],
        'lawEnforcementOfficer': !exists(json, 'lawEnforcementOfficer') ? undefined : json['lawEnforcementOfficer'],
        'nextAction': !exists(json, 'nextAction') ? undefined : json['nextAction'],
        'nextCourtDate': !exists(json, 'nextCourtDate') ? undefined : json['nextCourtDate'],
        'ocPayNumber': !exists(json, 'ocPayNumber') ? undefined : json['ocPayNumber'],
        'offenderName': !exists(json, 'offenderName') ? undefined : json['offenderName'],
        'orderedBail': !exists(json, 'orderedBail') ? undefined : json['orderedBail'],
        'otherCases': !exists(json, 'otherCases') ? undefined : (json['otherCases'].map(OtherCaseFromJSON)),
        'pleaDate': !exists(json, 'pleaDate') ? undefined : json['pleaDate'],
        'postedBail': !exists(json, 'postedBail') ? undefined : json['postedBail'],
        'primaryViolationDescription': !exists(json, 'primaryViolationDescription') ? undefined : json['primaryViolationDescription'],
        'probationStatus': !exists(json, 'probationStatus') ? undefined : json['probationStatus'],
        'probationType': !exists(json, 'probationType') ? undefined : json['probationType'],
        'relatedCases': !exists(json, 'relatedCases') ? undefined : json['relatedCases'],
        'restitutionFine': !exists(json, 'restitutionFine') ? undefined : json['restitutionFine'],
        'retainedAttorney': !exists(json, 'retainedAttorney') ? undefined : json['retainedAttorney'],
        'sentenceConvictedDate': !exists(json, 'sentenceConvictedDate') ? undefined : json['sentenceConvictedDate'],
        'sentenceDate': !exists(json, 'sentenceDate') ? undefined : json['sentenceDate'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'ticketId': !exists(json, 'ticketId') ? undefined : json['ticketId'],
        'totalFineAmount': !exists(json, 'totalFineAmount') ? undefined : json['totalFineAmount'],
        'violationDate': !exists(json, 'violationDate') ? undefined : json['violationDate'],
        'violationIds': !exists(json, 'violationIds') ? undefined : json['violationIds'],
        'warrantType': !exists(json, 'warrantType') ? undefined : json['warrantType'],
    };
}
export function GptFunctionModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actions': value.actions === undefined ? undefined : (value.actions.map(ActionToJSON)),
        'agency': value.agency,
        'arrestDate': value.arrestDate,
        'bail': value.bail,
        'bonds': value.bonds,
        'caseNumber': value.caseNumber,
        'caseReport': value.caseReport,
        'charge': value.charge,
        'chargeDescription': value.chargeDescription,
        'chargeSeverity': value.chargeSeverity,
        'citationFilingDate': value.citationFilingDate,
        'citationFilingType': value.citationFilingType,
        'court': ExternalTicketCourtToJSON(value.court),
        'custodyStatus': value.custodyStatus,
        'disposition': value.disposition,
        'docketNumber': value.docketNumber,
        'drNumber': value.drNumber,
        'dueDate': value.dueDate,
        'fineAndPenalty': value.fineAndPenalty,
        'fineInformation': value.fineInformation === undefined ? undefined : (value.fineInformation.map(FineInformationToJSON)),
        'lawEnforcementAgency': value.lawEnforcementAgency,
        'lawEnforcementOfficer': value.lawEnforcementOfficer,
        'nextAction': value.nextAction,
        'nextCourtDate': value.nextCourtDate,
        'ocPayNumber': value.ocPayNumber,
        'offenderName': value.offenderName,
        'orderedBail': value.orderedBail,
        'otherCases': value.otherCases === undefined ? undefined : (value.otherCases.map(OtherCaseToJSON)),
        'pleaDate': value.pleaDate,
        'postedBail': value.postedBail,
        'primaryViolationDescription': value.primaryViolationDescription,
        'probationStatus': value.probationStatus,
        'probationType': value.probationType,
        'relatedCases': value.relatedCases,
        'restitutionFine': value.restitutionFine,
        'retainedAttorney': value.retainedAttorney,
        'sentenceConvictedDate': value.sentenceConvictedDate,
        'sentenceDate': value.sentenceDate,
        'status': value.status,
        'ticketId': value.ticketId,
        'totalFineAmount': value.totalFineAmount,
        'violationDate': value.violationDate,
        'violationIds': value.violationIds,
        'warrantType': value.warrantType,
    };
}
