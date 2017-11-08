import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TvShow } from '../../models/tvshow';
import { ApiResult } from '../../models/apiResult';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  title: any;

  tvShows: TvShow [] = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search(event: any) {

   

    this.http.get<ApiResult>('https://www.episodate.com/api/search?q='+ event.target.value)
    .subscribe(result => (this.tvShows = result.tv_shows));
  }

  goToDetails(show: TvShow) {
    
      this.navCtrl.push('DetailsPage', {
        tvShowId: show.id,
        title: show.name
  
      });
    }

}
