import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the YoutubeApiServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class YoutubeApiProvider {

    static YOUTUBE_API_KEY = 'AIzaSyDV14TEC0FlVDJKV2RLYYu3Es8QUq7M21g';

    constructor(public http: Http) {
        console.log('Hello YoutubeApiProvider Provider');
    }

    getPlaylistsForChannel(channel) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + YoutubeApiProvider.YOUTUBE_API_KEY
            + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
            .map((res) => {
                return res.json()['items'];
            })
    }

    getListVideos(listId) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + YoutubeApiProvider.YOUTUBE_API_KEY
            + '&playlistId=' + listId +'&part=snippet,id&maxResults=20')
            .map((res) => {
                return res.json()['items'];
            })
    }

}
