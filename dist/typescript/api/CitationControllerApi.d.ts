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
/// <reference types="angular" />
import * as models from '../model/models';
export declare class CitationControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary assignCitationOwner
     * @param citationId citationId
     * @param request request
     */
    assignCitationOwnerUsingPOST(citationId: number, request?: models.AssignCitationOwnerRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary createNewCitation
     * @param request request
     */
    createNewCitationUsingPOST(request: models.CreateCitationRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.CreateCitationResponse>;
    /**
     *
     * @summary createReferralSourceForCitation
     * @param citationId citationId
     * @param request request
     */
    createReferralSourceForCitationUsingPOST(citationId: string, request: models.CreateReferralSourceForCitation, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary deleteCitationCourt
     * @param citationId citationId
     */
    deleteCitationCourtUsingDELETE(citationId: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary deleteCitation
     * @param citationIdString citationIdString
     */
    deleteCitationUsingDELETE(citationIdString: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.DeleteCitationResponse>;
    /**
     *
     * @summary deleteMissingCourtRecord
     * @param citationId citationId
     */
    deleteMissingCourtRecordUsingDELETE(citationId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetListOfCitationsWithMissingCourtResponse>;
    /**
     *
     * @summary dismissCitationsFromContactList
     * @param request request
     */
    dismissCitationsFromContactListUsingPOST(request: models.DismissCitationsFromContactListRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary getAnonymousTicketUploads
     * @param emailAddress emailAddress
     */
    getAnonymousTicketUploadsUsingGET(emailAddress: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetAnonymousTicketUploads>;
    /**
     *
     * @summary getCitation
     * @param citationIdString citationIdString
     */
    getCitationUsingGET(citationIdString: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCitationResponse>;
    /**
     *
     * @summary getListOfCitationsWithMissingCourt
     */
    getListOfCitationsWithMissingCourtUsingGET(extraHttpRequestParams?: any): ng.IHttpPromise<models.GetListOfCitationsWithMissingCourtResponse>;
    /**
     *
     * @summary getNoViolationCitations
     * @param regionCodes regionCodes
     * @param trailingDays trailingDays
     */
    getNoViolationCitationsUsingGET(regionCodes?: string, trailingDays?: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetNoViolationCitationsResponse>;
    /**
     *
     * @summary postMissingCourtForCitation
     * @param citationId citationId
     * @param state state
     */
    postMissingCourtForCitationUsingPOST(citationId: string, state: 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY', extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary setCitationContactListFlag
     * @param citationIdString citationIdString
     * @param isDismissed isDismissed
     */
    setCitationContactListFlagUsingPOST(citationIdString: string, isDismissed: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary setLockForCitation
     * @param citationId citationId
     * @param isLocked isLocked
     */
    setLockForCitationUsingPUT(citationId: number, isLocked: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary signImageUrl
     * @param request request
     */
    signImageUrlUsingPOST(request: models.SignImageUrlRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SignImageUrlResponse>;
    /**
     *
     * @summary toggleDeleteCitation
     * @param citationId citationId
     * @param isDeleteRequest isDeleteRequest
     */
    toggleDeleteCitationUsingDELETE(citationId: number, isDeleteRequest: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<models.DeleteCitationResponse>;
    /**
     *
     * @summary updateCitationAddress
     * @param citationId citationId
     * @param request request
     */
    updateCitationAddressUsingPOST(citationId: string, request: models.UpdateCitationAddressRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary updateCitationPicture
     * @param citationId citationId
     * @param request request
     */
    updateCitationPictureUsingPUT(citationId: string, request: models.UpdateCitationPictureRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary updateCitation
     * @param citationIdString citationIdString
     * @param updateCitationRequest updateCitationRequest
     */
    updateCitationUsingPUT(citationIdString: string, updateCitationRequest: models.UpdateCitationRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
