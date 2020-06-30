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

export interface StatusValueApiModel {
  type?: StatusValueApiModel.TypeEnum
  notificationLevel?: StatusValueApiModel.NotificationLevelEnum
  displayOrder?: number
  reserved_JpaWorkaround?: string
  name?: string
  id?: number
  reserved?: boolean
  label?: { [key: string]: string }
}
export namespace StatusValueApiModel {
  export type TypeEnum = 'workflow' | 'task' | 'event'
  export const TypeEnum = {
    Workflow: 'workflow' as TypeEnum,
    Task: 'task' as TypeEnum,
    Event: 'event' as TypeEnum,
  }
  export type NotificationLevelEnum =
    | 'statusUserOwner'
    | 'catalogueAdministrator'
    | 'catalogueProfileAdministrator'
    | 'catalogueProfileUserAdmin'
    | 'catalogueProfileReviewer'
    | 'catalogueProfileEditor'
    | 'catalogueProfileRegisteredUser'
    | 'catalogueProfileGuest'
    | 'recordProfileReviewer'
    | 'recordUserAuthor'
  export const NotificationLevelEnum = {
    StatusUserOwner: 'statusUserOwner' as NotificationLevelEnum,
    CatalogueAdministrator: 'catalogueAdministrator' as NotificationLevelEnum,
    CatalogueProfileAdministrator: 'catalogueProfileAdministrator' as NotificationLevelEnum,
    CatalogueProfileUserAdmin: 'catalogueProfileUserAdmin' as NotificationLevelEnum,
    CatalogueProfileReviewer: 'catalogueProfileReviewer' as NotificationLevelEnum,
    CatalogueProfileEditor: 'catalogueProfileEditor' as NotificationLevelEnum,
    CatalogueProfileRegisteredUser: 'catalogueProfileRegisteredUser' as NotificationLevelEnum,
    CatalogueProfileGuest: 'catalogueProfileGuest' as NotificationLevelEnum,
    RecordProfileReviewer: 'recordProfileReviewer' as NotificationLevelEnum,
    RecordUserAuthor: 'recordUserAuthor' as NotificationLevelEnum,
  }
}