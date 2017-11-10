import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component/header.component';
import { ListaVideosComponent } from './lista-de-videos/lista-de-videos.component';
import {VideoPlayerComponent} from './video-player/video-player.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaVideosComponent,
    VideoPlayerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
