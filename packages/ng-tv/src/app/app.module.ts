import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import defineCustomElements from '../custom-elements';
@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    DetailsPageComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  // bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(app) {
    console.log('bootstrap');
    // using createCustomElement from angular package it will convert angular component to stander web component
    // const el = createCustomElement(NgCardElementComponent, {
    //   injector: this.injector
    // });
    // using built in the browser to create your own custome element name
    defineCustomElements();
    app.bootstrap(AppComponent);
  }

}
