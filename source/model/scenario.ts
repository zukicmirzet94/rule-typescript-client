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
 */import { Baseclass } from '@hanoch/fc_client';
import { FlexiCoreRule } from './flexiCoreRule';



export interface Scenario extends Baseclass { 
    flexiCoreRule?: FlexiCoreRule;
}