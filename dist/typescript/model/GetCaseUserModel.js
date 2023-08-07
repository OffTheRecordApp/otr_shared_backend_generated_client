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
exports.GetCaseUserModel = void 0;
var GetCaseUserModel;
(function (GetCaseUserModel) {
    var RelationshipToClientEnum;
    (function (RelationshipToClientEnum) {
        RelationshipToClientEnum[RelationshipToClientEnum["EMPLOYER"] = 'EMPLOYER'] = "EMPLOYER";
        RelationshipToClientEnum[RelationshipToClientEnum["FAMILYMEMBER"] = 'FAMILY_MEMBER'] = "FAMILYMEMBER";
        RelationshipToClientEnum[RelationshipToClientEnum["FRIEND"] = 'FRIEND'] = "FRIEND";
        RelationshipToClientEnum[RelationshipToClientEnum["LAWYER"] = 'LAWYER'] = "LAWYER";
        RelationshipToClientEnum[RelationshipToClientEnum["OTHER"] = 'OTHER'] = "OTHER";
        RelationshipToClientEnum[RelationshipToClientEnum["SELF"] = 'SELF'] = "SELF";
    })(RelationshipToClientEnum = GetCaseUserModel.RelationshipToClientEnum || (GetCaseUserModel.RelationshipToClientEnum = {}));
})(GetCaseUserModel = exports.GetCaseUserModel || (exports.GetCaseUserModel = {}));
