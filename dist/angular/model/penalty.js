"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Penalty = void 0;
var Penalty;
(function (Penalty) {
    Penalty.PenaltyTypeEnum = {
        DemeritPoints: 'DEMERIT_POINTS',
        IncarcerationMaxDays: 'INCARCERATION_MAX_DAYS',
        IncarcerationMinDays: 'INCARCERATION_MIN_DAYS',
        InsurancePoints: 'INSURANCE_POINTS',
        InsuranceRateIncrease: 'INSURANCE_RATE_INCREASE',
        LicenseRevocationMaxDays: 'LICENSE_REVOCATION_MAX_DAYS',
        LicenseRevocationMinDays: 'LICENSE_REVOCATION_MIN_DAYS',
        LicenseSuspensionMaxDays: 'LICENSE_SUSPENSION_MAX_DAYS',
        LicenseSuspensionMinDays: 'LICENSE_SUSPENSION_MIN_DAYS',
        MandatoryCourtAppearance: 'MANDATORY_COURT_APPEARANCE',
        MandatoryCourtAppearanceWithAttorney: 'MANDATORY_COURT_APPEARANCE_WITH_ATTORNEY',
        MaxBailAmount: 'MAX_BAIL_AMOUNT',
        MinBailAmount: 'MIN_BAIL_AMOUNT',
        ProbationInDays: 'PROBATION_IN_DAYS',
        TotalBailAmount: 'TOTAL_BAIL_AMOUNT'
    };
})(Penalty = exports.Penalty || (exports.Penalty = {}));
