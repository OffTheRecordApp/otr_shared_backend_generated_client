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
export var MessageInputModel;
(function (MessageInputModel) {
    let AuthorEnum;
    (function (AuthorEnum) {
        AuthorEnum[AuthorEnum["ADMIN"] = 'ADMIN'] = "ADMIN";
        AuthorEnum[AuthorEnum["DEFENDANT"] = 'DEFENDANT'] = "DEFENDANT";
        AuthorEnum[AuthorEnum["LAWFIRMADMIN"] = 'LAWFIRM_ADMIN'] = "LAWFIRMADMIN";
        AuthorEnum[AuthorEnum["LAWYER"] = 'LAWYER'] = "LAWYER";
        AuthorEnum[AuthorEnum["PARTNER"] = 'PARTNER'] = "PARTNER";
        AuthorEnum[AuthorEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(AuthorEnum = MessageInputModel.AuthorEnum || (MessageInputModel.AuthorEnum = {}));
    let MediaTypeEnum;
    (function (MediaTypeEnum) {
        MediaTypeEnum[MediaTypeEnum["IMAGE"] = 'IMAGE'] = "IMAGE";
        MediaTypeEnum[MediaTypeEnum["PDF"] = 'PDF'] = "PDF";
    })(MediaTypeEnum = MessageInputModel.MediaTypeEnum || (MessageInputModel.MediaTypeEnum = {}));
})(MessageInputModel || (MessageInputModel = {}));
