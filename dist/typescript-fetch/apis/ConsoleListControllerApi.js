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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { FindChargeDisputesResponseFromJSON, FindDisputesRequestToJSON, GenericAdminListRequestToJSON, GetCasesWithCoverageObtainedResponseFromJSON, GetCasesWithMissingLawfirmPayoutsRequestToJSON, GetCasesWithMissingLawfirmPayoutsResponseFromJSON, GetCasesWithOverduePaymentsResponseFromJSON, GetCasesWithUncapturedChargesRequestToJSON, GetCitationPhoneLeadsRequestToJSON, GetCitationPhoneLeadsResponseFromJSON, GetCitationsWithMissingFieldsRequestToJSON, GetCitationsWithMissingFieldsResponseFromJSON, GetClientConfirmedUnpaidCasesResponseFromJSON, GetDeclinedCasesRequestToJSON, GetDeclinedCasesResponseFromJSON, GetInvalidCasesWithStripeChargeResponseFromJSON, GetLawfirmLeadsRequestToJSON, GetLawfirmLeadsResponseFromJSON, GetLostCasesWithTransferNotReversedRequestToJSON, GetLostCasesWithTransferNotReversedResponseFromJSON, GetPendingCasesResponseFromJSON, GetPendingTicketReviewsRequestToJSON, GetPendingTicketReviewsResponseFromJSON, GetPotentialCustomersRequestToJSON, GetPotentialCustomersResponseFromJSON, ListBillingSubscribersResponseFromJSON, } from '../models';
/**
 *
 */
export class ConsoleListControllerApi extends runtime.BaseAPI {
    /**
     * findDisputes
     */
    findDisputesUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling findDisputesUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/disputes`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: FindDisputesRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => FindChargeDisputesResponseFromJSON(jsonValue));
        });
    }
    /**
     * findDisputes
     */
    findDisputesUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.findDisputesUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getCasesWithCoverageObtained
     */
    getCasesWithCoverageObtainedUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getCasesWithCoverageObtainedUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/cases-with-coverage-obtained`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GenericAdminListRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCasesWithCoverageObtainedResponseFromJSON(jsonValue));
        });
    }
    /**
     * getCasesWithCoverageObtained
     */
    getCasesWithCoverageObtainedUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCasesWithCoverageObtainedUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getCasesWithMissingLawfirmPayouts
     */
    getCasesWithMissingLawfirmPayoutsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getCasesWithMissingLawfirmPayoutsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/cases/missing-lawfirm-payouts`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetCasesWithMissingLawfirmPayoutsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCasesWithMissingLawfirmPayoutsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getCasesWithMissingLawfirmPayouts
     */
    getCasesWithMissingLawfirmPayoutsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCasesWithMissingLawfirmPayoutsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getCasesWithOverduePayments
     */
    getCasesWithOverduePaymentsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getCasesWithOverduePaymentsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/cases/unpaid`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetCasesWithUncapturedChargesRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCasesWithOverduePaymentsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getCasesWithOverduePayments
     */
    getCasesWithOverduePaymentsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCasesWithOverduePaymentsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getCitationPhoneLeads
     */
    getCitationPhoneLeadsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getCitationPhoneLeadsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/citation-phone-leads`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetCitationPhoneLeadsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCitationPhoneLeadsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getCitationPhoneLeads
     */
    getCitationPhoneLeadsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCitationPhoneLeadsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getCitationsWithMissingFields
     */
    getCitationsWithMissingFieldsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getCitationsWithMissingFieldsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/citations-with-missing-fields`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetCitationsWithMissingFieldsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCitationsWithMissingFieldsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getCitationsWithMissingFields
     */
    getCitationsWithMissingFieldsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCitationsWithMissingFieldsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getCitationsWithMissingFieldsV2
     */
    getCitationsWithMissingFieldsV2UsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getCitationsWithMissingFieldsV2UsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v2/console/citations-with-missing-fields`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetCitationsWithMissingFieldsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCitationsWithMissingFieldsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getCitationsWithMissingFieldsV2
     */
    getCitationsWithMissingFieldsV2UsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCitationsWithMissingFieldsV2UsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getClientConfirmedUnpaidCases
     */
    getClientConfirmedUnpaidCasesUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getClientConfirmedUnpaidCasesUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/cases/client-confirmed-unpaid`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.request,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetClientConfirmedUnpaidCasesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getClientConfirmedUnpaidCases
     */
    getClientConfirmedUnpaidCasesUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getClientConfirmedUnpaidCasesUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getDeclinedCases
     */
    getDeclinedCasesUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getDeclinedCasesUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/cases/declined`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetDeclinedCasesRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetDeclinedCasesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getDeclinedCases
     */
    getDeclinedCasesUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getDeclinedCasesUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getInvalidCasesWithStripeCharge
     */
    getInvalidCasesWithStripeChargeUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getInvalidCasesWithStripeChargeUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/cases/invalid-with-charge`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.request,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetInvalidCasesWithStripeChargeResponseFromJSON(jsonValue));
        });
    }
    /**
     * getInvalidCasesWithStripeCharge
     */
    getInvalidCasesWithStripeChargeUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getInvalidCasesWithStripeChargeUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getLostCasesWithTransferNotReversed
     */
    getLostCasesWithTransferNotReversedUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getLostCasesWithTransferNotReversedUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/cases/lost/not-reversed`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetLostCasesWithTransferNotReversedRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetLostCasesWithTransferNotReversedResponseFromJSON(jsonValue));
        });
    }
    /**
     * getLostCasesWithTransferNotReversed
     */
    getLostCasesWithTransferNotReversedUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getLostCasesWithTransferNotReversedUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getPendingCases
     */
    getPendingCasesUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.length !== undefined) {
                queryParameters['length'] = requestParameters.length;
            }
            if (requestParameters.page !== undefined) {
                queryParameters['page'] = requestParameters.page;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/cases/pending`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetPendingCasesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getPendingCases
     */
    getPendingCasesUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPendingCasesUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getPendingCases
     */
    getPendingCasesUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getPendingCasesUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/cases/pending`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.request,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetPendingCasesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getPendingCases
     */
    getPendingCasesUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPendingCasesUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getPendingTicketReviews
     */
    getPendingTicketReviewsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getPendingTicketReviewsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/ticket-review-requests/pending`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetPendingTicketReviewsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetPendingTicketReviewsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getPendingTicketReviews
     */
    getPendingTicketReviewsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPendingTicketReviewsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listBillingSubscribers
     */
    listBillingSubscribersUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.billingInterval !== undefined) {
                queryParameters['billingInterval'] = requestParameters.billingInterval;
            }
            if (requestParameters.billingSubscriptionStatus !== undefined) {
                queryParameters['billingSubscriptionStatus'] = requestParameters.billingSubscriptionStatus;
            }
            if (requestParameters.coveredSubscriptionsOnly !== undefined) {
                queryParameters['coveredSubscriptionsOnly'] = requestParameters.coveredSubscriptionsOnly;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate.toISOString();
            }
            if (requestParameters.length !== undefined) {
                queryParameters['length'] = requestParameters.length;
            }
            if (requestParameters.page !== undefined) {
                queryParameters['page'] = requestParameters.page;
            }
            if (requestParameters.planName !== undefined) {
                queryParameters['planName'] = requestParameters.planName;
            }
            if (requestParameters.shouldIncludeSubscribers !== undefined) {
                queryParameters['shouldIncludeSubscribers'] = requestParameters.shouldIncludeSubscribers;
            }
            if (requestParameters.sortBy !== undefined) {
                queryParameters['sortBy'] = requestParameters.sortBy;
            }
            if (requestParameters.sortOrder !== undefined) {
                queryParameters['sortOrder'] = requestParameters.sortOrder;
            }
            if (requestParameters.startDate !== undefined) {
                queryParameters['startDate'] = requestParameters.startDate.toISOString();
            }
            if (requestParameters.subscriberName !== undefined) {
                queryParameters['subscriberName'] = requestParameters.subscriberName;
            }
            if (requestParameters.timeZoneId !== undefined) {
                queryParameters['timeZoneId'] = requestParameters.timeZoneId;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/billing/subscribers`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListBillingSubscribersResponseFromJSON(jsonValue));
        });
    }
    /**
     * listBillingSubscribers
     */
    listBillingSubscribersUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listBillingSubscribersUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listLawfirmLeads
     */
    listLawfirmLeadsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling listLawfirmLeadsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/lawfirms/leads`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetLawfirmLeadsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetLawfirmLeadsResponseFromJSON(jsonValue));
        });
    }
    /**
     * listLawfirmLeads
     */
    listLawfirmLeadsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listLawfirmLeadsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listPotentialCustomers
     */
    listPotentialCustomersUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling listPotentialCustomersUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/potential-customers`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetPotentialCustomersRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetPotentialCustomersResponseFromJSON(jsonValue));
        });
    }
    /**
     * listPotentialCustomers
     */
    listPotentialCustomersUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listPotentialCustomersUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
}
/**
    * @export
    * @enum {string}
    */
export var ListBillingSubscribersUsingGETBillingIntervalEnum;
(function (ListBillingSubscribersUsingGETBillingIntervalEnum) {
    ListBillingSubscribersUsingGETBillingIntervalEnum["DAILY"] = "DAILY";
    ListBillingSubscribersUsingGETBillingIntervalEnum["MONTHLY"] = "MONTHLY";
    ListBillingSubscribersUsingGETBillingIntervalEnum["QUARTERLY"] = "QUARTERLY";
    ListBillingSubscribersUsingGETBillingIntervalEnum["WEEKLY"] = "WEEKLY";
    ListBillingSubscribersUsingGETBillingIntervalEnum["YEARLY"] = "YEARLY";
})(ListBillingSubscribersUsingGETBillingIntervalEnum || (ListBillingSubscribersUsingGETBillingIntervalEnum = {}));
/**
    * @export
    * @enum {string}
    */
export var ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum;
(function (ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum) {
    ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum["ACTIVE"] = "ACTIVE";
    ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum["CANCELED"] = "CANCELED";
    ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum["INCOMPLETE"] = "INCOMPLETE";
    ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum["INCOMPLETEEXPIRED"] = "INCOMPLETE_EXPIRED";
    ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum["INTRIALPERIOD"] = "IN_TRIAL_PERIOD";
    ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum["PASTDUE"] = "PAST_DUE";
    ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum["UNKNOWN"] = "UNKNOWN";
    ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum["UNPAID"] = "UNPAID";
})(ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum || (ListBillingSubscribersUsingGETBillingSubscriptionStatusEnum = {}));
