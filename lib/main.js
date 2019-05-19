var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import core from '@angular/core';
import platform from '@angular/platform-browser';
import platformDynamic from '@angular/platform-browser-dynamic';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    core.Component({
        selector: 'app-root',
        template: `
    <p>
      app Works!
    </p>
  `,
        styles: []
    })
], AppComponent);
export { AppComponent };
let AppModule = class AppModule {
};
AppModule = __decorate([
    core.NgModule({
        imports: [platform.BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
platformDynamic.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map