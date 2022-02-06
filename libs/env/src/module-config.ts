export abstract class LazyLoadedModuleWithConfig {
  static config: any
  static factory<T>() {
    return (config: T) => {
      this.config = config
      return this
    }
  }
}
