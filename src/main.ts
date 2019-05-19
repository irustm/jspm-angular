import core from '@angular/core';
import platform from '@angular/platform-browser';
import platformDynamic from '@angular/platform-browser-dynamic';

@core.Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}

@core.NgModule({
  imports:      [ platform.BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformDynamic.platformBrowserDynamic().bootstrapModule(AppModule);