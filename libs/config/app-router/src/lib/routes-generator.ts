import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders, Type} from "@angular/core";


export class RoutesGenerator {
  private static _appRoutes: Routes


  static generateRouterModulePure(appRoutes: Routes): ModuleWithProviders<RouterModule> {
    RoutesGenerator._appRoutes = appRoutes
    return RouterModule.forRoot(appRoutes);
  }

  static generateRouterModule(schema: RoutingSchema): ModuleWithProviders<RouterModule> {
    RoutesGenerator.generateRoutes(schema)
    return RouterModule.forRoot(RoutesGenerator.appRoutes)
  }

  private static generateRoutes(schema: RoutingSchema) {
    const mergedSchema = { ...schema}
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



export interface RoutingSchema {
  login: LazyLoadedModule,
}

export type LazyLoadedModule = {module:  Type<unknown> | Promise<Type<unknown> | unknown>}




