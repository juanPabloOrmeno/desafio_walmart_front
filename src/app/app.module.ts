import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';
import { ApiModule, Configuration, ConfigurationParameters} from '../api';

export function apiConfigSwagger(): Configuration{
  const params:ConfigurationParameters = {
    basePath: environment.basePath,
    apiKeys:{["Authorization"]: ''}
  }
  return new Configuration(params);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule.forRoot(apiConfigSwagger),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
