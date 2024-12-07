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

import { exists, mapValues } from '../runtime';
import {
    NoteAuthor,
    NoteAuthorFromJSON,
    NoteAuthorFromJSONTyped,
    NoteAuthorToJSON,
    TimestampRes,
    TimestampResFromJSON,
    TimestampResFromJSONTyped,
    TimestampResToJSON,
} from './';

/**
 * 
 * @export
 * @interface NoteEntity
 */
export interface NoteEntity {
    /**
     * 
     * @type {NoteAuthor}
     * @memberof NoteEntity
     */
    author?: NoteAuthor;
    /**
     * 
     * @type {TimestampRes}
     * @memberof NoteEntity
     */
    deletedDateUtc?: TimestampRes;
    /**
     * 
     * @type {boolean}
     * @memberof NoteEntity
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NoteEntity
     */
    note?: string;
    /**
     * 
     * @type {number}
     * @memberof NoteEntity
     */
    noteId?: number;
    /**
     * 
     * @type {string}
     * @memberof NoteEntity
     */
    noteType?: NoteEntityNoteTypeEnum;
    /**
     * 
     * @type {TimestampRes}
     * @memberof NoteEntity
     */
    postedDateUtc?: TimestampRes;
    /**
     * 
     * @type {string}
     * @memberof NoteEntity
     */
    referenceId?: string;
}

export function NoteEntityFromJSON(json: any): NoteEntity {
    return NoteEntityFromJSONTyped(json, false);
}

export function NoteEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'author': !exists(json, 'author') ? undefined : NoteAuthorFromJSON(json['author']),
        'deletedDateUtc': !exists(json, 'deletedDateUtc') ? undefined : TimestampResFromJSON(json['deletedDateUtc']),
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'noteId': !exists(json, 'noteId') ? undefined : json['noteId'],
        'noteType': !exists(json, 'noteType') ? undefined : json['noteType'],
        'postedDateUtc': !exists(json, 'postedDateUtc') ? undefined : TimestampResFromJSON(json['postedDateUtc']),
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
    };
}

export function NoteEntityToJSON(value?: NoteEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author': NoteAuthorToJSON(value.author),
        'deletedDateUtc': TimestampResToJSON(value.deletedDateUtc),
        'isDeleted': value.isDeleted,
        'note': value.note,
        'noteId': value.noteId,
        'noteType': value.noteType,
        'postedDateUtc': TimestampResToJSON(value.postedDateUtc),
        'referenceId': value.referenceId,
    };
}

/**
* @export
* @enum {string}
*/
export enum NoteEntityNoteTypeEnum {
    CASE = 'CASE',
    LAWFIRM = 'LAWFIRM',
    PHONELEAD = 'PHONE_LEAD',
    USER = 'USER'
}


