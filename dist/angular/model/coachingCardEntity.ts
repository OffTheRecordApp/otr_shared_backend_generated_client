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
import { CoachingLinks } from './coachingLinks';


export interface CoachingCardEntity { 
    cardCreatedDateUtc?: string;
    cardLastUpdatedDateUtc?: string;
    coachingCardCategoryId?: number;
    coachingCardId?: number;
    coachingCardSubcategoryId?: number;
    coachingLinks?: CoachingLinks;
    coachingText?: string;
}

