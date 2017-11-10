import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
 selector: 'lista-de-videos',
 templateUrl: './lista-de-videos.component.html'
})
export class ListaVideosComponent implements OnInit{
    videos:Array<Object>;
    rutaServer:string;
    constructor(private http:Http ){}


    ngOnInit(){
        this.videos=[];
        this.rutaServer = 'http://localhost:81/API/uploads/';
        this.peticionExterna();
    }

    peticionExterna():void{
     this.http.request('http://localhost:81/API/lista-de-videos.php').subscribe((res:Response)=>{
     this.videos=res.json();
     })
    }
}