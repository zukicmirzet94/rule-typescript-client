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

import { Observable }                                        from 'rxjs';
import { map }                                        from 'rxjs/operators';

import { PaginationResponse, FlexiCoreDecycle } from '@flexicore/flexicore-client';
import { Scenario } from '../model/scenario';
import { ScenarioCreate } from '../model/scenarioCreate';
import { ScenarioUpdate } from '../model/scenarioUpdate';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { ScenarioFilter } from '../model/scenarioFilter';
import { ClearLogRequest } from '../model/models';


@Injectable()
export class ScenarioService {

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

  /*  
    * createRuleLink
    * create Rule link
    * @param body
    * @param authenticationKey
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
   public clearLog(body?: ClearLogRequest, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<void>;
   public clearLog(body?: ClearLogRequest, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<void>>;
   public clearLog(body?: ClearLogRequest, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<void>>;
   public clearLog(body?: ClearLogRequest, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

       return this.httpClient.post<void>(`${this.basePath}/plugins/Scenario/clearLog`,
           body,
           {
               withCredentials: this.configuration.withCredentials,
               headers: headers,
               observe: observe,
               reportProgress: reportProgress
           }
       ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
   }


    /**
     * createScenario
     * create Scenario
     * @param body 
     * @param authenticationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createScenario(body?: ScenarioCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<Scenario>;
    public createScenario(body?: ScenarioCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Scenario>>;
    public createScenario(body?: ScenarioCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Scenario>>;
    public createScenario(body?: ScenarioCreate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.post<Scenario>(`${this.basePath}/Scenario/createScenario`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * getAllScenarios
     * get all Scenarios
     * @param body 
     * @param authenticationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllScenario(body?: ScenarioFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<Scenario>>;
    public getAllScenario(body?: ScenarioFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<Scenario>>>;
    public getAllScenario(body?: ScenarioFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<Scenario>>>;
    public getAllScenario(body?: ScenarioFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.post<PaginationResponse<Scenario>>(`${this.basePath}/Scenario/getAllScenarios`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * updateScenario
     * Update Scenario
     * @param body 
     * @param authenticationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateScenario(body?: ScenarioUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<Scenario>;
    public updateScenario(body?: ScenarioUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Scenario>>;
    public updateScenario(body?: ScenarioUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Scenario>>;
    public updateScenario(body?: ScenarioUpdate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.put<Scenario>(`${this.basePath}/Scenario/updateScenario`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

}
