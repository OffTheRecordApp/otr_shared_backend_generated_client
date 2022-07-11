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
exports.InviteHouseholdMateRequest = void 0;
var InviteHouseholdMateRequest;
(function (InviteHouseholdMateRequest) {
    var RelationshipTypeEnum;
    (function (RelationshipTypeEnum) {
        RelationshipTypeEnum[RelationshipTypeEnum["SELF"] = 'SELF'] = "SELF";
        RelationshipTypeEnum[RelationshipTypeEnum["SIBLING"] = 'SIBLING'] = "SIBLING";
        RelationshipTypeEnum[RelationshipTypeEnum["SPOUSE"] = 'SPOUSE'] = "SPOUSE";
        RelationshipTypeEnum[RelationshipTypeEnum["TEENAGER"] = 'TEENAGER'] = "TEENAGER";
        RelationshipTypeEnum[RelationshipTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(RelationshipTypeEnum = InviteHouseholdMateRequest.RelationshipTypeEnum || (InviteHouseholdMateRequest.RelationshipTypeEnum = {}));
})(InviteHouseholdMateRequest = exports.InviteHouseholdMateRequest || (exports.InviteHouseholdMateRequest = {}));