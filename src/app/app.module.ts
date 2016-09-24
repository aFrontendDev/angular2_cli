import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { TodolistModule } from './todolist/todolist.module';
import { AboutModule } from './about/about.module';
import { TestModule } from './test/test.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        HomeModule,
        TodolistModule,
        AboutModule,
        TestModule,
        routing,
        HttpModule
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders, {provide: LocationStrategy, useClass: HashLocationStrategy} ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
