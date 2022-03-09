import {Injectable} from "@angular/core";
import EnLang from "./en";

export function GenericClass<Props>(): new () => Props {
  return class {} as any;
}

@Injectable({providedIn: 'root'})
export class Translations extends GenericClass<typeof EnLang>() {
  constructor() {
    super();
    Object.assign(this, transformObjectToPath('', EnLang));
  }
}

function concatIfExistsPath(path: string, suffix: string): string {
  return path ? `${path}.${suffix}` : suffix;
}

function transformObjectToPath<T extends object | string>(
  suffix: string,
  objectToTransformOrEndOfPath: T,
  path = ''
): T {
  return typeof objectToTransformOrEndOfPath === 'object'
    ? Object.entries(objectToTransformOrEndOfPath).reduce(
      (objectToTransform, [key, value]) => {
        // @ts-ignore
        objectToTransform[key] = transformObjectToPath(
          key,
          value,
          concatIfExistsPath(path, suffix)
        );

        return objectToTransform;
      },
      {} as T
    )
    : (concatIfExistsPath(path, suffix) as T);
}
