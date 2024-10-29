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
export function LawfirmStorefrontModelFromJSON(json) {
    return LawfirmStorefrontModelFromJSONTyped(json, false);
}
export function LawfirmStorefrontModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aboutUsBlurb': !exists(json, 'aboutUsBlurb') ? undefined : json['aboutUsBlurb'],
        'activeCaseCount': !exists(json, 'activeCaseCount') ? undefined : json['activeCaseCount'],
        'averageRating': !exists(json, 'averageRating') ? undefined : json['averageRating'],
        'coverPhotoUrl': !exists(json, 'coverPhotoUrl') ? undefined : json['coverPhotoUrl'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'lawfirmState': !exists(json, 'lawfirmState') ? undefined : json['lawfirmState'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'resolvedCaseCount': !exists(json, 'resolvedCaseCount') ? undefined : json['resolvedCaseCount'],
        'reviewCount': !exists(json, 'reviewCount') ? undefined : json['reviewCount'],
        'reviewToDisplay': !exists(json, 'reviewToDisplay') ? undefined : json['reviewToDisplay'],
        'reviewerName': !exists(json, 'reviewerName') ? undefined : json['reviewerName'],
        'seoUrl': !exists(json, 'seoUrl') ? undefined : json['seoUrl'],
        'tagLine': !exists(json, 'tagLine') ? undefined : json['tagLine'],
        'vacationModeOn': !exists(json, 'vacationModeOn') ? undefined : json['vacationModeOn'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}
export function LawfirmStorefrontModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aboutUsBlurb': value.aboutUsBlurb,
        'activeCaseCount': value.activeCaseCount,
        'averageRating': value.averageRating,
        'coverPhotoUrl': value.coverPhotoUrl,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'lawfirmState': value.lawfirmState,
        'profilePictureUrl': value.profilePictureUrl,
        'resolvedCaseCount': value.resolvedCaseCount,
        'reviewCount': value.reviewCount,
        'reviewToDisplay': value.reviewToDisplay,
        'reviewerName': value.reviewerName,
        'seoUrl': value.seoUrl,
        'tagLine': value.tagLine,
        'vacationModeOn': value.vacationModeOn,
        'website': value.website,
    };
}
/**
* @export
* @enum {string}
*/
export var LawfirmStorefrontModelLawfirmStateEnum;
(function (LawfirmStorefrontModelLawfirmStateEnum) {
    LawfirmStorefrontModelLawfirmStateEnum["ACCOUNTCLOSED"] = "ACCOUNT_CLOSED";
    LawfirmStorefrontModelLawfirmStateEnum["ACTIVE"] = "ACTIVE";
    LawfirmStorefrontModelLawfirmStateEnum["BLACKLISTED"] = "BLACKLISTED";
    LawfirmStorefrontModelLawfirmStateEnum["DEMOCOMPLETED"] = "DEMO_COMPLETED";
    LawfirmStorefrontModelLawfirmStateEnum["DUPLICATE"] = "DUPLICATE";
    LawfirmStorefrontModelLawfirmStateEnum["FUTURELEAD"] = "FUTURE_LEAD";
    LawfirmStorefrontModelLawfirmStateEnum["LEAD"] = "LEAD";
    LawfirmStorefrontModelLawfirmStateEnum["NEWPARTNER"] = "NEW_PARTNER";
    LawfirmStorefrontModelLawfirmStateEnum["NOTAGOODFIT"] = "NOT_A_GOOD_FIT";
    LawfirmStorefrontModelLawfirmStateEnum["NOTINTERESTEDDONOTCONTACT"] = "NOT_INTERESTED_DO_NOT_CONTACT";
    LawfirmStorefrontModelLawfirmStateEnum["NOTINTERESTEDFEESPLITTING"] = "NOT_INTERESTED_FEE_SPLITTING";
    LawfirmStorefrontModelLawfirmStateEnum["NOTINTERESTEDMARKETINGFEE"] = "NOT_INTERESTED_MARKETING_FEE";
    LawfirmStorefrontModelLawfirmStateEnum["NOTINTERESTEDMONEYBACKGUARANTEE"] = "NOT_INTERESTED_MONEY_BACK_GUARANTEE";
    LawfirmStorefrontModelLawfirmStateEnum["NOTINTERESTEDPLATFORMRESISTANCE"] = "NOT_INTERESTED_PLATFORM_RESISTANCE";
    LawfirmStorefrontModelLawfirmStateEnum["PASTINTEREST"] = "PAST_INTEREST";
    LawfirmStorefrontModelLawfirmStateEnum["SUPERVISED"] = "SUPERVISED";
    LawfirmStorefrontModelLawfirmStateEnum["TEMPORARILYTURNEDOFF"] = "TEMPORARILY_TURNED_OFF";
    LawfirmStorefrontModelLawfirmStateEnum["TERMINATEDFRAUD"] = "TERMINATED_FRAUD";
    LawfirmStorefrontModelLawfirmStateEnum["TERMINATEDPOORSERVICE"] = "TERMINATED_POOR_SERVICE";
    LawfirmStorefrontModelLawfirmStateEnum["TERMINATEDPOORSUCCESS"] = "TERMINATED_POOR_SUCCESS";
})(LawfirmStorefrontModelLawfirmStateEnum || (LawfirmStorefrontModelLawfirmStateEnum = {}));
