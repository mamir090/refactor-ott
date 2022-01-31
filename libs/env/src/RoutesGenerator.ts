import {Route, RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders, Type} from "@angular/core";


export class RoutesGenerator {
  private static _appRoutes: Routes

  static generateRouterModule(schema: RoutingSchema): ModuleWithProviders<RouterModule> {
    RoutesGenerator.generateRoutes(schema)
    return RouterModule.forRoot(RoutesGenerator.appRoutes)
  }

  private static generateRoutes(schema: RoutingSchema) {
    console.warn("generateRoutes")
    const mergedSchema = {...routingSchema, ...schema}
    this._appRoutes = Object.entries(mergedSchema).map(([key, value]) => {
      return {
        path: key,
        loadChildren: () => value
      }
    })
  }

  private static get appRoutes(): Routes {
    console.warn("getAppRoutes", this._appRoutes)
    return this._appRoutes;
  }
}


const routingSchema: RoutingSchema = {
  login: import("@refactor-ott/screens/login/login-alpha").then(m => m.LoginAlphaScreenComponentModule)
}

export interface RoutingSchema {
  login: LazyLoadedModule,
}

export type LazyLoadedModule = Type<any> | Promise<Type<any> | any>



