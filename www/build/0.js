webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlaylistPageModule", function() { return YoutubePlaylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube_playlist__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YoutubePlaylistPageModule = (function () {
    function YoutubePlaylistPageModule() {
    }
    return YoutubePlaylistPageModule;
}());
YoutubePlaylistPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__youtube_playlist__["a" /* YoutubePlaylistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__youtube_playlist__["a" /* YoutubePlaylistPage */]),
        ],
    })
], YoutubePlaylistPageModule);

//# sourceMappingURL=youtube-playlist.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePlaylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_youtube_api_service_youtube_api_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the YoutubePlaylistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var YoutubePlaylistPage = (function () {
    function YoutubePlaylistPage(navCtrl, navParams, youtubeApiProvider, youtubeVideoPlayer, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.youtubeApiProvider = youtubeApiProvider;
        this.youtubeVideoPlayer = youtubeVideoPlayer;
        this.platform = platform;
        var listId = this.navParams.get('id');
        this.videos = this.youtubeApiProvider.getListVideos(listId);
    }
    YoutubePlaylistPage.prototype.ionViewDidLoad = function () {
    };
    YoutubePlaylistPage.prototype.openVideo = function (video) {
        if (this.platform.is('cordova')) {
            this.youtubeVideoPlayer.openVideo(video.snippet.resourceId.videoId);
        }
        else {
            window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
        }
    };
    return YoutubePlaylistPage;
}());
YoutubePlaylistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-youtube-playlist',template:/*ion-inline-start:"/Users/jeyastin/ionic-youtube-rest-api-master/src/pages/youtube-playlist/youtube-playlist.html"*/'<!--\n  Generated template for the YoutubePlaylistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Playlist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let video of videos | async" (click)="openVideo(video)" detail-none>\n      <ion-thumbnail item-start>\n        <img [src]="video.snippet.thumbnails.standard.url">\n      </ion-thumbnail>\n      <h2>{{ video.snippet.title }}</h2>\n      <p>{{ video.snippet.description }}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jeyastin/ionic-youtube-rest-api-master/src/pages/youtube-playlist/youtube-playlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_youtube_api_service_youtube_api_service__["a" /* YoutubeApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], YoutubePlaylistPage);

//# sourceMappingURL=youtube-playlist.js.map

/***/ })

});
//# sourceMappingURL=0.js.map