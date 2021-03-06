/**
 * GeoNetwork 4.0.0 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface OperationApiModel {
  reservedOperation?: OperationApiModel.ReservedOperationEnum
  name?: string
  id?: number
  reserved?: boolean
  label?: { [key: string]: string }
}
export namespace OperationApiModel {
  export type ReservedOperationEnum =
    | 'view'
    | 'download'
    | 'editing'
    | 'notify'
    | 'dynamic'
    | 'featured'
  export const ReservedOperationEnum = {
    View: 'view' as ReservedOperationEnum,
    Download: 'download' as ReservedOperationEnum,
    Editing: 'editing' as ReservedOperationEnum,
    Notify: 'notify' as ReservedOperationEnum,
    Dynamic: 'dynamic' as ReservedOperationEnum,
    Featured: 'featured' as ReservedOperationEnum,
  }
}
