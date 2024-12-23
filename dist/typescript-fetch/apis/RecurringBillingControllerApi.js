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
import { CancelBillingSubscriptionResponseFromJSON, CreateBillingSubscriptionRequestToJSON, CreateBillingSubscriptionResponseFromJSON, ListBillingProductsResponseFromJSON, ListBillingSubscriptionsResponseFromJSON, ListSubscriptionInvoicesResponseFromJSON, } from '../models';
/**
 *
 */
export class RecurringBillingControllerApi extends runtime.BaseAPI {
    /**
     * cancelBillingSubscription
     */
    cancelBillingSubscriptionUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling cancelBillingSubscriptionUsingDELETE.');
            }
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling cancelBillingSubscriptionUsingDELETE.');
            }
            const queryParameters = {};
            if (requestParameters.isProrated !== undefined) {
                queryParameters['isProrated'] = requestParameters.isProrated;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/billing/{userId}/subscriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => CancelBillingSubscriptionResponseFromJSON(jsonValue));
        });
    }
    /**
     * cancelBillingSubscription
     */
    cancelBillingSubscriptionUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.cancelBillingSubscriptionUsingDELETERaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * createBillingSubscription
     */
    createBillingSubscriptionUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling createBillingSubscriptionUsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling createBillingSubscriptionUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/billing/{userId}/subscriptions`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateBillingSubscriptionRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateBillingSubscriptionResponseFromJSON(jsonValue));
        });
    }
    /**
     * createBillingSubscription
     */
    createBillingSubscriptionUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createBillingSubscriptionUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listBillingProducts
     */
    listBillingProductsUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.active !== undefined) {
                queryParameters['active'] = requestParameters.active;
            }
            if (requestParameters.audience !== undefined) {
                queryParameters['audience'] = requestParameters.audience;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/billing/products`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListBillingProductsResponseFromJSON(jsonValue));
        });
    }
    /**
     * listBillingProducts
     */
    listBillingProductsUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listBillingProductsUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listBillingSubscriptions
     */
    listBillingSubscriptionsUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling listBillingSubscriptionsUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.includeInactive !== undefined) {
                queryParameters['includeInactive'] = requestParameters.includeInactive;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/billing/{userId}/subscriptions`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListBillingSubscriptionsResponseFromJSON(jsonValue));
        });
    }
    /**
     * listBillingSubscriptions
     */
    listBillingSubscriptionsUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listBillingSubscriptionsUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listSubscriptionInvoices
     */
    listSubscriptionInvoicesUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling listSubscriptionInvoicesUsingGET.');
            }
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling listSubscriptionInvoicesUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/billing/{userId}/subscriptions/{id}/invoices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListSubscriptionInvoicesResponseFromJSON(jsonValue));
        });
    }
    /**
     * listSubscriptionInvoices
     */
    listSubscriptionInvoicesUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listSubscriptionInvoicesUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
}
