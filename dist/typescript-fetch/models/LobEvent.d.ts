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
 * @interface LobEvent
 */
export interface LobEvent {
    /**
     *
     * @type {boolean}
     * @memberof LobEvent
     */
    enabledForTest?: boolean;
    /**
     *
     * @type {string}
     * @memberof LobEvent
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof LobEvent
     */
    resource?: string;
}
export declare function LobEventFromJSON(json: any): LobEvent;
export declare function LobEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): LobEvent;
export declare function LobEventToJSON(value?: LobEvent | null): any;
