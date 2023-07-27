"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var NotesControllerApi = /** @class */ (function () {
    function NotesControllerApi($http, $httpParamSerializer, basePath) {
        this.$http = $http;
        this.$httpParamSerializer = $httpParamSerializer;
        this.basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
        this.defaultHeaders = {};
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * @summary createNote
     * @param request request
     */
    NotesControllerApi.prototype.createNoteUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/notes';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createNoteUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary deleteNote
     * @param noteId noteId
     */
    NotesControllerApi.prototype.deleteNoteUsingDELETE = function (noteId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/notes/{noteId}'
            .replace('{' + 'noteId' + '}', encodeURIComponent(String(noteId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'noteId' is not null or undefined
        if (noteId === null || noteId === undefined) {
            throw new Error('Required parameter noteId was null or undefined when calling deleteNoteUsingDELETE.');
        }
        var httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary listNotes
     * @param noteType noteType
     * @param referenceId referenceId
     * @param authorUserId authorUserId
     * @param includeDeleted includeDeleted
     * @param initialNoteId initialNoteId
     * @param limit limit
     * @param nextPageToken nextPageToken
     * @param previousPageToken previousPageToken
     */
    NotesControllerApi.prototype.listNotesUsingGET = function (noteType, referenceId, authorUserId, includeDeleted, initialNoteId, limit, nextPageToken, previousPageToken, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v2/notes/{noteType}/{referenceId}'
            .replace('{' + 'noteType' + '}', encodeURIComponent(String(noteType)))
            .replace('{' + 'referenceId' + '}', encodeURIComponent(String(referenceId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'noteType' is not null or undefined
        if (noteType === null || noteType === undefined) {
            throw new Error('Required parameter noteType was null or undefined when calling listNotesUsingGET.');
        }
        // verify required parameter 'referenceId' is not null or undefined
        if (referenceId === null || referenceId === undefined) {
            throw new Error('Required parameter referenceId was null or undefined when calling listNotesUsingGET.');
        }
        if (authorUserId !== undefined) {
            queryParameters['authorUserId'] = authorUserId;
        }
        if (includeDeleted !== undefined) {
            queryParameters['includeDeleted'] = includeDeleted;
        }
        if (initialNoteId !== undefined) {
            queryParameters['initialNoteId'] = initialNoteId;
        }
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (nextPageToken !== undefined) {
            queryParameters['nextPageToken'] = nextPageToken;
        }
        if (previousPageToken !== undefined) {
            queryParameters['previousPageToken'] = previousPageToken;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary saveNotes
     * @param userId userId
     * @param request request
     */
    NotesControllerApi.prototype.saveNotesUsingPOST = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v2/notes/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling saveNotesUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveNotesUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary searchNotes
     * @param noteType noteType
     * @param query query
     * @param referenceId referenceId
     */
    NotesControllerApi.prototype.searchNotesUsingGET = function (noteType, query, referenceId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v2/notes/search';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'noteType' is not null or undefined
        if (noteType === null || noteType === undefined) {
            throw new Error('Required parameter noteType was null or undefined when calling searchNotesUsingGET.');
        }
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchNotesUsingGET.');
        }
        // verify required parameter 'referenceId' is not null or undefined
        if (referenceId === null || referenceId === undefined) {
            throw new Error('Required parameter referenceId was null or undefined when calling searchNotesUsingGET.');
        }
        if (noteType !== undefined) {
            queryParameters['noteType'] = noteType;
        }
        if (query !== undefined) {
            queryParameters['query'] = query;
        }
        if (referenceId !== undefined) {
            queryParameters['referenceId'] = referenceId;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary updateNote
     * @param noteId noteId
     * @param request request
     */
    NotesControllerApi.prototype.updateNoteUsingPUT = function (noteId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/notes/{noteId}'
            .replace('{' + 'noteId' + '}', encodeURIComponent(String(noteId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'noteId' is not null or undefined
        if (noteId === null || noteId === undefined) {
            throw new Error('Required parameter noteId was null or undefined when calling updateNoteUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateNoteUsingPUT.');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    NotesControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return NotesControllerApi;
}());
exports.NotesControllerApi = NotesControllerApi;
