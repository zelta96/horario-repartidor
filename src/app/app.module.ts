import { LogsSystemService } from './services/logs-system.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainContentComponent } from './main-content/main-content.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormRepartidorComponent } from './form-repartidor/form-repartidor.component';
import { RepartidorService } from './services/repartidor.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    HeaderComponent,
    MainContentComponent,
    NavComponent,
    FormRepartidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule 
  ],
  providers: [LogsSystemService,
              RepartidorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
