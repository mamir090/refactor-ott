import {RouterModule, Routes} from "@angular/router";
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
        loadChildren: () => value.module,
      }
    })
  }

  private static get appRoutes(): Routes {
    return this._appRoutes;
  }
}


const routingSchema: RoutingSchema = {
  // login: {
  //   module: import("@refactor-ott/screens/login/login-alpha").then(m => m.LoginAlphaScreenComponentModule),
  // }
}

export interface RoutingSchema {
  login?: LazyLoadedModule,
}

export type LazyLoadedModule = {module:  Type<unknown> | Promise<Type<unknown> | unknown>}




