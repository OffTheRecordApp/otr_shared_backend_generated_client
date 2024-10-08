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
import { CountryRegionFromJSON, CountryRegionToJSON, } from './';
export function CitationWithMissingCourtFromJSON(json) {
    return CitationWithMissingCourtFromJSONTyped(json, false);
}
export function CitationWithMissingCourtFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'region': !exists(json, 'region') ? undefined : CountryRegionFromJSON(json['region']),
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}
export function CitationWithMissingCourtToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'citationId': value.citationId,
        'deleted': value.deleted,
        'region': CountryRegionToJSON(value.region),
        'state': value.state,
    };
}
/**
* @export
* @enum {string}
*/
export var CitationWithMissingCourtStateEnum;
(function (CitationWithMissingCourtStateEnum) {
    CitationWithMissingCourtStateEnum["AK"] = "AK";
    CitationWithMissingCourtStateEnum["AL"] = "AL";
    CitationWithMissingCourtStateEnum["AR"] = "AR";
    CitationWithMissingCourtStateEnum["AZ"] = "AZ";
    CitationWithMissingCourtStateEnum["CA"] = "CA";
    CitationWithMissingCourtStateEnum["CO"] = "CO";
    CitationWithMissingCourtStateEnum["CT"] = "CT";
    CitationWithMissingCourtStateEnum["DC"] = "DC";
    CitationWithMissingCourtStateEnum["DE"] = "DE";
    CitationWithMissingCourtStateEnum["FL"] = "FL";
    CitationWithMissingCourtStateEnum["GA"] = "GA";
    CitationWithMissingCourtStateEnum["HI"] = "HI";
    CitationWithMissingCourtStateEnum["IA"] = "IA";
    CitationWithMissingCourtStateEnum["ID"] = "ID";
    CitationWithMissingCourtStateEnum["IL"] = "IL";
    CitationWithMissingCourtStateEnum["IN"] = "IN";
    CitationWithMissingCourtStateEnum["KS"] = "KS";
    CitationWithMissingCourtStateEnum["KY"] = "KY";
    CitationWithMissingCourtStateEnum["LA"] = "LA";
    CitationWithMissingCourtStateEnum["MA"] = "MA";
    CitationWithMissingCourtStateEnum["MD"] = "MD";
    CitationWithMissingCourtStateEnum["ME"] = "ME";
    CitationWithMissingCourtStateEnum["MI"] = "MI";
    CitationWithMissingCourtStateEnum["MN"] = "MN";
    CitationWithMissingCourtStateEnum["MO"] = "MO";
    CitationWithMissingCourtStateEnum["MS"] = "MS";
    CitationWithMissingCourtStateEnum["MT"] = "MT";
    CitationWithMissingCourtStateEnum["NC"] = "NC";
    CitationWithMissingCourtStateEnum["ND"] = "ND";
    CitationWithMissingCourtStateEnum["NE"] = "NE";
    CitationWithMissingCourtStateEnum["NH"] = "NH";
    CitationWithMissingCourtStateEnum["NJ"] = "NJ";
    CitationWithMissingCourtStateEnum["NM"] = "NM";
    CitationWithMissingCourtStateEnum["NV"] = "NV";
    CitationWithMissingCourtStateEnum["NY"] = "NY";
    CitationWithMissingCourtStateEnum["OH"] = "OH";
    CitationWithMissingCourtStateEnum["OK"] = "OK";
    CitationWithMissingCourtStateEnum["OR"] = "OR";
    CitationWithMissingCourtStateEnum["PA"] = "PA";
    CitationWithMissingCourtStateEnum["RI"] = "RI";
    CitationWithMissingCourtStateEnum["SC"] = "SC";
    CitationWithMissingCourtStateEnum["SD"] = "SD";
    CitationWithMissingCourtStateEnum["TN"] = "TN";
    CitationWithMissingCourtStateEnum["TX"] = "TX";
    CitationWithMissingCourtStateEnum["UT"] = "UT";
    CitationWithMissingCourtStateEnum["VA"] = "VA";
    CitationWithMissingCourtStateEnum["VT"] = "VT";
    CitationWithMissingCourtStateEnum["WA"] = "WA";
    CitationWithMissingCourtStateEnum["WI"] = "WI";
    CitationWithMissingCourtStateEnum["WV"] = "WV";
    CitationWithMissingCourtStateEnum["WY"] = "WY";
})(CitationWithMissingCourtStateEnum || (CitationWithMissingCourtStateEnum = {}));
