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
import { NoteAuthor } from './noteAuthor';
import { Timestamp } from './timestamp';


export interface NoteModel { 
    author?: NoteAuthor;
    deletedDateUtc?: Timestamp;
    isDeleted?: boolean;
    note?: string;
    noteId?: number;
    noteType?: NoteModel.NoteTypeEnum;
    postedDateUtc?: Timestamp;
    referenceId?: string;
}
export namespace NoteModel {
    export type NoteTypeEnum = 'CASE' | 'LAWFIRM' | 'PHONE_LEAD' | 'USER';
    export const NoteTypeEnum = {
        Case: 'CASE' as NoteTypeEnum,
        Lawfirm: 'LAWFIRM' as NoteTypeEnum,
        PhoneLead: 'PHONE_LEAD' as NoteTypeEnum,
        User: 'USER' as NoteTypeEnum
    };
}


