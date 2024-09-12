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
import { AddReferralRequest, GetReferralsHistoryResponse, ListReferralsResponse, PublishReferralContactsResponse, PublishReferralRequest } from '../models';
export interface AddReferralUsingPOSTRequest {
    request: AddReferralRequest;
}
export interface ListReferralsUsingGETRequest {
    userId: number;
}
export interface PublishReferralContactsUsingPOSTRequest {
    request: PublishReferralRequest;
}
/**
 *
 */
export declare class ReferralControllerApi extends runtime.BaseAPI {
    /**
     * addReferral
     */
    addReferralUsingPOSTRaw(requestParameters: AddReferralUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * addReferral
     */
    addReferralUsingPOST(requestParameters: AddReferralUsingPOSTRequest): Promise<void>;
    /**
     * getReferralHistory
     */
    getReferralHistoryUsingGETRaw(): Promise<runtime.ApiResponse<GetReferralsHistoryResponse>>;
    /**
     * getReferralHistory
     */
    getReferralHistoryUsingGET(): Promise<GetReferralsHistoryResponse>;
    /**
     * listReferrals
     */
    listReferralsUsingGETRaw(requestParameters: ListReferralsUsingGETRequest): Promise<runtime.ApiResponse<ListReferralsResponse>>;
    /**
     * listReferrals
     */
    listReferralsUsingGET(requestParameters: ListReferralsUsingGETRequest): Promise<ListReferralsResponse>;
    /**
     * publishReferralContacts
     */
    publishReferralContactsUsingPOSTRaw(requestParameters: PublishReferralContactsUsingPOSTRequest): Promise<runtime.ApiResponse<PublishReferralContactsResponse>>;
    /**
     * publishReferralContacts
     */
    publishReferralContactsUsingPOST(requestParameters: PublishReferralContactsUsingPOSTRequest): Promise<PublishReferralContactsResponse>;
}