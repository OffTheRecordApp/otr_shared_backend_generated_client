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
/**
 *
 * @export
 * @interface UpdateNoteInput
 */
export interface UpdateNoteInput {
    /**
     *
     * @type {string}
     * @memberof UpdateNoteInput
     */
    note: string;
}
export declare function UpdateNoteInputFromJSON(json: any): UpdateNoteInput;
export declare function UpdateNoteInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNoteInput;
export declare function UpdateNoteInputToJSON(value?: UpdateNoteInput | null): any;
