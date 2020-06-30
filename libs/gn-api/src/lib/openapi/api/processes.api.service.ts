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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
} from '@angular/common/http'
import { CustomHttpParameterCodec } from '../encoder'
import { Observable } from 'rxjs'

import { MetadataReplacementProcessingReportApiModel } from '../model/models'
import { ProcessingReportApiModel } from '../model/models'
import { XsltMetadataProcessingReportApiModel } from '../model/models'

import { BASE_PATH, COLLECTION_FORMATS } from '../variables'
import { Configuration } from '../configuration'

@Injectable({
  providedIn: 'root',
})
export class ProcessesApiService {
  protected basePath = 'http://localhost:8080/geonetwork/srv/api'
  public defaultHeaders = new HttpHeaders()
  public configuration = new Configuration()
  public encoder: HttpParameterCodec

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath
      }
      this.configuration.basePath = basePath
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec()
  }

  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string
  ): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value)
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key)
    }
    return httpParams
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string
  ): HttpParams {
    if (value == null) {
      return httpParams
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        ;(value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key))
        )
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substr(0, 10)
          )
        } else {
          throw Error('key may not be null if value is Date')
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k
            ))
        )
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value)
    } else {
      throw Error('key may not be null if value is not object or array')
    }
    return httpParams
  }

  /**
   * Clear process reports list
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public _delete(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any>
  public _delete(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<any>>
  public _delete(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<any>>
  public _delete(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.delete<any>(
      `${this.configuration.basePath}/processes/reports`,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Get current process reports
   * When processing, the report is stored in memory and allows to retrieve progress repport during processing. Usually, process reports are returned by the synchronous processing operation.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getProcessReport(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<Array<ProcessingReportApiModel>>
  public getProcessReport(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<Array<ProcessingReportApiModel>>>
  public getProcessReport(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<Array<ProcessingReportApiModel>>>
  public getProcessReport(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.get<Array<ProcessingReportApiModel>>(
      `${this.configuration.basePath}/processes/reports`,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Preview process result applied to one or more records
   * Preview result of a process applied to metadata records with an XSL transformation declared in the metadata schema (See the process folder). Parameters sent to the service are forwarded to XSL process. Append mode has 2 limitations. First, it only support a set of records in the same schema. Secondly, it does not propagate URL parameters. This mode is mainly used to create custom reports based on metadata records content.If process name ends with \&#39;.csv\&#39;, the XSL process output a text document which is returned. When errors occur during processing, the processing report is returned in JSON format.
   * @param process Process identifier
   * @param uuids Record UUIDs. If null current selection is used.
   * @param bucket Selection bucket name
   * @param appendFirst Append documents before processing
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public previewProcessRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    appendFirst?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<object>
  public previewProcessRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    appendFirst?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<HttpResponse<object>>
  public previewProcessRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    appendFirst?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<HttpEvent<object>>
  public previewProcessRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    appendFirst?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' | '*/*' }
  ): Observable<any> {
    if (process === null || process === undefined) {
      throw new Error(
        'Required parameter process was null or undefined when calling previewProcessRecords.'
      )
    }

    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (uuids) {
      uuids.forEach((element) => {
        queryParameters = this.addToHttpParams(
          queryParameters,
          <any>element,
          'uuids'
        )
      })
    }
    if (bucket !== undefined && bucket !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>bucket,
        'bucket'
      )
    }
    if (appendFirst !== undefined && appendFirst !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>appendFirst,
        'appendFirst'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json', '*/*']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.get<object>(
      `${this.configuration.basePath}/processes/${encodeURIComponent(
        String(process)
      )}`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Apply a process to one or more records
   * Process a metadata with an XSL transformation declared in the metadata schema (See the process folder). Parameters sent to the service are forwarded to XSL process.
   * @param process Process identifier
   * @param uuids Record UUIDs. If null current selection is used.
   * @param bucket Selection bucket name
   * @param updateDateStamp If true updates the DateStamp (or equivalent in standards different to ISO 19139) field in the metadata with the current timestamp
   * @param index Index after processing
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public processRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<XsltMetadataProcessingReportApiModel>
  public processRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<XsltMetadataProcessingReportApiModel>>
  public processRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<XsltMetadataProcessingReportApiModel>>
  public processRecords(
    process: string,
    uuids?: Array<string>,
    bucket?: string,
    updateDateStamp?: boolean,
    index?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (process === null || process === undefined) {
      throw new Error(
        'Required parameter process was null or undefined when calling processRecords.'
      )
    }

    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (uuids) {
      uuids.forEach((element) => {
        queryParameters = this.addToHttpParams(
          queryParameters,
          <any>element,
          'uuids'
        )
      })
    }
    if (bucket !== undefined && bucket !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>bucket,
        'bucket'
      )
    }
    if (updateDateStamp !== undefined && updateDateStamp !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>updateDateStamp,
        'updateDateStamp'
      )
    }
    if (index !== undefined && index !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>index,
        'index'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.post<XsltMetadataProcessingReportApiModel>(
      `${this.configuration.basePath}/processes/${encodeURIComponent(
        String(process)
      )}`,
      null,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Search and replace values in one or more records
   * Service to apply replacements to one or more records.  To define a replacement, send the following parameters:  * mdsection-139815551372&#x3D;metadata  * mdfield-1398155513728&#x3D;id.contact.individualName  * replaceValue-1398155513728&#x3D;Juan  * searchValue-1398155513728&#x3D;Jose  TODO: Would be good to provide a simple object to define list of changes instead of group of parameters.&lt;br/&gt;Batch editing can also be used for similar works.
   * @param process
   * @param uuids Record UUIDs. If null current selection is used.
   * @param bucket Selection bucket name
   * @param isTesting Test only (ie. metadata are not saved). Return the report only.
   * @param isCaseInsensitive Case insensitive search.
   * @param vacuumMode \&#39;record\&#39; to apply vacuum.xsl, \&#39;element\&#39; to remove empty elements. Empty to not affect empty elements.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public searchAndReplace(
    process?: string,
    uuids?: Array<string>,
    bucket?: string,
    isTesting?: boolean,
    isCaseInsensitive?: boolean,
    vacuumMode?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<MetadataReplacementProcessingReportApiModel>
  public searchAndReplace(
    process?: string,
    uuids?: Array<string>,
    bucket?: string,
    isTesting?: boolean,
    isCaseInsensitive?: boolean,
    vacuumMode?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<MetadataReplacementProcessingReportApiModel>>
  public searchAndReplace(
    process?: string,
    uuids?: Array<string>,
    bucket?: string,
    isTesting?: boolean,
    isCaseInsensitive?: boolean,
    vacuumMode?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<MetadataReplacementProcessingReportApiModel>>
  public searchAndReplace(
    process?: string,
    uuids?: Array<string>,
    bucket?: string,
    isTesting?: boolean,
    isCaseInsensitive?: boolean,
    vacuumMode?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (process !== undefined && process !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>process,
        'process'
      )
    }
    if (uuids) {
      uuids.forEach((element) => {
        queryParameters = this.addToHttpParams(
          queryParameters,
          <any>element,
          'uuids'
        )
      })
    }
    if (bucket !== undefined && bucket !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>bucket,
        'bucket'
      )
    }
    if (isTesting !== undefined && isTesting !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>isTesting,
        'isTesting'
      )
    }
    if (isCaseInsensitive !== undefined && isCaseInsensitive !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>isCaseInsensitive,
        'isCaseInsensitive'
      )
    }
    if (vacuumMode !== undefined && vacuumMode !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>vacuumMode,
        'vacuumMode'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.post<MetadataReplacementProcessingReportApiModel>(
      `${this.configuration.basePath}/processes/search-and-replace`,
      null,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }
}
