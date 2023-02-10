"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawfirmRatesResponse = void 0;
var LawfirmRatesResponse;
(function (LawfirmRatesResponse) {
    LawfirmRatesResponse.FeeLevelEnum = {
        AccountClassFee: 'ACCOUNT_CLASS_FEE',
        AccountViolationFee: 'ACCOUNT_VIOLATION_FEE',
        CourtFee: 'COURT_FEE',
        CourtViolationFee: 'COURT_VIOLATION_FEE'
    };
    LawfirmRatesResponse.IneligibleMatchReasonsEnum = {
        DailyCapacityBreached: 'DAILY_CAPACITY_BREACHED',
        OnVacation: 'ON_VACATION',
        OutOfCapacity: 'OUT_OF_CAPACITY',
        OutPriced: 'OUT_PRICED',
        OutRanked: 'OUT_RANKED'
    };
})(LawfirmRatesResponse = exports.LawfirmRatesResponse || (exports.LawfirmRatesResponse = {}));
