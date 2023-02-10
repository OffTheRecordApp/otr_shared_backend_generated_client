"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterNewUserRequest = void 0;
var RegisterNewUserRequest;
(function (RegisterNewUserRequest) {
    RegisterNewUserRequest.ClientTypeEnum = {
        Android: 'ANDROID',
        DesktopWebapp: 'DESKTOP_WEBAPP',
        DmvGo: 'DMV_GO',
        DmvOrg: 'DMV_ORG',
        FreshDesk: 'FRESH_DESK',
        Ios: 'IOS',
        MobileWebapp: 'MOBILE_WEBAPP',
        OtrAdminConsole: 'OTR_ADMIN_CONSOLE',
        OtrAdminConsoleDevo: 'OTR_ADMIN_CONSOLE_DEVO',
        OtrAdminConsoleLocalhost: 'OTR_ADMIN_CONSOLE_LOCALHOST',
        OtrExplorer: 'OTR_EXPLORER',
        OtrLawfirmPortal: 'OTR_LAWFIRM_PORTAL',
        OtrLawfirmPortalDevo: 'OTR_LAWFIRM_PORTAL_DEVO',
        OtrLawfirmPortalLocalhost: 'OTR_LAWFIRM_PORTAL_LOCALHOST',
        OtrWebsite: 'OTR_WEBSITE',
        OtrWebsiteDevo: 'OTR_WEBSITE_DEVO',
        OtrWebsiteLocalhost: 'OTR_WEBSITE_LOCALHOST',
        OtrWidget: 'OTR_WIDGET',
        Unknown: 'UNKNOWN'
    };
    RegisterNewUserRequest.RoleTypeEnum = {
        Admin: 'ADMIN',
        Defendant: 'DEFENDANT',
        LawfirmAdmin: 'LAWFIRM_ADMIN',
        Lawyer: 'LAWYER',
        Partner: 'PARTNER',
        Unknown: 'UNKNOWN'
    };
})(RegisterNewUserRequest = exports.RegisterNewUserRequest || (exports.RegisterNewUserRequest = {}));
