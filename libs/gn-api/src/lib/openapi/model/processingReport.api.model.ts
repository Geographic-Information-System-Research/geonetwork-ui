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
import { InfoReportApiModel } from './infoReport.api.model'
import { ReportApiModel } from './report.api.model'

export interface ProcessingReportApiModel {
  errors?: Array<ReportApiModel>
  infos?: Array<InfoReportApiModel>
  uuid?: string
  startIsoDateTime?: string
  endIsoDateTime?: string
  ellapsedTimeInSeconds?: number
  totalTimeInSeconds?: number
  type?: string
  running?: boolean
}
