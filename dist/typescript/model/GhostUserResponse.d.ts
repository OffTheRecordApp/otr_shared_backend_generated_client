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
export interface GhostUserResponse {
    "dob"?: string;
    "driverLicenseNumber"?: string;
    "emailAddress"?: string;
    "firstname"?: string;
    "gender"?: GhostUserResponse.GenderEnum;
    "lastname"?: string;
    "race"?: GhostUserResponse.RaceEnum;
    "userId"?: number;
}
export declare namespace GhostUserResponse {
    enum GenderEnum {
        FEMALE,
        MALE,
        NOTAVAILABLE,
        NOTLISTED,
        UNVERIFIED
    }
    enum RaceEnum {
        ASIAN,
        BLACK,
        HISPANIC,
        MIDDLEEASTERN,
        NATIVE,
        NOTAVAILABLE,
        PACIFICISLANDER,
        TWOORMORE,
        UNKNOWN,
        UNVERIFIED,
        WHITE
    }
}
