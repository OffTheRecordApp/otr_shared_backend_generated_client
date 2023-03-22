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
exports.NoteEntity = void 0;
var NoteEntity;
(function (NoteEntity) {
    var NoteTypeEnum;
    (function (NoteTypeEnum) {
        NoteTypeEnum[NoteTypeEnum["CASE"] = 'CASE'] = "CASE";
        NoteTypeEnum[NoteTypeEnum["LAWFIRM"] = 'LAWFIRM'] = "LAWFIRM";
        NoteTypeEnum[NoteTypeEnum["PHONELEAD"] = 'PHONE_LEAD'] = "PHONELEAD";
        NoteTypeEnum[NoteTypeEnum["USER"] = 'USER'] = "USER";
    })(NoteTypeEnum = NoteEntity.NoteTypeEnum || (NoteEntity.NoteTypeEnum = {}));
})(NoteEntity = exports.NoteEntity || (exports.NoteEntity = {}));