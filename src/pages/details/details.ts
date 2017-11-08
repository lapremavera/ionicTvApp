import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiResultDetail } from '../../models/apiResultDetail';
import { ApiResult } from '../../models/apiResult';
import { TvShow } from '../../models/tvshow';
import { TvShowDetail } from '../../models/tvShowDetail';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  
  tvShows: TvShow[];
  
  title: string;
 
  
  tvShowDetail: TvShowDetail;
  description: string;
   

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

    this.title = this.navParams.get('title');
    var id = this.navParams.get('tvShowId');

   

   this.http.get<ApiResultDetail>('https://www.episodate.com/api/show-details?q=' + id)
   .subscribe(result => (this.tvShowDetail= result.tvShow));
  }

  addToFav(show: TvShow) {
    // this.navParams.

    // .set(show.id.toString(), show).then(() => {
  
    //   let alert = this.alertCtrl.create( {
    //     title:'Succesfully added to favourites'
    //   });
  
    //   alert.present();
  
    //   setTimeout(() => {
    //     alert.dismiss();
    //   }, 1000);
      
  
    // });

  }
}
