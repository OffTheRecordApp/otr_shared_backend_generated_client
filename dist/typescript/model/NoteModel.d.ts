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
import * as models from './models';
export interface NoteModel {
    "author"?: models.NoteAuthor;
    "deletedDateUtc"?: models.Timestamp;
    "isDeleted"?: boolean;
    "note"?: string;
    "noteId"?: number;
    "noteType"?: NoteModel.NoteTypeEnum;
    "postedDateUtc"?: models.Timestamp;
    "referenceId"?: string;
}
export declare namespace NoteModel {
    enum NoteTypeEnum {
        CASE,
        LAWFIRM,
        PHONELEAD,
        USER
    }
}
