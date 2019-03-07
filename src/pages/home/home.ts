import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { YoutubeApiProvider } from '../../providers/youtube-api-service/youtube-api-service';
import { Observable } from 'rxjs/Observable';

import { YoutubePlaylistPage } from '../youtube-playlist/youtube-playlist'


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    channelId = 'UCZZPgUIorPao48a1tBYSDgg'; // Devdactic Channel ID
    playlists: Observable<any[]>;

    constructor(public navCtrl: NavController, public youtubeApiProvider: YoutubeApiProvider,
                public alertCtrl: AlertController) {

    }

    searchPlaylists() {
        this.playlists = this.youtubeApiProvider.getPlaylistsForChannel(this.channelId);
        this.playlists.subscribe(data => {
            console.log('playlists: ', data);
        }, err => {
            let alert = this.alertCtrl.create({
                title: 'Error',
                message: 'No Playlists found for that Channel ID',
                buttons: ['OK']
            });
            alert.present();
        })
    }

    openPlaylist(id) {
        this.navCtrl.push('YoutubePlaylistPage', {id: id});
    }

}
