import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Http, Response} from '@angular/http';

@Component({
 selector: 'video-player',
 templateUrl: './video-player.component.html'
})
export class VideoPlayerComponent implements OnInit {
    @ViewChild('videoPlayer')

    videoPlayer:any;
    duracion:string;

   videoInfo:any;
   id:string;



   constructor(private route:ActivatedRoute, private http:Http){}

   ngOnInit():void{
   this.route.params.subscribe(params => {
       this.id = params['videoID'];
       this.obtenerInfo();
      })
   }


   obtenerInfo():void{
     this.http.request('http://localhost:81/API/info-video.php?id=' + this.id).subscribe((res:Response) =>{
         this.videoInfo = res.json()[0];
     })
   }

   
   reproducirVideo():void{
     this.videoPlayer.nativeElement.play();
   } 

   detenerVideo():void{
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.currentTime = 0;
  }
  
  pausarVideo():void{
    this.videoPlayer.nativeElement.pause();
  }

  onMetadata(e:any, video:any):void{
   let minutos = Math.floor(video.duration / 60);
   let segundos = Math.floor(video.duration);
 
   this.duracion = minutos + ":" + segundos;

  }

}
