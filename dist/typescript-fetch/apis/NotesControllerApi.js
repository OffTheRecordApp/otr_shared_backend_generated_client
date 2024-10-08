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
import { CreateNoteRequestToJSON, CreateNoteResponseFromJSON, ListNotesResponseFromJSON, SaveNotesRequestToJSON, SearchNotesResponseFromJSON, UpdateNoteRequestToJSON, UpdateNoteResponseFromJSON, } from '../models';
/**
 *
 */
export class NotesControllerApi extends runtime.BaseAPI {
    /**
     * createNote
     */
    createNoteUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling createNoteUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/notes`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateNoteRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateNoteResponseFromJSON(jsonValue));
        });
    }
    /**
     * createNote
     */
    createNoteUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createNoteUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * deleteNote
     */
    deleteNoteUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.noteId === null || requestParameters.noteId === undefined) {
                throw new runtime.RequiredError('noteId', 'Required parameter requestParameters.noteId was null or undefined when calling deleteNoteUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/notes/{noteId}`.replace(`{${"noteId"}}`, encodeURIComponent(String(requestParameters.noteId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * deleteNote
     */
    deleteNoteUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteNoteUsingDELETERaw(requestParameters);
        });
    }
    /**
     * listNotes
     */
    listNotesUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.noteType === null || requestParameters.noteType === undefined) {
                throw new runtime.RequiredError('noteType', 'Required parameter requestParameters.noteType was null or undefined when calling listNotesUsingGET.');
            }
            if (requestParameters.referenceId === null || requestParameters.referenceId === undefined) {
                throw new runtime.RequiredError('referenceId', 'Required parameter requestParameters.referenceId was null or undefined when calling listNotesUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.authorUserId !== undefined) {
                queryParameters['authorUserId'] = requestParameters.authorUserId;
            }
            if (requestParameters.includeDeleted !== undefined) {
                queryParameters['includeDeleted'] = requestParameters.includeDeleted;
            }
            if (requestParameters.initialNoteId !== undefined) {
                queryParameters['initialNoteId'] = requestParameters.initialNoteId;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.nextPageToken !== undefined) {
                queryParameters['nextPageToken'] = requestParameters.nextPageToken;
            }
            if (requestParameters.previousPageToken !== undefined) {
                queryParameters['previousPageToken'] = requestParameters.previousPageToken;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v2/notes/{noteType}/{referenceId}`.replace(`{${"noteType"}}`, encodeURIComponent(String(requestParameters.noteType))).replace(`{${"referenceId"}}`, encodeURIComponent(String(requestParameters.referenceId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListNotesResponseFromJSON(jsonValue));
        });
    }
    /**
     * listNotes
     */
    listNotesUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listNotesUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * saveNotes
     */
    saveNotesUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling saveNotesUsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling saveNotesUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v2/notes/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SaveNotesRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * saveNotes
     */
    saveNotesUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.saveNotesUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * searchNotes
     */
    searchNotesUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.noteType === null || requestParameters.noteType === undefined) {
                throw new runtime.RequiredError('noteType', 'Required parameter requestParameters.noteType was null or undefined when calling searchNotesUsingGET.');
            }
            if (requestParameters.query === null || requestParameters.query === undefined) {
                throw new runtime.RequiredError('query', 'Required parameter requestParameters.query was null or undefined when calling searchNotesUsingGET.');
            }
            if (requestParameters.referenceId === null || requestParameters.referenceId === undefined) {
                throw new runtime.RequiredError('referenceId', 'Required parameter requestParameters.referenceId was null or undefined when calling searchNotesUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.noteType !== undefined) {
                queryParameters['noteType'] = requestParameters.noteType;
            }
            if (requestParameters.query !== undefined) {
                queryParameters['query'] = requestParameters.query;
            }
            if (requestParameters.referenceId !== undefined) {
                queryParameters['referenceId'] = requestParameters.referenceId;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v2/notes/search`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => SearchNotesResponseFromJSON(jsonValue));
        });
    }
    /**
     * searchNotes
     */
    searchNotesUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchNotesUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * updateNote
     */
    updateNoteUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.noteId === null || requestParameters.noteId === undefined) {
                throw new runtime.RequiredError('noteId', 'Required parameter requestParameters.noteId was null or undefined when calling updateNoteUsingPUT.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling updateNoteUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/notes/{noteId}`.replace(`{${"noteId"}}`, encodeURIComponent(String(requestParameters.noteId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateNoteRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateNoteResponseFromJSON(jsonValue));
        });
    }
    /**
     * updateNote
     */
    updateNoteUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateNoteUsingPUTRaw(requestParameters);
            return yield response.value();
        });
    }
}
/**
    * @export
    * @enum {string}
    */
export var ListNotesUsingGETNoteTypeEnum;
(function (ListNotesUsingGETNoteTypeEnum) {
    ListNotesUsingGETNoteTypeEnum["CASE"] = "CASE";
    ListNotesUsingGETNoteTypeEnum["LAWFIRM"] = "LAWFIRM";
    ListNotesUsingGETNoteTypeEnum["PHONELEAD"] = "PHONE_LEAD";
    ListNotesUsingGETNoteTypeEnum["USER"] = "USER";
})(ListNotesUsingGETNoteTypeEnum || (ListNotesUsingGETNoteTypeEnum = {}));
/**
    * @export
    * @enum {string}
    */
export var SearchNotesUsingGETNoteTypeEnum;
(function (SearchNotesUsingGETNoteTypeEnum) {
    SearchNotesUsingGETNoteTypeEnum["CASE"] = "CASE";
    SearchNotesUsingGETNoteTypeEnum["LAWFIRM"] = "LAWFIRM";
    SearchNotesUsingGETNoteTypeEnum["PHONELEAD"] = "PHONE_LEAD";
    SearchNotesUsingGETNoteTypeEnum["USER"] = "USER";
})(SearchNotesUsingGETNoteTypeEnum || (SearchNotesUsingGETNoteTypeEnum = {}));
