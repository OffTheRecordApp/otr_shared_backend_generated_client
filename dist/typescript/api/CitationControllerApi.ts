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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class CitationControllerApi {
    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary assignCitationOwner
     * @param citationId citationId
     * @param request request
     */
    public assignCitationOwnerUsingPOST (citationId: number, request?: models.AssignCitationOwnerRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/owner'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling assignCitationOwnerUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary createNewCitation
     * @param request request
     */
    public createNewCitationUsingPOST (request: models.CreateCitationRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CreateCitationResponse> {
        const localVarPath = this.basePath + '/api/v1/citations';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createNewCitationUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary createReferralSourceForCitation
     * @param citationId citationId
     * @param request request
     */
    public createReferralSourceForCitationUsingPOST (citationId: string, request: models.CreateReferralSourceForCitation, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/referral-source'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling createReferralSourceForCitationUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createReferralSourceForCitationUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary deleteCitationCourt
     * @param citationId citationId
     */
    public deleteCitationCourtUsingDELETE (citationId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/court'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling deleteCitationCourtUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary deleteCitation
     * @param citationIdString citationIdString
     */
    public deleteCitationUsingDELETE (citationIdString: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.DeleteCitationResponse> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationIdString}'
            .replace('{' + 'citationIdString' + '}', encodeURIComponent(String(citationIdString)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationIdString' is not null or undefined
        if (citationIdString === null || citationIdString === undefined) {
            throw new Error('Required parameter citationIdString was null or undefined when calling deleteCitationUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary deleteMissingCourtRecord
     * @param citationId citationId
     */
    public deleteMissingCourtRecordUsingDELETE (citationId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetListOfCitationsWithMissingCourtResponse> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/courts/missing'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling deleteMissingCourtRecordUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary dismissCitationsFromContactList
     * @param request request
     */
    public dismissCitationsFromContactListUsingPOST (request: models.DismissCitationsFromContactListRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/citations/dismiss';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling dismissCitationsFromContactListUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getAnonymousTicketUploads
     * @param emailAddress emailAddress
     */
    public getAnonymousTicketUploadsUsingGET (emailAddress: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetAnonymousTicketUploads> {
        const localVarPath = this.basePath + '/api/v1/citations/{emailAddress}/anonymous-tickets'
            .replace('{' + 'emailAddress' + '}', encodeURIComponent(String(emailAddress)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'emailAddress' is not null or undefined
        if (emailAddress === null || emailAddress === undefined) {
            throw new Error('Required parameter emailAddress was null or undefined when calling getAnonymousTicketUploadsUsingGET.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getCitation
     * @param citationIdString citationIdString
     */
    public getCitationUsingGET (citationIdString: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCitationResponse> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationIdString}'
            .replace('{' + 'citationIdString' + '}', encodeURIComponent(String(citationIdString)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationIdString' is not null or undefined
        if (citationIdString === null || citationIdString === undefined) {
            throw new Error('Required parameter citationIdString was null or undefined when calling getCitationUsingGET.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getListOfCitationsWithMissingCourt
     */
    public getListOfCitationsWithMissingCourtUsingGET (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetListOfCitationsWithMissingCourtResponse> {
        const localVarPath = this.basePath + '/api/v1/citations/courts/missing';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getNoViolationCitations
     * @param regionCodes regionCodes
     * @param trailingDays trailingDays
     */
    public getNoViolationCitationsUsingGET (regionCodes?: string, trailingDays?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetNoViolationCitationsResponse> {
        const localVarPath = this.basePath + '/api/v1/citations/no-violation-uploads';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (regionCodes !== undefined) {
            queryParameters['regionCodes'] = regionCodes;
        }

        if (trailingDays !== undefined) {
            queryParameters['trailingDays'] = trailingDays;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary postMissingCourtForCitation
     * @param citationId citationId
     * @param state state
     */
    public postMissingCourtForCitationUsingPOST (citationId: string, state: 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY', extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/court/missing'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling postMissingCourtForCitationUsingPOST.');
        }

        // verify required parameter 'state' is not null or undefined
        if (state === null || state === undefined) {
            throw new Error('Required parameter state was null or undefined when calling postMissingCourtForCitationUsingPOST.');
        }

        if (state !== undefined) {
            queryParameters['state'] = state;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary setCitationContactListFlag
     * @param citationIdString citationIdString
     * @param isDismissed isDismissed
     */
    public setCitationContactListFlagUsingPOST (citationIdString: string, isDismissed: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationIdString}/dismiss'
            .replace('{' + 'citationIdString' + '}', encodeURIComponent(String(citationIdString)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationIdString' is not null or undefined
        if (citationIdString === null || citationIdString === undefined) {
            throw new Error('Required parameter citationIdString was null or undefined when calling setCitationContactListFlagUsingPOST.');
        }

        // verify required parameter 'isDismissed' is not null or undefined
        if (isDismissed === null || isDismissed === undefined) {
            throw new Error('Required parameter isDismissed was null or undefined when calling setCitationContactListFlagUsingPOST.');
        }

        if (isDismissed !== undefined) {
            queryParameters['isDismissed'] = isDismissed;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary setLockForCitation
     * @param citationId citationId
     * @param isLocked isLocked
     */
    public setLockForCitationUsingPUT (citationId: number, isLocked: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/lock-citation/{isLocked}'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)))
            .replace('{' + 'isLocked' + '}', encodeURIComponent(String(isLocked)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling setLockForCitationUsingPUT.');
        }

        // verify required parameter 'isLocked' is not null or undefined
        if (isLocked === null || isLocked === undefined) {
            throw new Error('Required parameter isLocked was null or undefined when calling setLockForCitationUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary toggleDeleteCitation
     * @param citationId citationId
     * @param isDeleteRequest isDeleteRequest
     */
    public toggleDeleteCitationUsingDELETE (citationId: number, isDeleteRequest: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.DeleteCitationResponse> {
        const localVarPath = this.basePath + '/api/v2/citations/{citationId}'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling toggleDeleteCitationUsingDELETE.');
        }

        // verify required parameter 'isDeleteRequest' is not null or undefined
        if (isDeleteRequest === null || isDeleteRequest === undefined) {
            throw new Error('Required parameter isDeleteRequest was null or undefined when calling toggleDeleteCitationUsingDELETE.');
        }

        if (isDeleteRequest !== undefined) {
            queryParameters['isDeleteRequest'] = isDeleteRequest;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary updateCitationAddress
     * @param citationId citationId
     * @param request request
     */
    public updateCitationAddressUsingPOST (citationId: string, request: models.UpdateCitationAddressRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/address'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling updateCitationAddressUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCitationAddressUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary updateCitationPicture
     * @param citationId citationId
     * @param request request
     */
    public updateCitationPictureUsingPUT (citationId: string, request: models.UpdateCitationPictureRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/picture'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling updateCitationPictureUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCitationPictureUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary updateCitation
     * @param citationIdString citationIdString
     * @param updateCitationRequest updateCitationRequest
     */
    public updateCitationUsingPUT (citationIdString: string, updateCitationRequest: models.UpdateCitationRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationIdString}'
            .replace('{' + 'citationIdString' + '}', encodeURIComponent(String(citationIdString)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationIdString' is not null or undefined
        if (citationIdString === null || citationIdString === undefined) {
            throw new Error('Required parameter citationIdString was null or undefined when calling updateCitationUsingPUT.');
        }

        // verify required parameter 'updateCitationRequest' is not null or undefined
        if (updateCitationRequest === null || updateCitationRequest === undefined) {
            throw new Error('Required parameter updateCitationRequest was null or undefined when calling updateCitationUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: updateCitationRequest,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
