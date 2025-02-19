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
import { AssignCitationOwnerRequestToJSON, CreateCitationRequestToJSON, CreateCitationResponseFromJSON, CreateReferralSourceForCitationToJSON, DeleteCitationResponseFromJSON, DismissCitationsFromContactListRequestToJSON, GetAnonymousTicketUploadsFromJSON, GetCitationResponseFromJSON, GetListOfCitationsWithMissingCourtResponseFromJSON, GetNoViolationCitationsResponseFromJSON, SignImageUrlRequestToJSON, SignImageUrlResponseFromJSON, UpdateCitationAddressRequestToJSON, UpdateCitationPictureRequestToJSON, UpdateCitationRequestToJSON, } from '../models';
/**
 *
 */
export class CitationControllerApi extends runtime.BaseAPI {
    /**
     * assignCitationOwner
     */
    assignCitationOwnerUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationId === null || requestParameters.citationId === undefined) {
                throw new runtime.RequiredError('citationId', 'Required parameter requestParameters.citationId was null or undefined when calling assignCitationOwnerUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/citations/{citationId}/owner`.replace(`{${"citationId"}}`, encodeURIComponent(String(requestParameters.citationId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: AssignCitationOwnerRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * assignCitationOwner
     */
    assignCitationOwnerUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.assignCitationOwnerUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * createNewCitation
     */
    createNewCitationUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling createNewCitationUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/citations`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateCitationRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateCitationResponseFromJSON(jsonValue));
        });
    }
    /**
     * createNewCitation
     */
    createNewCitationUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createNewCitationUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * createReferralSourceForCitation
     */
    createReferralSourceForCitationUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationId === null || requestParameters.citationId === undefined) {
                throw new runtime.RequiredError('citationId', 'Required parameter requestParameters.citationId was null or undefined when calling createReferralSourceForCitationUsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling createReferralSourceForCitationUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/citations/{citationId}/referral-source`.replace(`{${"citationId"}}`, encodeURIComponent(String(requestParameters.citationId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateReferralSourceForCitationToJSON(requestParameters.request),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * createReferralSourceForCitation
     */
    createReferralSourceForCitationUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createReferralSourceForCitationUsingPOSTRaw(requestParameters);
        });
    }
    /**
     * deleteCitationCourt
     */
    deleteCitationCourtUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationId === null || requestParameters.citationId === undefined) {
                throw new runtime.RequiredError('citationId', 'Required parameter requestParameters.citationId was null or undefined when calling deleteCitationCourtUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/{citationId}/court`.replace(`{${"citationId"}}`, encodeURIComponent(String(requestParameters.citationId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * deleteCitationCourt
     */
    deleteCitationCourtUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCitationCourtUsingDELETERaw(requestParameters);
        });
    }
    /**
     * deleteCitation
     */
    deleteCitationUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationIdString === null || requestParameters.citationIdString === undefined) {
                throw new runtime.RequiredError('citationIdString', 'Required parameter requestParameters.citationIdString was null or undefined when calling deleteCitationUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/{citationIdString}`.replace(`{${"citationIdString"}}`, encodeURIComponent(String(requestParameters.citationIdString))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteCitationResponseFromJSON(jsonValue));
        });
    }
    /**
     * deleteCitation
     */
    deleteCitationUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCitationUsingDELETERaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * deleteMissingCourtRecord
     */
    deleteMissingCourtRecordUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationId === null || requestParameters.citationId === undefined) {
                throw new runtime.RequiredError('citationId', 'Required parameter requestParameters.citationId was null or undefined when calling deleteMissingCourtRecordUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/{citationId}/courts/missing`.replace(`{${"citationId"}}`, encodeURIComponent(String(requestParameters.citationId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetListOfCitationsWithMissingCourtResponseFromJSON(jsonValue));
        });
    }
    /**
     * deleteMissingCourtRecord
     */
    deleteMissingCourtRecordUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteMissingCourtRecordUsingDELETERaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * dismissCitationsFromContactList
     */
    dismissCitationsFromContactListUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling dismissCitationsFromContactListUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/citations/dismiss`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: DismissCitationsFromContactListRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * dismissCitationsFromContactList
     */
    dismissCitationsFromContactListUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dismissCitationsFromContactListUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getAnonymousTicketUploads
     */
    getAnonymousTicketUploadsUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.emailAddress === null || requestParameters.emailAddress === undefined) {
                throw new runtime.RequiredError('emailAddress', 'Required parameter requestParameters.emailAddress was null or undefined when calling getAnonymousTicketUploadsUsingGET.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/{emailAddress}/anonymous-tickets`.replace(`{${"emailAddress"}}`, encodeURIComponent(String(requestParameters.emailAddress))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetAnonymousTicketUploadsFromJSON(jsonValue));
        });
    }
    /**
     * getAnonymousTicketUploads
     */
    getAnonymousTicketUploadsUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAnonymousTicketUploadsUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getCitation
     */
    getCitationUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationIdString === null || requestParameters.citationIdString === undefined) {
                throw new runtime.RequiredError('citationIdString', 'Required parameter requestParameters.citationIdString was null or undefined when calling getCitationUsingGET.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/{citationIdString}`.replace(`{${"citationIdString"}}`, encodeURIComponent(String(requestParameters.citationIdString))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCitationResponseFromJSON(jsonValue));
        });
    }
    /**
     * getCitation
     */
    getCitationUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCitationUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getListOfCitationsWithMissingCourt
     */
    getListOfCitationsWithMissingCourtUsingGETRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/courts/missing`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetListOfCitationsWithMissingCourtResponseFromJSON(jsonValue));
        });
    }
    /**
     * getListOfCitationsWithMissingCourt
     */
    getListOfCitationsWithMissingCourtUsingGET() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getListOfCitationsWithMissingCourtUsingGETRaw();
            return yield response.value();
        });
    }
    /**
     * getNoViolationCitations
     */
    getNoViolationCitationsUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.regionCodes !== undefined) {
                queryParameters['regionCodes'] = requestParameters.regionCodes;
            }
            if (requestParameters.trailingDays !== undefined) {
                queryParameters['trailingDays'] = requestParameters.trailingDays;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/no-violation-uploads`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetNoViolationCitationsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getNoViolationCitations
     */
    getNoViolationCitationsUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNoViolationCitationsUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * postMissingCourtForCitation
     */
    postMissingCourtForCitationUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationId === null || requestParameters.citationId === undefined) {
                throw new runtime.RequiredError('citationId', 'Required parameter requestParameters.citationId was null or undefined when calling postMissingCourtForCitationUsingPOST.');
            }
            if (requestParameters.state === null || requestParameters.state === undefined) {
                throw new runtime.RequiredError('state', 'Required parameter requestParameters.state was null or undefined when calling postMissingCourtForCitationUsingPOST.');
            }
            const queryParameters = {};
            if (requestParameters.state !== undefined) {
                queryParameters['state'] = requestParameters.state;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/{citationId}/court/missing`.replace(`{${"citationId"}}`, encodeURIComponent(String(requestParameters.citationId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * postMissingCourtForCitation
     */
    postMissingCourtForCitationUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postMissingCourtForCitationUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * setCitationContactListFlag
     */
    setCitationContactListFlagUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationIdString === null || requestParameters.citationIdString === undefined) {
                throw new runtime.RequiredError('citationIdString', 'Required parameter requestParameters.citationIdString was null or undefined when calling setCitationContactListFlagUsingPOST.');
            }
            if (requestParameters.isDismissed === null || requestParameters.isDismissed === undefined) {
                throw new runtime.RequiredError('isDismissed', 'Required parameter requestParameters.isDismissed was null or undefined when calling setCitationContactListFlagUsingPOST.');
            }
            const queryParameters = {};
            if (requestParameters.isDismissed !== undefined) {
                queryParameters['isDismissed'] = requestParameters.isDismissed;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/{citationIdString}/dismiss`.replace(`{${"citationIdString"}}`, encodeURIComponent(String(requestParameters.citationIdString))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * setCitationContactListFlag
     */
    setCitationContactListFlagUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.setCitationContactListFlagUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * setLockForCitation
     */
    setLockForCitationUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationId === null || requestParameters.citationId === undefined) {
                throw new runtime.RequiredError('citationId', 'Required parameter requestParameters.citationId was null or undefined when calling setLockForCitationUsingPUT.');
            }
            if (requestParameters.isLocked === null || requestParameters.isLocked === undefined) {
                throw new runtime.RequiredError('isLocked', 'Required parameter requestParameters.isLocked was null or undefined when calling setLockForCitationUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/citations/{citationId}/lock-citation/{isLocked}`.replace(`{${"citationId"}}`, encodeURIComponent(String(requestParameters.citationId))).replace(`{${"isLocked"}}`, encodeURIComponent(String(requestParameters.isLocked))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * setLockForCitation
     */
    setLockForCitationUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setLockForCitationUsingPUTRaw(requestParameters);
        });
    }
    /**
     * signImageUrl
     */
    signImageUrlUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling signImageUrlUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/citations/sign-image-url`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SignImageUrlRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => SignImageUrlResponseFromJSON(jsonValue));
        });
    }
    /**
     * signImageUrl
     */
    signImageUrlUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.signImageUrlUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * toggleDeleteCitation
     */
    toggleDeleteCitationUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationId === null || requestParameters.citationId === undefined) {
                throw new runtime.RequiredError('citationId', 'Required parameter requestParameters.citationId was null or undefined when calling toggleDeleteCitationUsingDELETE.');
            }
            if (requestParameters.isDeleteRequest === null || requestParameters.isDeleteRequest === undefined) {
                throw new runtime.RequiredError('isDeleteRequest', 'Required parameter requestParameters.isDeleteRequest was null or undefined when calling toggleDeleteCitationUsingDELETE.');
            }
            const queryParameters = {};
            if (requestParameters.isDeleteRequest !== undefined) {
                queryParameters['isDeleteRequest'] = requestParameters.isDeleteRequest;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v2/citations/{citationId}`.replace(`{${"citationId"}}`, encodeURIComponent(String(requestParameters.citationId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteCitationResponseFromJSON(jsonValue));
        });
    }
    /**
     * toggleDeleteCitation
     */
    toggleDeleteCitationUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.toggleDeleteCitationUsingDELETERaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * updateCitationAddress
     */
    updateCitationAddressUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationId === null || requestParameters.citationId === undefined) {
                throw new runtime.RequiredError('citationId', 'Required parameter requestParameters.citationId was null or undefined when calling updateCitationAddressUsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling updateCitationAddressUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/citations/{citationId}/address`.replace(`{${"citationId"}}`, encodeURIComponent(String(requestParameters.citationId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateCitationAddressRequestToJSON(requestParameters.request),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * updateCitationAddress
     */
    updateCitationAddressUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateCitationAddressUsingPOSTRaw(requestParameters);
        });
    }
    /**
     * updateCitationPicture
     */
    updateCitationPictureUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationId === null || requestParameters.citationId === undefined) {
                throw new runtime.RequiredError('citationId', 'Required parameter requestParameters.citationId was null or undefined when calling updateCitationPictureUsingPUT.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling updateCitationPictureUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/citations/{citationId}/picture`.replace(`{${"citationId"}}`, encodeURIComponent(String(requestParameters.citationId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateCitationPictureRequestToJSON(requestParameters.request),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * updateCitationPicture
     */
    updateCitationPictureUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateCitationPictureUsingPUTRaw(requestParameters);
        });
    }
    /**
     * updateCitation
     */
    updateCitationUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.citationIdString === null || requestParameters.citationIdString === undefined) {
                throw new runtime.RequiredError('citationIdString', 'Required parameter requestParameters.citationIdString was null or undefined when calling updateCitationUsingPUT.');
            }
            if (requestParameters.updateCitationRequest === null || requestParameters.updateCitationRequest === undefined) {
                throw new runtime.RequiredError('updateCitationRequest', 'Required parameter requestParameters.updateCitationRequest was null or undefined when calling updateCitationUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/citations/{citationIdString}`.replace(`{${"citationIdString"}}`, encodeURIComponent(String(requestParameters.citationIdString))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateCitationRequestToJSON(requestParameters.updateCitationRequest),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * updateCitation
     */
    updateCitationUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateCitationUsingPUTRaw(requestParameters);
        });
    }
}
/**
    * @export
    * @enum {string}
    */
export var PostMissingCourtForCitationUsingPOSTStateEnum;
(function (PostMissingCourtForCitationUsingPOSTStateEnum) {
    PostMissingCourtForCitationUsingPOSTStateEnum["AK"] = "AK";
    PostMissingCourtForCitationUsingPOSTStateEnum["AL"] = "AL";
    PostMissingCourtForCitationUsingPOSTStateEnum["AR"] = "AR";
    PostMissingCourtForCitationUsingPOSTStateEnum["AZ"] = "AZ";
    PostMissingCourtForCitationUsingPOSTStateEnum["CA"] = "CA";
    PostMissingCourtForCitationUsingPOSTStateEnum["CO"] = "CO";
    PostMissingCourtForCitationUsingPOSTStateEnum["CT"] = "CT";
    PostMissingCourtForCitationUsingPOSTStateEnum["DC"] = "DC";
    PostMissingCourtForCitationUsingPOSTStateEnum["DE"] = "DE";
    PostMissingCourtForCitationUsingPOSTStateEnum["FL"] = "FL";
    PostMissingCourtForCitationUsingPOSTStateEnum["GA"] = "GA";
    PostMissingCourtForCitationUsingPOSTStateEnum["HI"] = "HI";
    PostMissingCourtForCitationUsingPOSTStateEnum["IA"] = "IA";
    PostMissingCourtForCitationUsingPOSTStateEnum["ID"] = "ID";
    PostMissingCourtForCitationUsingPOSTStateEnum["IL"] = "IL";
    PostMissingCourtForCitationUsingPOSTStateEnum["IN"] = "IN";
    PostMissingCourtForCitationUsingPOSTStateEnum["KS"] = "KS";
    PostMissingCourtForCitationUsingPOSTStateEnum["KY"] = "KY";
    PostMissingCourtForCitationUsingPOSTStateEnum["LA"] = "LA";
    PostMissingCourtForCitationUsingPOSTStateEnum["MA"] = "MA";
    PostMissingCourtForCitationUsingPOSTStateEnum["MD"] = "MD";
    PostMissingCourtForCitationUsingPOSTStateEnum["ME"] = "ME";
    PostMissingCourtForCitationUsingPOSTStateEnum["MI"] = "MI";
    PostMissingCourtForCitationUsingPOSTStateEnum["MN"] = "MN";
    PostMissingCourtForCitationUsingPOSTStateEnum["MO"] = "MO";
    PostMissingCourtForCitationUsingPOSTStateEnum["MS"] = "MS";
    PostMissingCourtForCitationUsingPOSTStateEnum["MT"] = "MT";
    PostMissingCourtForCitationUsingPOSTStateEnum["NC"] = "NC";
    PostMissingCourtForCitationUsingPOSTStateEnum["ND"] = "ND";
    PostMissingCourtForCitationUsingPOSTStateEnum["NE"] = "NE";
    PostMissingCourtForCitationUsingPOSTStateEnum["NH"] = "NH";
    PostMissingCourtForCitationUsingPOSTStateEnum["NJ"] = "NJ";
    PostMissingCourtForCitationUsingPOSTStateEnum["NM"] = "NM";
    PostMissingCourtForCitationUsingPOSTStateEnum["NV"] = "NV";
    PostMissingCourtForCitationUsingPOSTStateEnum["NY"] = "NY";
    PostMissingCourtForCitationUsingPOSTStateEnum["OH"] = "OH";
    PostMissingCourtForCitationUsingPOSTStateEnum["OK"] = "OK";
    PostMissingCourtForCitationUsingPOSTStateEnum["OR"] = "OR";
    PostMissingCourtForCitationUsingPOSTStateEnum["PA"] = "PA";
    PostMissingCourtForCitationUsingPOSTStateEnum["RI"] = "RI";
    PostMissingCourtForCitationUsingPOSTStateEnum["SC"] = "SC";
    PostMissingCourtForCitationUsingPOSTStateEnum["SD"] = "SD";
    PostMissingCourtForCitationUsingPOSTStateEnum["TN"] = "TN";
    PostMissingCourtForCitationUsingPOSTStateEnum["TX"] = "TX";
    PostMissingCourtForCitationUsingPOSTStateEnum["UT"] = "UT";
    PostMissingCourtForCitationUsingPOSTStateEnum["VA"] = "VA";
    PostMissingCourtForCitationUsingPOSTStateEnum["VT"] = "VT";
    PostMissingCourtForCitationUsingPOSTStateEnum["WA"] = "WA";
    PostMissingCourtForCitationUsingPOSTStateEnum["WI"] = "WI";
    PostMissingCourtForCitationUsingPOSTStateEnum["WV"] = "WV";
    PostMissingCourtForCitationUsingPOSTStateEnum["WY"] = "WY";
})(PostMissingCourtForCitationUsingPOSTStateEnum || (PostMissingCourtForCitationUsingPOSTStateEnum = {}));
