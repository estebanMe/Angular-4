import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaVideosComponent }   from './lista-de-videos/lista-de-videos.component';
import {VideoPlayerComponent} from './video-player/video-player.component';

const routes: Routes = [
  { path: 'lista-videos' , component: ListaVideosComponent },
  { path: 'video-player/:videoID' ,  component: VideoPlayerComponent },
  { path: '' , redirectTo: 'lista-videos', pathMatch: 'full' },
  { path: '**', component: ListaVideosComponent }
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}