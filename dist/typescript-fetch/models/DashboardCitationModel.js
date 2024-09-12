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
import { exists } from '../runtime';
import { PureDateFromJSON, PureDateToJSON, } from './';
export function DashboardCitationModelFromJSON(json) {
    return DashboardCitationModelFromJSONTyped(json, false);
}
export function DashboardCitationModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cdlStatus': !exists(json, 'cdlStatus') ? undefined : json['cdlStatus'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'citationIssueDate': !exists(json, 'citationIssueDate') ? undefined : PureDateFromJSON(json['citationIssueDate']),
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : (new Date(json['creationDateUtc'])),
        'dismissedFromContactList': !exists(json, 'dismissedFromContactList') ? undefined : json['dismissedFromContactList'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'lastUpdatedDateUtc': !exists(json, 'lastUpdatedDateUtc') ? undefined : (new Date(json['lastUpdatedDateUtc'])),
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'ticketImageUrl': !exists(json, 'ticketImageUrl') ? undefined : json['ticketImageUrl'],
        'violationCount': !exists(json, 'violationCount') ? undefined : json['violationCount'],
    };
}
export function DashboardCitationModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cdlStatus': value.cdlStatus,
        'citationId': value.citationId,
        'citationIssueDate': PureDateToJSON(value.citationIssueDate),
        'creationDateUtc': value.creationDateUtc === undefined ? undefined : (value.creationDateUtc.toISOString()),
        'dismissedFromContactList': value.dismissedFromContactList,
        'isDeleted': value.isDeleted,
        'lastUpdatedDateUtc': value.lastUpdatedDateUtc === undefined ? undefined : (value.lastUpdatedDateUtc.toISOString()),
        'regionCode': value.regionCode,
        'ticketImageUrl': value.ticketImageUrl,
        'violationCount': value.violationCount,
    };
}
/**
* @export
* @enum {string}
*/
export var DashboardCitationModelCdlStatusEnum;
(function (DashboardCitationModelCdlStatusEnum) {
    DashboardCitationModelCdlStatusEnum["CDLINCOMMERCIALVEHICLE"] = "CDL_IN_COMMERCIAL_VEHICLE";
    DashboardCitationModelCdlStatusEnum["CDLINPERSONALVEHICLE"] = "CDL_IN_PERSONAL_VEHICLE";
    DashboardCitationModelCdlStatusEnum["NOCDL"] = "NO_CDL";
})(DashboardCitationModelCdlStatusEnum || (DashboardCitationModelCdlStatusEnum = {}));