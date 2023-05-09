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


export interface DripRemoveRequest { 
    dripAccountId?: string;
    dripAction?: DripRemoveRequest.DripActionEnum;
    emailAddress?: string;
    ticketIssueId?: string;
}
export namespace DripRemoveRequest {
    export type DripActionEnum = 'DELETE' | 'UNSUBSCRIBE';
    export const DripActionEnum = {
        Delete: 'DELETE' as DripActionEnum,
        Unsubscribe: 'UNSUBSCRIBE' as DripActionEnum
    };
}

