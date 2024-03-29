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
import { SaveCoachingCardUserRequest } from './saveCoachingCardUserRequest';
import { CoachingLinks } from './coachingLinks';


export interface SaveCoachingCardRequest { 
    coachingCardCategoryId?: number;
    coachingCardSubcategoryId?: number;
    coachingCardType?: SaveCoachingCardRequest.CoachingCardTypeEnum;
    coachingCardUserRequest?: Array<SaveCoachingCardUserRequest>;
    coachingLinks?: CoachingLinks;
    coachingText?: string;
}
export namespace SaveCoachingCardRequest {
    export type CoachingCardTypeEnum = 'COACHING' | 'KUDOS';
    export const CoachingCardTypeEnum = {
        Coaching: 'COACHING' as CoachingCardTypeEnum,
        Kudos: 'KUDOS' as CoachingCardTypeEnum
    };
}


