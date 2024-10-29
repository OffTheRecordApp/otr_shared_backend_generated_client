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
import { GetBookingsRequestToJSON, GetBookingsResponseFromJSON, GetUserRegistrationsRequestToJSON, GetUserRegistrationsResponseFromJSON, GraphRequestToJSON, ListCaseBookingsRequestToJSON, ListCaseBookingsResponseFromJSON, ListCaseCancellationsRequestToJSON, ListCaseCancellationsResponseFromJSON, ListCitationsRequestToJSON, ListCitationsResponseFromJSON, ListLawfirmsEngagedRequestToJSON, ListLawfirmsEngagedResponseFromJSON, ListPhoneCallsResponseFromJSON, SqlResponseFromJSON, } from '../models';
/**
 *
 */
export class DashboardControllerApi extends runtime.BaseAPI {
    /**
     * getBookings
     */
    getBookingsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getBookingsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/bookings`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetBookingsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetBookingsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getBookings
     */
    getBookingsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBookingsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getUserRegistrations
     */
    getUserRegistrationsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling getUserRegistrationsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/registrations`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GetUserRegistrationsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetUserRegistrationsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getUserRegistrations
     */
    getUserRegistrationsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getUserRegistrationsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listCaseBookings
     */
    listCaseBookingsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling listCaseBookingsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/bookings2`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ListCaseBookingsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListCaseBookingsResponseFromJSON(jsonValue));
        });
    }
    /**
     * listCaseBookings
     */
    listCaseBookingsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listCaseBookingsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listCaseCancellations
     */
    listCaseCancellationsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling listCaseCancellationsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/cancellations`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ListCaseCancellationsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListCaseCancellationsResponseFromJSON(jsonValue));
        });
    }
    /**
     * listCaseCancellations
     */
    listCaseCancellationsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listCaseCancellationsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listCitations
     */
    listCitationsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling listCitationsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/citations`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ListCitationsRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListCitationsResponseFromJSON(jsonValue));
        });
    }
    /**
     * listCitations
     */
    listCitationsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listCitationsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listCustomers
     */
    listCustomersUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.graphRequest === null || requestParameters.graphRequest === undefined) {
                throw new runtime.RequiredError('graphRequest', 'Required parameter requestParameters.graphRequest was null or undefined when calling listCustomersUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/customers`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GraphRequestToJSON(requestParameters.graphRequest),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => SqlResponseFromJSON(jsonValue));
        });
    }
    /**
     * listCustomers
     */
    listCustomersUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listCustomersUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listDropoffs
     */
    listDropoffsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.graphRequest === null || requestParameters.graphRequest === undefined) {
                throw new runtime.RequiredError('graphRequest', 'Required parameter requestParameters.graphRequest was null or undefined when calling listDropoffsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/dropoff`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GraphRequestToJSON(requestParameters.graphRequest),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => SqlResponseFromJSON(jsonValue));
        });
    }
    /**
     * listDropoffs
     */
    listDropoffsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listDropoffsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listExpenses
     */
    listExpensesUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.graphRequest === null || requestParameters.graphRequest === undefined) {
                throw new runtime.RequiredError('graphRequest', 'Required parameter requestParameters.graphRequest was null or undefined when calling listExpensesUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/expenses`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GraphRequestToJSON(requestParameters.graphRequest),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => SqlResponseFromJSON(jsonValue));
        });
    }
    /**
     * listExpenses
     */
    listExpensesUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listExpensesUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listLawfirmsEngaged
     */
    listLawfirmsEngagedUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling listLawfirmsEngagedUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/lawfirm-engagement`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ListLawfirmsEngagedRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListLawfirmsEngagedResponseFromJSON(jsonValue));
        });
    }
    /**
     * listLawfirmsEngaged
     */
    listLawfirmsEngagedUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listLawfirmsEngagedUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listLawyerLeads
     */
    listLawyerLeadsUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.graphRequest === null || requestParameters.graphRequest === undefined) {
                throw new runtime.RequiredError('graphRequest', 'Required parameter requestParameters.graphRequest was null or undefined when calling listLawyerLeadsUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/console/lawyer-leads`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GraphRequestToJSON(requestParameters.graphRequest),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => SqlResponseFromJSON(jsonValue));
        });
    }
    /**
     * listLawyerLeads
     */
    listLawyerLeadsUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listLawyerLeadsUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listPhoneCalls
     */
    listPhoneCallsUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.agentId !== undefined) {
                queryParameters['agentId'] = requestParameters.agentId;
            }
            if (requestParameters.agentName !== undefined) {
                queryParameters['agentName'] = requestParameters.agentName;
            }
            if (requestParameters.callQueueName !== undefined) {
                queryParameters['callQueueName'] = requestParameters.callQueueName;
            }
            if (requestParameters.callStatus !== undefined) {
                queryParameters['callStatus'] = requestParameters.callStatus;
            }
            if (requestParameters.callStatusName !== undefined) {
                queryParameters['callStatusName'] = requestParameters.callStatusName;
            }
            if (requestParameters.customerName !== undefined) {
                queryParameters['customerName'] = requestParameters.customerName;
            }
            if (requestParameters.direction !== undefined) {
                queryParameters['direction'] = requestParameters.direction;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate.toISOString();
            }
            if (requestParameters.ivrName !== undefined) {
                queryParameters['ivrName'] = requestParameters.ivrName;
            }
            if (requestParameters.length !== undefined) {
                queryParameters['length'] = requestParameters.length;
            }
            if (requestParameters.page !== undefined) {
                queryParameters['page'] = requestParameters.page;
            }
            if (requestParameters.phoneNumber !== undefined) {
                queryParameters['phoneNumber'] = requestParameters.phoneNumber;
            }
            if (requestParameters.shouldIncludePhoneCalls !== undefined) {
                queryParameters['shouldIncludePhoneCalls'] = requestParameters.shouldIncludePhoneCalls;
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
            if (requestParameters.teamName !== undefined) {
                queryParameters['teamName'] = requestParameters.teamName;
            }
            if (requestParameters.timeZoneId !== undefined) {
                queryParameters['timeZoneId'] = requestParameters.timeZoneId;
            }
            if (requestParameters.totalCalls !== undefined) {
                queryParameters['totalCalls'] = requestParameters.totalCalls;
            }
            if (requestParameters.totalOtrAccounts !== undefined) {
                queryParameters['totalOtrAccounts'] = requestParameters.totalOtrAccounts;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/console/phone-calls`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListPhoneCallsResponseFromJSON(jsonValue));
        });
    }
    /**
     * listPhoneCalls
     */
    listPhoneCallsUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listPhoneCallsUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
}
/**
    * @export
    * @enum {string}
    */
export var ListPhoneCallsUsingGETCallStatusEnum;
(function (ListPhoneCallsUsingGETCallStatusEnum) {
    ListPhoneCallsUsingGETCallStatusEnum["ABANDONED"] = "ABANDONED";
    ListPhoneCallsUsingGETCallStatusEnum["BLOCKED"] = "BLOCKED";
    ListPhoneCallsUsingGETCallStatusEnum["BUSY"] = "BUSY";
    ListPhoneCallsUsingGETCallStatusEnum["COMPLETED"] = "COMPLETED";
    ListPhoneCallsUsingGETCallStatusEnum["CONNECTING"] = "CONNECTING";
    ListPhoneCallsUsingGETCallStatusEnum["CONNECTIONFAILED"] = "CONNECTION_FAILED";
    ListPhoneCallsUsingGETCallStatusEnum["DEFAULT"] = "DEFAULT";
    ListPhoneCallsUsingGETCallStatusEnum["DISCONNECTED"] = "DISCONNECTED";
    ListPhoneCallsUsingGETCallStatusEnum["ENQUEUED"] = "ENQUEUED";
    ListPhoneCallsUsingGETCallStatusEnum["INPROGRESS"] = "IN_PROGRESS";
    ListPhoneCallsUsingGETCallStatusEnum["MISSEDCALL"] = "MISSED_CALL";
    ListPhoneCallsUsingGETCallStatusEnum["ONHOLD"] = "ON_HOLD";
    ListPhoneCallsUsingGETCallStatusEnum["RECENTLYCOMPLETED"] = "RECENTLY_COMPLETED";
    ListPhoneCallsUsingGETCallStatusEnum["RESTRICTED"] = "RESTRICTED";
    ListPhoneCallsUsingGETCallStatusEnum["VOICEMAIL"] = "VOICEMAIL";
    ListPhoneCallsUsingGETCallStatusEnum["VOICEMAILRECORDINGINPROGRESS"] = "VOICEMAIL_RECORDING_IN_PROGRESS";
})(ListPhoneCallsUsingGETCallStatusEnum || (ListPhoneCallsUsingGETCallStatusEnum = {}));
/**
    * @export
    * @enum {string}
    */
export var ListPhoneCallsUsingGETDirectionEnum;
(function (ListPhoneCallsUsingGETDirectionEnum) {
    ListPhoneCallsUsingGETDirectionEnum["INCOMING"] = "INCOMING";
    ListPhoneCallsUsingGETDirectionEnum["OUTGOING"] = "OUTGOING";
})(ListPhoneCallsUsingGETDirectionEnum || (ListPhoneCallsUsingGETDirectionEnum = {}));
