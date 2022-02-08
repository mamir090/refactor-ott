export abstract class ModuleWithConfig {
  static config: unknown
  static factory<T>() {
    return (config: T) => {
      this.config = config
      return this
    }
  }
}
