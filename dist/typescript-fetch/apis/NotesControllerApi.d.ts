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
import { CreateNoteRequest, CreateNoteResponse, ListNotesResponse, SaveNotesRequest, SearchNotesResponse, UpdateNoteRequest, UpdateNoteResponse } from '../models';
export interface CreateNoteUsingPOSTRequest {
    request: CreateNoteRequest;
}
export interface DeleteNoteUsingDELETERequest {
    noteId: number;
}
export interface ListNotesUsingGETRequest {
    noteType: ListNotesUsingGETNoteTypeEnum;
    referenceId: string;
    authorUserId?: number;
    includeDeleted?: boolean;
    initialNoteId?: number;
    limit?: number;
    nextPageToken?: string;
    previousPageToken?: string;
}
export interface SaveNotesUsingPOSTRequest {
    userId: number;
    request: SaveNotesRequest;
}
export interface SearchNotesUsingGETRequest {
    noteType: SearchNotesUsingGETNoteTypeEnum;
    query: string;
    referenceId: string;
}
export interface UpdateNoteUsingPUTRequest {
    noteId: number;
    request: UpdateNoteRequest;
}
/**
 *
 */
export declare class NotesControllerApi extends runtime.BaseAPI {
    /**
     * createNote
     */
    createNoteUsingPOSTRaw(requestParameters: CreateNoteUsingPOSTRequest): Promise<runtime.ApiResponse<CreateNoteResponse>>;
    /**
     * createNote
     */
    createNoteUsingPOST(requestParameters: CreateNoteUsingPOSTRequest): Promise<CreateNoteResponse>;
    /**
     * deleteNote
     */
    deleteNoteUsingDELETERaw(requestParameters: DeleteNoteUsingDELETERequest): Promise<runtime.ApiResponse<void>>;
    /**
     * deleteNote
     */
    deleteNoteUsingDELETE(requestParameters: DeleteNoteUsingDELETERequest): Promise<void>;
    /**
     * listNotes
     */
    listNotesUsingGETRaw(requestParameters: ListNotesUsingGETRequest): Promise<runtime.ApiResponse<ListNotesResponse>>;
    /**
     * listNotes
     */
    listNotesUsingGET(requestParameters: ListNotesUsingGETRequest): Promise<ListNotesResponse>;
    /**
     * saveNotes
     */
    saveNotesUsingPOSTRaw(requestParameters: SaveNotesUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * saveNotes
     */
    saveNotesUsingPOST(requestParameters: SaveNotesUsingPOSTRequest): Promise<object>;
    /**
     * searchNotes
     */
    searchNotesUsingGETRaw(requestParameters: SearchNotesUsingGETRequest): Promise<runtime.ApiResponse<SearchNotesResponse>>;
    /**
     * searchNotes
     */
    searchNotesUsingGET(requestParameters: SearchNotesUsingGETRequest): Promise<SearchNotesResponse>;
    /**
     * updateNote
     */
    updateNoteUsingPUTRaw(requestParameters: UpdateNoteUsingPUTRequest): Promise<runtime.ApiResponse<UpdateNoteResponse>>;
    /**
     * updateNote
     */
    updateNoteUsingPUT(requestParameters: UpdateNoteUsingPUTRequest): Promise<UpdateNoteResponse>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ListNotesUsingGETNoteTypeEnum {
    CASE = "CASE",
    LAWFIRM = "LAWFIRM",
    PHONELEAD = "PHONE_LEAD",
    USER = "USER"
}
/**
    * @export
    * @enum {string}
    */
export declare enum SearchNotesUsingGETNoteTypeEnum {
    CASE = "CASE",
    LAWFIRM = "LAWFIRM",
    PHONELEAD = "PHONE_LEAD",
    USER = "USER"
}