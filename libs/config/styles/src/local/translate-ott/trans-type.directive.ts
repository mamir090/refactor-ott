import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EmbeddedViewRef, Inject, Renderer2,
  TemplateRef,
  Type,
  ViewContainerRef,
  Optional
} from '@angular/core';
import {
  HashMap,
  MaybeArray, TRANSLOCO_LANG, TRANSLOCO_LOADING_TEMPLATE,
  TRANSLOCO_SCOPE,
  TranslocoDirective,
  TranslocoScope,
  TranslocoService
} from "@ngneat/transloco";
import {GenericClass, Translations} from "./def";
import EnLang from "./en";
import {TranslateOttModule} from "@refactor-ott/config/styles";

type TranslateFn = (key: string, params?: HashMap) => any;

interface ViewContext {
  $implicit: TranslateFn;
  currentLang: string;
  tk: Translations
}


@Directive({
  selector: '[transType]'
})
// @ts-ignore
export class TransTypeDirective extends TranslocoDirective {
  override view: EmbeddedViewRef<ViewContext> | undefined;



  constructor(
    translocoService: TranslocoService,
    @Optional() tpl: TemplateRef<ViewContext>,
    @Optional()
    @Inject(TRANSLOCO_SCOPE) providerScope: MaybeArray<TranslocoScope>,
    @Optional()
    @Inject(TRANSLOCO_LANG)
      providerLang: string | undefined,
    @Optional()
    @Inject(TRANSLOCO_LOADING_TEMPLATE)
      providedLoadingTpl: Type<unknown> | string,
    vcr: ViewContainerRef,
    cdr: ChangeDetectorRef,
    host: ElementRef,
    renderer: Renderer2,
    public translations: Translations
  ) {
    super(translocoService, tpl, providerScope, providerLang, providedLoadingTpl, vcr, cdr, host, renderer);
  }

  private override structuralStrategy(lang: string, read?: string) {
    // @ts-ignore
    super.structuralStrategy()
    if (this.view) {
      this.view.context['tk'] = this.translations;
    }
  }
}
