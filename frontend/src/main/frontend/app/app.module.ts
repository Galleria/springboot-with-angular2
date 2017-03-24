import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './components/app.component'

import {HomeComponent} from './components/home.component'
import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer/footer.component'
import {PageNotFoundComponent} from './components/pageNotFound.component'

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [
                  BrowserModule, 
                  HttpModule, 
                  RouterModule.forRoot(routes) 
                ],
  declarations: [
                  AppComponent, 
                  HomeComponent, 
                  HeaderComponent,
                  FooterComponent, 
                  PageNotFoundComponent
                ],
  bootstrap:    [AppComponent],
  providers:    []
})

export class AppModule { 

}
