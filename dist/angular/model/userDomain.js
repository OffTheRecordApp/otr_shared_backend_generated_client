"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDomain = void 0;
var UserDomain;
(function (UserDomain) {
    UserDomain.LawyerJobTitleEnum = {
        Accountant: 'ACCOUNTANT',
        Attorney: 'ATTORNEY',
        AttorneyAssociate: 'ATTORNEY_ASSOCIATE',
        AttorneyCounsel: 'ATTORNEY_COUNSEL',
        AttorneyManagingPartner: 'ATTORNEY_MANAGING_PARTNER',
        AttorneyPartner: 'ATTORNEY_PARTNER',
        AttorneyStaff: 'ATTORNEY_STAFF',
        CustomerServiceRep: 'CUSTOMER_SERVICE_REP',
        LegalAssistant: 'LEGAL_ASSISTANT',
        LegalIntern: 'LEGAL_INTERN',
        LegalSecretary: 'LEGAL_SECRETARY',
        Other: 'OTHER',
        Paralegal: 'PARALEGAL'
    };
    UserDomain.LoginProviderEnum = {
        Apple: 'APPLE',
        Email: 'EMAIL',
        Facebook: 'FACEBOOK',
        Google: 'GOOGLE',
        Phone: 'PHONE',
        Twitter: 'TWITTER'
    };
    UserDomain.PrivacyModeEnum = {
        Friends: 'FRIENDS',
        Private: 'PRIVATE',
        Public: 'PUBLIC',
        SemiPublic: 'SEMI_PUBLIC'
    };
})(UserDomain = exports.UserDomain || (exports.UserDomain = {}));
