import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../../models/apiResult';
import { TvShow } from '../../models/tvshow';
import { Storage} from '@ionic/storage';
import { Badge } from '@ionic-native/badge';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  tvShows: TvShow[];

  constructor(public navCtrl: NavController, private http: HttpClient, private storage: Storage, private alertCtrl:AlertController, private badge: Badge) {
  }

  ionViewDidLoad() {
    this.http.get<ApiResult>('https://www.episodate.com/api/most-popular?page=1')
    .subscribe(result => (this.tvShows = result.tv_shows));
  }

  goToDetails(show: TvShow) {
  
    this.navCtrl.push('DetailsPage', {
      tvShowId: show.id,
      title: show.name

    });
  }

  addToFav(show: TvShow) {
  this.storage.set(show.id.toString(), show).then(() => {
    this.badge.increase(1);

    let alert = this.alertCtrl.create( {
      title:'Succesfully added to favourites'
    });

    alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 1000);
    

  });
}

}
