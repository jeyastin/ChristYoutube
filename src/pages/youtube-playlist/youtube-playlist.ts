import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { YoutubeApiProvider } from '../../providers/youtube-api-service/youtube-api-service';
import { Observable } from 'rxjs/Observable';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

/**
 * Generated class for the YoutubePlaylistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-youtube-playlist',
    templateUrl: 'youtube-playlist.html',
})
export class YoutubePlaylistPage {

    videos: Observable<any[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public youtubeApiProvider: YoutubeApiProvider,
                private youtubeVideoPlayer: YoutubeVideoPlayer, private platform: Platform) {
        let listId = this.navParams.get('id');
        this.videos = this.youtubeApiProvider.getListVideos(listId);
    }

    ionViewDidLoad() {
    }

    openVideo(video) {
        if (this.platform.is('cordova')) {
            this.youtubeVideoPlayer.openVideo(video.snippet.resourceId.videoId);
        } else {
            window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
        }
    }

}
