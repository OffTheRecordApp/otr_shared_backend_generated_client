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
import * as runtime from '../runtime';
import { CancelBillingSubscriptionResponse, CreateBillingSubscriptionRequest, CreateBillingSubscriptionResponse, ListBillingProductsResponse, ListBillingSubscriptionsResponse, ListSubscriptionInvoicesResponse, SaveBillingProductOptionRequest } from '../models';
export interface CancelBillingSubscriptionUsingDELETERequest {
    id: string;
    userId: string;
    isProrated?: boolean;
}
export interface ClearBillingProductOptionsUsingDELETERequest {
    caseId: string;
}
export interface CreateBillingSubscriptionUsingPOSTRequest {
    userId: number;
    request: CreateBillingSubscriptionRequest;
}
export interface ListBillingProductsUsingGETRequest {
    active?: boolean;
    audience?: string;
    limit?: number;
    userId?: string;
}
export interface ListBillingSubscriptionsUsingGETRequest {
    userId: number;
    includeInactive?: boolean;
}
export interface ListSubscriptionInvoicesUsingGETRequest {
    id: string;
    userId: number;
    limit?: number;
}
export interface SaveBillingProductOptionUsingPOSTRequest {
    caseId: string;
    productId: string;
    request: SaveBillingProductOptionRequest;
}
/**
 *
 */
export declare class RecurringBillingControllerApi extends runtime.BaseAPI {
    /**
     * cancelBillingSubscription
     */
    cancelBillingSubscriptionUsingDELETERaw(requestParameters: CancelBillingSubscriptionUsingDELETERequest): Promise<runtime.ApiResponse<CancelBillingSubscriptionResponse>>;
    /**
     * cancelBillingSubscription
     */
    cancelBillingSubscriptionUsingDELETE(requestParameters: CancelBillingSubscriptionUsingDELETERequest): Promise<CancelBillingSubscriptionResponse>;
    /**
     * clearBillingProductOptions
     */
    clearBillingProductOptionsUsingDELETERaw(requestParameters: ClearBillingProductOptionsUsingDELETERequest): Promise<runtime.ApiResponse<void>>;
    /**
     * clearBillingProductOptions
     */
    clearBillingProductOptionsUsingDELETE(requestParameters: ClearBillingProductOptionsUsingDELETERequest): Promise<void>;
    /**
     * createBillingSubscription
     */
    createBillingSubscriptionUsingPOSTRaw(requestParameters: CreateBillingSubscriptionUsingPOSTRequest): Promise<runtime.ApiResponse<CreateBillingSubscriptionResponse>>;
    /**
     * createBillingSubscription
     */
    createBillingSubscriptionUsingPOST(requestParameters: CreateBillingSubscriptionUsingPOSTRequest): Promise<CreateBillingSubscriptionResponse>;
    /**
     * listBillingProducts
     */
    listBillingProductsUsingGETRaw(requestParameters: ListBillingProductsUsingGETRequest): Promise<runtime.ApiResponse<ListBillingProductsResponse>>;
    /**
     * listBillingProducts
     */
    listBillingProductsUsingGET(requestParameters: ListBillingProductsUsingGETRequest): Promise<ListBillingProductsResponse>;
    /**
     * listBillingSubscriptions
     */
    listBillingSubscriptionsUsingGETRaw(requestParameters: ListBillingSubscriptionsUsingGETRequest): Promise<runtime.ApiResponse<ListBillingSubscriptionsResponse>>;
    /**
     * listBillingSubscriptions
     */
    listBillingSubscriptionsUsingGET(requestParameters: ListBillingSubscriptionsUsingGETRequest): Promise<ListBillingSubscriptionsResponse>;
    /**
     * listSubscriptionInvoices
     */
    listSubscriptionInvoicesUsingGETRaw(requestParameters: ListSubscriptionInvoicesUsingGETRequest): Promise<runtime.ApiResponse<ListSubscriptionInvoicesResponse>>;
    /**
     * listSubscriptionInvoices
     */
    listSubscriptionInvoicesUsingGET(requestParameters: ListSubscriptionInvoicesUsingGETRequest): Promise<ListSubscriptionInvoicesResponse>;
    /**
     * saveBillingProductOption
     */
    saveBillingProductOptionUsingPOSTRaw(requestParameters: SaveBillingProductOptionUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * saveBillingProductOption
     */
    saveBillingProductOptionUsingPOST(requestParameters: SaveBillingProductOptionUsingPOSTRequest): Promise<void>;
}
