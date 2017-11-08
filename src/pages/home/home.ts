import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  TvShow} from "../../models/tvshow";
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../../models/apiResult';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tvShows: TvShow [] = [];



  constructor(private http:HttpClient) {
    this.http.get<ApiResult>('https://www.episodate.com/api/most-popular?page=1')
    .subscribe(result => (this.tvShows = result.tv_shows));

  }
  search() {
    alert("Clicked!")
  }

}
