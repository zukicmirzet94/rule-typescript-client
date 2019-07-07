/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V3.2.0
 * Contact: avishay@flexi-core.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';

import { ScenarioToTrigger } from '../model/scenarioToTrigger';
import { ScenarioToTriggerCreate } from '../model/scenarioToTriggerCreate';
import { ScenarioToTriggerUpdate } from '../model/scenarioToTriggerUpdate';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { ScenarioToTriggerFilter } from '../model/scenarioToTriggerFilter';
import { PaginationResponse, FlexiCoreDecycle } from '@hanoch/fc_client';


@Injectable()
export class ScenarioToTriggerService {

    protected basePath = '/FlexiCore';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createScenarioToTrigger
     * create ScenarioToTrigger
     * @param body 
     * @param authenticationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createScenarioToTrigger(body?: ScenarioToTriggerCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioToTrigger>;
    public createScenarioToTrigger(body?: ScenarioToTriggerCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioToTrigger>>;
    public createScenarioToTrigger(body?: ScenarioToTriggerCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioToTrigger>>;
    public createScenarioToTrigger(body?: ScenarioToTriggerCreate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<ScenarioToTrigger>(`${this.basePath}/plugins/ScenarioToTrigger/createScenarioToTrigger`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }

    /**
     * getAllScenarioToTriggers
     * get all ScenarioToTriggers
     * @param body 
     * @param authenticationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllScenarioToTrigger(body?: ScenarioToTriggerFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ScenarioToTrigger>>;
    public getAllScenarioToTrigger(body?: ScenarioToTriggerFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ScenarioToTrigger>>>;
    public getAllScenarioToTrigger(body?: ScenarioToTriggerFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ScenarioToTrigger>>>;
    public getAllScenarioToTrigger(body?: ScenarioToTriggerFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PaginationResponse<ScenarioToTrigger>>(`${this.basePath}/plugins/ScenarioToTrigger/getAllScenarioToTriggers`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }

    /**
     * updateScenarioToTrigger
     * Update ScenarioToTrigger
     * @param body 
     * @param authenticationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateScenarioToTrigger(body?: ScenarioToTriggerUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioToTrigger>;
    public updateScenarioToTrigger(body?: ScenarioToTriggerUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioToTrigger>>;
    public updateScenarioToTrigger(body?: ScenarioToTriggerUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioToTrigger>>;
    public updateScenarioToTrigger(body?: ScenarioToTriggerUpdate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<ScenarioToTrigger>(`${this.basePath}/plugins/ScenarioToTrigger/updateScenarioToTrigger`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }

}
