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
export function CreateLawfirmModelFromJSON(json) {
    return CreateLawfirmModelFromJSONTyped(json, false);
}
export function CreateLawfirmModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aboutUsBlurb': !exists(json, 'aboutUsBlurb') ? undefined : json['aboutUsBlurb'],
        'caseAssignmentPriority': !exists(json, 'caseAssignmentPriority') ? undefined : json['caseAssignmentPriority'],
        'coverPhotoUrl': !exists(json, 'coverPhotoUrl') ? undefined : json['coverPhotoUrl'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'establishedDateUtc': !exists(json, 'establishedDateUtc') ? undefined : (new Date(json['establishedDateUtc'])),
        'establishedYear': !exists(json, 'establishedYear') ? undefined : json['establishedYear'],
        'isTestLawfirm': !exists(json, 'isTestLawfirm') ? undefined : json['isTestLawfirm'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'lawfirmPaymentModel': !exists(json, 'lawfirmPaymentModel') ? undefined : json['lawfirmPaymentModel'],
        'lawfirmState': !exists(json, 'lawfirmState') ? undefined : json['lawfirmState'],
        'membershipStartDateUtc': !exists(json, 'membershipStartDateUtc') ? undefined : (new Date(json['membershipStartDateUtc'])),
        'otrNotes': !exists(json, 'otrNotes') ? undefined : json['otrNotes'],
        'primaryEmailAddress': !exists(json, 'primaryEmailAddress') ? undefined : json['primaryEmailAddress'],
        'primaryPhoneNumber': !exists(json, 'primaryPhoneNumber') ? undefined : json['primaryPhoneNumber'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'tagLine': !exists(json, 'tagLine') ? undefined : json['tagLine'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}
export function CreateLawfirmModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aboutUsBlurb': value.aboutUsBlurb,
        'caseAssignmentPriority': value.caseAssignmentPriority,
        'coverPhotoUrl': value.coverPhotoUrl,
        'createdBy': value.createdBy,
        'establishedDateUtc': value.establishedDateUtc === undefined ? undefined : (value.establishedDateUtc.toISOString()),
        'establishedYear': value.establishedYear,
        'isTestLawfirm': value.isTestLawfirm,
        'lawfirmName': value.lawfirmName,
        'lawfirmPaymentModel': value.lawfirmPaymentModel,
        'lawfirmState': value.lawfirmState,
        'membershipStartDateUtc': value.membershipStartDateUtc === undefined ? undefined : (value.membershipStartDateUtc.toISOString()),
        'otrNotes': value.otrNotes,
        'primaryEmailAddress': value.primaryEmailAddress,
        'primaryPhoneNumber': value.primaryPhoneNumber,
        'profilePictureUrl': value.profilePictureUrl,
        'tagLine': value.tagLine,
        'website': value.website,
    };
}
/**
* @export
* @enum {string}
*/
export var CreateLawfirmModelLawfirmPaymentModelEnum;
(function (CreateLawfirmModelLawfirmPaymentModelEnum) {
    CreateLawfirmModelLawfirmPaymentModelEnum["DESTINATIONACCOUNT"] = "DESTINATION_ACCOUNT";
    CreateLawfirmModelLawfirmPaymentModelEnum["SEPARATECHARGE"] = "SEPARATE_CHARGE";
    CreateLawfirmModelLawfirmPaymentModelEnum["TRANSFERDEDUCTION"] = "TRANSFER_DEDUCTION";
})(CreateLawfirmModelLawfirmPaymentModelEnum || (CreateLawfirmModelLawfirmPaymentModelEnum = {}));
/**
* @export
* @enum {string}
*/
export var CreateLawfirmModelLawfirmStateEnum;
(function (CreateLawfirmModelLawfirmStateEnum) {
    CreateLawfirmModelLawfirmStateEnum["ACCOUNTCLOSED"] = "ACCOUNT_CLOSED";
    CreateLawfirmModelLawfirmStateEnum["ACTIVE"] = "ACTIVE";
    CreateLawfirmModelLawfirmStateEnum["BLACKLISTED"] = "BLACKLISTED";
    CreateLawfirmModelLawfirmStateEnum["DEMOCOMPLETED"] = "DEMO_COMPLETED";
    CreateLawfirmModelLawfirmStateEnum["DUPLICATE"] = "DUPLICATE";
    CreateLawfirmModelLawfirmStateEnum["FUTURELEAD"] = "FUTURE_LEAD";
    CreateLawfirmModelLawfirmStateEnum["LEAD"] = "LEAD";
    CreateLawfirmModelLawfirmStateEnum["NEWPARTNER"] = "NEW_PARTNER";
    CreateLawfirmModelLawfirmStateEnum["NOTAGOODFIT"] = "NOT_A_GOOD_FIT";
    CreateLawfirmModelLawfirmStateEnum["NOTINTERESTEDDONOTCONTACT"] = "NOT_INTERESTED_DO_NOT_CONTACT";
    CreateLawfirmModelLawfirmStateEnum["NOTINTERESTEDFEESPLITTING"] = "NOT_INTERESTED_FEE_SPLITTING";
    CreateLawfirmModelLawfirmStateEnum["NOTINTERESTEDMARKETINGFEE"] = "NOT_INTERESTED_MARKETING_FEE";
    CreateLawfirmModelLawfirmStateEnum["NOTINTERESTEDMONEYBACKGUARANTEE"] = "NOT_INTERESTED_MONEY_BACK_GUARANTEE";
    CreateLawfirmModelLawfirmStateEnum["NOTINTERESTEDPLATFORMRESISTANCE"] = "NOT_INTERESTED_PLATFORM_RESISTANCE";
    CreateLawfirmModelLawfirmStateEnum["PASTINTEREST"] = "PAST_INTEREST";
    CreateLawfirmModelLawfirmStateEnum["SUPERVISED"] = "SUPERVISED";
    CreateLawfirmModelLawfirmStateEnum["TEMPORARILYTURNEDOFF"] = "TEMPORARILY_TURNED_OFF";
    CreateLawfirmModelLawfirmStateEnum["TERMINATEDFRAUD"] = "TERMINATED_FRAUD";
    CreateLawfirmModelLawfirmStateEnum["TERMINATEDPOORSERVICE"] = "TERMINATED_POOR_SERVICE";
    CreateLawfirmModelLawfirmStateEnum["TERMINATEDPOORSUCCESS"] = "TERMINATED_POOR_SUCCESS";
})(CreateLawfirmModelLawfirmStateEnum || (CreateLawfirmModelLawfirmStateEnum = {}));
