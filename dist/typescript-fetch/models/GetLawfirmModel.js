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
import { AddressDomainFromJSON, AddressDomainToJSON, LawfirmRedirectModelFromJSON, LawfirmRedirectModelToJSON, LawfirmSettingsDomainResFromJSON, LawfirmSettingsDomainResToJSON, } from './';
export function GetLawfirmModelFromJSON(json) {
    return GetLawfirmModelFromJSONTyped(json, false);
}
export function GetLawfirmModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aboutUsBlurb': !exists(json, 'aboutUsBlurb') ? undefined : json['aboutUsBlurb'],
        'address': !exists(json, 'address') ? undefined : AddressDomainFromJSON(json['address']),
        'caseAssignmentPriority': !exists(json, 'caseAssignmentPriority') ? undefined : json['caseAssignmentPriority'],
        'coverPhotoUrl': !exists(json, 'coverPhotoUrl') ? undefined : json['coverPhotoUrl'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'establishedDateUtc': !exists(json, 'establishedDateUtc') ? undefined : (new Date(json['establishedDateUtc'])),
        'establishedYear': !exists(json, 'establishedYear') ? undefined : json['establishedYear'],
        'isLawfirmDisabled': !exists(json, 'isLawfirmDisabled') ? undefined : json['isLawfirmDisabled'],
        'isLawfirmNotWithCompany': !exists(json, 'isLawfirmNotWithCompany') ? undefined : json['isLawfirmNotWithCompany'],
        'isTestLawfirm': !exists(json, 'isTestLawfirm') ? undefined : json['isTestLawfirm'],
        'languagesServed': !exists(json, 'languagesServed') ? undefined : json['languagesServed'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'lawfirmPaymentModel': !exists(json, 'lawfirmPaymentModel') ? undefined : json['lawfirmPaymentModel'],
        'lawfirmState': !exists(json, 'lawfirmState') ? undefined : json['lawfirmState'],
        'membershipStartDateUtc': !exists(json, 'membershipStartDateUtc') ? undefined : (new Date(json['membershipStartDateUtc'])),
        'otrNotes': !exists(json, 'otrNotes') ? undefined : json['otrNotes'],
        'primaryEmailAddress': !exists(json, 'primaryEmailAddress') ? undefined : json['primaryEmailAddress'],
        'primaryPhoneNumber': !exists(json, 'primaryPhoneNumber') ? undefined : json['primaryPhoneNumber'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'redirects': !exists(json, 'redirects') ? undefined : (json['redirects'].map(LawfirmRedirectModelFromJSON)),
        'seoUrl': !exists(json, 'seoUrl') ? undefined : json['seoUrl'],
        'settings': !exists(json, 'settings') ? undefined : LawfirmSettingsDomainResFromJSON(json['settings']),
        'supportedStates': !exists(json, 'supportedStates') ? undefined : json['supportedStates'],
        'tagLine': !exists(json, 'tagLine') ? undefined : json['tagLine'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}
export function GetLawfirmModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aboutUsBlurb': value.aboutUsBlurb,
        'address': AddressDomainToJSON(value.address),
        'caseAssignmentPriority': value.caseAssignmentPriority,
        'coverPhotoUrl': value.coverPhotoUrl,
        'createdBy': value.createdBy,
        'establishedDateUtc': value.establishedDateUtc === undefined ? undefined : (value.establishedDateUtc.toISOString()),
        'establishedYear': value.establishedYear,
        'isLawfirmDisabled': value.isLawfirmDisabled,
        'isLawfirmNotWithCompany': value.isLawfirmNotWithCompany,
        'isTestLawfirm': value.isTestLawfirm,
        'languagesServed': value.languagesServed,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'lawfirmPaymentModel': value.lawfirmPaymentModel,
        'lawfirmState': value.lawfirmState,
        'membershipStartDateUtc': value.membershipStartDateUtc === undefined ? undefined : (value.membershipStartDateUtc.toISOString()),
        'otrNotes': value.otrNotes,
        'primaryEmailAddress': value.primaryEmailAddress,
        'primaryPhoneNumber': value.primaryPhoneNumber,
        'profilePictureUrl': value.profilePictureUrl,
        'redirects': value.redirects === undefined ? undefined : (value.redirects.map(LawfirmRedirectModelToJSON)),
        'seoUrl': value.seoUrl,
        'settings': LawfirmSettingsDomainResToJSON(value.settings),
        'supportedStates': value.supportedStates,
        'tagLine': value.tagLine,
        'website': value.website,
    };
}
/**
* @export
* @enum {string}
*/
export var GetLawfirmModelLawfirmPaymentModelEnum;
(function (GetLawfirmModelLawfirmPaymentModelEnum) {
    GetLawfirmModelLawfirmPaymentModelEnum["DESTINATIONACCOUNT"] = "DESTINATION_ACCOUNT";
    GetLawfirmModelLawfirmPaymentModelEnum["SEPARATECHARGE"] = "SEPARATE_CHARGE";
    GetLawfirmModelLawfirmPaymentModelEnum["TRANSFERDEDUCTION"] = "TRANSFER_DEDUCTION";
})(GetLawfirmModelLawfirmPaymentModelEnum || (GetLawfirmModelLawfirmPaymentModelEnum = {}));
/**
* @export
* @enum {string}
*/
export var GetLawfirmModelLawfirmStateEnum;
(function (GetLawfirmModelLawfirmStateEnum) {
    GetLawfirmModelLawfirmStateEnum["ACCOUNTCLOSED"] = "ACCOUNT_CLOSED";
    GetLawfirmModelLawfirmStateEnum["DUPLICATE"] = "DUPLICATE";
    GetLawfirmModelLawfirmStateEnum["ESTABLISHED"] = "ESTABLISHED";
    GetLawfirmModelLawfirmStateEnum["FUTURELEAD"] = "FUTURE_LEAD";
    GetLawfirmModelLawfirmStateEnum["INTRIAL"] = "IN_TRIAL";
    GetLawfirmModelLawfirmStateEnum["LAWFIRMINTERESTED"] = "LAWFIRM_INTERESTED";
    GetLawfirmModelLawfirmStateEnum["LAWFIRMLEAD"] = "LAWFIRM_LEAD";
    GetLawfirmModelLawfirmStateEnum["LAWFIRMNOTINTERESTED"] = "LAWFIRM_NOT_INTERESTED";
    GetLawfirmModelLawfirmStateEnum["NOTINTERESTEDFEESPLITTINGETHICS"] = "NOT_INTERESTED_FEE_SPLITTING_ETHICS";
    GetLawfirmModelLawfirmStateEnum["NOTINTERESTEDREFUNDETHICS"] = "NOT_INTERESTED_REFUND_ETHICS";
    GetLawfirmModelLawfirmStateEnum["ONBOARDING"] = "ONBOARDING";
    GetLawfirmModelLawfirmStateEnum["TEMPORARILYTURNEDOFF"] = "TEMPORARILY_TURNED_OFF";
    GetLawfirmModelLawfirmStateEnum["TERMINATEDFRAUD"] = "TERMINATED_FRAUD";
    GetLawfirmModelLawfirmStateEnum["TERMINATEDPOORSERVICE"] = "TERMINATED_POOR_SERVICE";
    GetLawfirmModelLawfirmStateEnum["TERMINATEDPOORSUCCESS"] = "TERMINATED_POOR_SUCCESS";
    GetLawfirmModelLawfirmStateEnum["UNDERREVIEW"] = "UNDER_REVIEW";
})(GetLawfirmModelLawfirmStateEnum || (GetLawfirmModelLawfirmStateEnum = {}));
/**
* @export
* @enum {string}
*/
export var GetLawfirmModelSupportedStatesEnum;
(function (GetLawfirmModelSupportedStatesEnum) {
    GetLawfirmModelSupportedStatesEnum["AK"] = "AK";
    GetLawfirmModelSupportedStatesEnum["AL"] = "AL";
    GetLawfirmModelSupportedStatesEnum["AR"] = "AR";
    GetLawfirmModelSupportedStatesEnum["AZ"] = "AZ";
    GetLawfirmModelSupportedStatesEnum["CA"] = "CA";
    GetLawfirmModelSupportedStatesEnum["CO"] = "CO";
    GetLawfirmModelSupportedStatesEnum["CT"] = "CT";
    GetLawfirmModelSupportedStatesEnum["DC"] = "DC";
    GetLawfirmModelSupportedStatesEnum["DE"] = "DE";
    GetLawfirmModelSupportedStatesEnum["FL"] = "FL";
    GetLawfirmModelSupportedStatesEnum["GA"] = "GA";
    GetLawfirmModelSupportedStatesEnum["HI"] = "HI";
    GetLawfirmModelSupportedStatesEnum["IA"] = "IA";
    GetLawfirmModelSupportedStatesEnum["ID"] = "ID";
    GetLawfirmModelSupportedStatesEnum["IL"] = "IL";
    GetLawfirmModelSupportedStatesEnum["IN"] = "IN";
    GetLawfirmModelSupportedStatesEnum["KS"] = "KS";
    GetLawfirmModelSupportedStatesEnum["KY"] = "KY";
    GetLawfirmModelSupportedStatesEnum["LA"] = "LA";
    GetLawfirmModelSupportedStatesEnum["MA"] = "MA";
    GetLawfirmModelSupportedStatesEnum["MD"] = "MD";
    GetLawfirmModelSupportedStatesEnum["ME"] = "ME";
    GetLawfirmModelSupportedStatesEnum["MI"] = "MI";
    GetLawfirmModelSupportedStatesEnum["MN"] = "MN";
    GetLawfirmModelSupportedStatesEnum["MO"] = "MO";
    GetLawfirmModelSupportedStatesEnum["MS"] = "MS";
    GetLawfirmModelSupportedStatesEnum["MT"] = "MT";
    GetLawfirmModelSupportedStatesEnum["NC"] = "NC";
    GetLawfirmModelSupportedStatesEnum["ND"] = "ND";
    GetLawfirmModelSupportedStatesEnum["NE"] = "NE";
    GetLawfirmModelSupportedStatesEnum["NH"] = "NH";
    GetLawfirmModelSupportedStatesEnum["NJ"] = "NJ";
    GetLawfirmModelSupportedStatesEnum["NM"] = "NM";
    GetLawfirmModelSupportedStatesEnum["NV"] = "NV";
    GetLawfirmModelSupportedStatesEnum["NY"] = "NY";
    GetLawfirmModelSupportedStatesEnum["OH"] = "OH";
    GetLawfirmModelSupportedStatesEnum["OK"] = "OK";
    GetLawfirmModelSupportedStatesEnum["OR"] = "OR";
    GetLawfirmModelSupportedStatesEnum["PA"] = "PA";
    GetLawfirmModelSupportedStatesEnum["RI"] = "RI";
    GetLawfirmModelSupportedStatesEnum["SC"] = "SC";
    GetLawfirmModelSupportedStatesEnum["SD"] = "SD";
    GetLawfirmModelSupportedStatesEnum["TN"] = "TN";
    GetLawfirmModelSupportedStatesEnum["TX"] = "TX";
    GetLawfirmModelSupportedStatesEnum["UT"] = "UT";
    GetLawfirmModelSupportedStatesEnum["VA"] = "VA";
    GetLawfirmModelSupportedStatesEnum["VT"] = "VT";
    GetLawfirmModelSupportedStatesEnum["WA"] = "WA";
    GetLawfirmModelSupportedStatesEnum["WI"] = "WI";
    GetLawfirmModelSupportedStatesEnum["WV"] = "WV";
    GetLawfirmModelSupportedStatesEnum["WY"] = "WY";
})(GetLawfirmModelSupportedStatesEnum || (GetLawfirmModelSupportedStatesEnum = {}));