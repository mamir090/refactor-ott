import {Route} from "@angular/router";
import {Type} from "@angular/core";


let appRoutes:Route[] = []

const routingSchema:RoutingSchema = {
  login: import("@refactor-ott/screens/login/login-alpha").then(m => m.LoginAlphaScreenComponentModule)
}

export function generateRoutes(schema: RoutingSchema) {
  const mergedSchema = {...routingSchema, ...schema}
  Object.entries(mergedSchema).forEach(([key, value]) => {
    appRoutes.push( {
      path: key,
      loadChildren: () => value
    })
  })
}

export function getAppRoutes(): Route[] {
  return appRoutes;
}

export interface RoutingSchema {
  login : LazyLoadedModule,
}


export type LazyLoadedModule = Type<any>  | Promise<Type<any> | any>
