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
import { ElementApiModel } from './element.api.model'

export interface MetadataSchemaApiModel {
  name?: string
  titles?: { [key: string]: string }
  descriptions?: { [key: string]: string }
  standardUrl?: string
  targetNamespace?: string
  namespaces?: { [key: string]: string }
  readwriteUUID?: boolean
  schematronRules?: Array<string>
  version?: string
  appMinorVersionSupported?: string
  appMajorVersionSupported?: string
  canEdit?: boolean
  rootAppInfoElements?: Array<ElementApiModel>
  dependsOn?: string
  operationFilters?: { [key: string]: object }
}
