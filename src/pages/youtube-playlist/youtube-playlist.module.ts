import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubePlaylistPage } from './youtube-playlist';

@NgModule({
  declarations: [
    YoutubePlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubePlaylistPage),
  ],
})
export class YoutubePlaylistPageModule {}
