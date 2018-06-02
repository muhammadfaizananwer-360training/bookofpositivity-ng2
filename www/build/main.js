webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, auth, user, alertCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.showLogin = true;
        this.email = '';
        this.password = '';
        this.name = '';
        this.imgWidth = "100%";
        this.imgHeight = "63px";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginPage Page');
    };
    /*
    for both of these, if the right form is showing, process the form,
    otherwise show it
    */
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.showLogin) {
            console.log('process login');
            if (this.email === '' || this.password === '') {
                var alert_1 = this.alertCtrl.create({
                    title: 'Register Error',
                    subTitle: 'All fields are rquired',
                    buttons: ['OK']
                });
                alert_1.present();
                return;
            }
            var loader_1 = this.loadingCtrl.create({
                content: "Logging in..."
            });
            loader_1.present();
            localStorage.setItem("email", this.email);
            localStorage.setItem("password", this.password);
            var obj = {
                url: "http://localhost:4000/auth/login",
                method: 'POSt',
                data: { 'email': localStorage.getItem("email"), 'password': localStorage.getItem("password") }
            };
            __WEBPACK_IMPORTED_MODULE_5_axios___default()(obj)
                .then(function (json) {
                console.log("json", json);
                var user = json.data;
                localStorage.setItem("token", user.token);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                loader_1.dismissAll();
            })
                .catch(function (error) {
                console.log("catching error");
                console.log(error);
                loader_1.dismissAll();
            });
            //       this.http.post("http://localhost:4000/auth/login", {email:this.email, password:this.password})
            //       .map((success)=>{
            //         console.log(success)
            //       })
            //       .catch((error)=>{
            // console.log(error)
            //       })  
            // this.auth.login('basic', {'email':this.email, 'password':this.password}).then(() => {
            //   console.log('ok i guess?');
            //   loader.dismissAll();
            //   this.navCtrl.setRoot(HomePage);                
            // }, (err) => {
            //   loader.dismissAll();
            //   console.log(err.message);
            // let errors = '';
            // if(err.message === 'UNPROCESSABLE ENTITY') errors += 'Email isn\'t valid.<br/>';
            // if(err.message === 'UNAUTHORIZED') errors += 'Password is required.<br/>';
            // let alert = this.alertCtrl.create({
            //   title:'Login Error', 
            //   subTitle:errors,
            //   buttons:['OK']
            // });
            // alert.present();
            // });
        }
        else {
            this.showLogin = true;
        }
    };
    LoginPage.prototype.doRegister = function () {
        var _this = this;
        if (!this.showLogin) {
            console.log('process register');
            /*
            do our own initial validation
            */
            if (this.name === '' || this.email === '' || this.password === '') {
                var alert_2 = this.alertCtrl.create({
                    title: 'Register Error',
                    subTitle: 'All fields are rquired',
                    buttons: ['OK']
                });
                alert_2.present();
                return;
            }
            // let details: UserDetails = {'email':this.email, 'password':this.password, 'name':this.name};
            // console.log(details);
            // let loader = this.loadingCtrl.create({
            //   content: "Registering your account..."
            // });
            var obj = {
                url: "http://localhost:4000/auth/signup",
                method: 'POSt',
                // body: { 'email': this.email, 'password': this.password, 'name': this.name },
                data: { 'email': this.email, 'password': this.password, 'name': this.name }
            };
            __WEBPACK_IMPORTED_MODULE_5_axios___default()(obj)
                .then(function (json) {
                console.log("json", json);
                //loader.dismissAll();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                console.log("catching error");
                console.log(error);
            });
            // fetch("http://localhost:4000/auth/signup", obj )
            // .then(response =>response)
            // .then(response => response.json())
            // .then(json => {console.log("json", json)})
            // .catch(error => {
            //     console.log("catching error")
            //     console.log(error)
            // })
            // loader.present();
            // this.auth.signup(details).then(() => {
            //   console.log('ok signup');
            //   this.auth.login('basic', {'email':details.email, 'password':details.password}).then(() => {
            //     loader.dismissAll();
            //     this.navCtrl.setRoot(HomePage);
            //   });
            // }, (err:IDetailedError<string[]>) => {
            //   loader.dismissAll();
            //   let errors = '';
            //   for(let e of err.details) {
            //     console.log(e);
            //     if(e === 'required_email') errors += 'Email is required.<br/>';
            //     if(e === 'required_password') errors += 'Password is required.<br/>';
            //     if(e === 'conflict_email') errors += 'A user with this email already exists.<br/>';
            //     //don't need to worry about conflict_username
            //     if(e === 'invalid_email') errors += 'Your email address isn\'t valid.';
            //   }
            //   let alert = this.alertCtrl.create({
            //     title:'Register Error', 
            //     subTitle:errors,
            //     buttons:['OK']
            //   });
            //   alert.present();
            // });
        }
        else {
            this.showLogin = false;
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Projects\Ionic2\bookofpositivity\src\pages\login\login.html"*/'<ion-content padding class="login-bg letsstart">\n\n  <span class="logo center" style="margin: 0 auto;">\n\n    <img src="assets/icon/book-animated-logo.gif" />\n\n  </span>\n\n\n\n  <div *ngIf="showLogin">\n\n    <ion-card>\n\n      <div class="login-logo-bg"></div>\n\n      <div class="card-title">\n\n        <ion-list class="login-bg">\n\n          <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <div *ngIf="!showLogin">\n\n\n\n    <ion-card>\n\n      <div class="login-logo-bg">\n\n        <!-- <img alt="Company Logo1" src="assets/img/360trainingWhiteLogo.png"> --></div>\n\n      <div class="card-title">\n\n        <ion-list class="login-bg">\n\n          <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n  <div class="">\n\n    <div padding>\n\n      <button ion-button color="primary" full (click)="doLogin()">Login</button>\n\n      <button ion-button color="primary" full (click)="doRegister()">Register</button>\n\n    </div>\n\n    <!--<button ion-button secondary menuToggle>Toggle Menu</button>-->\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Projects\Ionic2\bookofpositivity\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["c" /* User */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_todoStore__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_twitter__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_socket_io__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_axios__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var store = new __WEBPACK_IMPORTED_MODULE_4__store_todoStore__["a" /* TodoStore */]();
var HomePage = (function () {
    function HomePage(navCtrl, user, auth, twitter, http, socketio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.auth = auth;
        this.twitter = twitter;
        this.http = http;
        this.socketio = socketio;
        this.newItem = 'test';
        this.storeitems = store.items;
        this.items = [];
        //socket: Socket;
        this.result = '';
        this.items = [];
        this.myuser = {};
        this.userdetail = {};
        socketio.on('reaction', function (obj) {
            console.log(obj);
            delete obj['comments'];
            _this.items = _this.items.map(function (post) {
                if (post._id == obj._id) {
                    obj.comments = post.comments;
                    return obj;
                }
                return post;
            });
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        var obj = {
            url: "http://localhost:4000/api/user",
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        };
        __WEBPACK_IMPORTED_MODULE_8_axios___default()(obj)
            .then(function (json) {
            _this.userdetail = json.data.user._id;
            _this.myuser = json.data.user.name;
            console.log("json", _this.userdetail);
        })
            .catch(function (error) {
            console.log("catching error");
            console.log(error);
        });
        var obj1 = {
            url: "http://localhost:4000/api/post?id=all",
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("token")
            },
        };
        __WEBPACK_IMPORTED_MODULE_8_axios___default()(obj1)
            .then(function (json) {
            console.log("json", json);
            _this.items = json.data.posts;
        })
            .catch(function (error) {
            console.log("catching error");
            console.log(error);
        });
    };
    /*
      getHomeTimeline(){
          
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin','*');
        headers.append("Access-Control-Allow-Headers","*");
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        headers.append('Content-Type', 'application/json');
       headers.append('authentication', `${student.token}`);
     
         let options       = new RequestOptions({ headers: headers }); // Create a request option
    */
    /* return this.http
        .put(url, JSON.stringify(student), options)
    this.twitter.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      {
        count: 5
      },
      
      {
        consumerKey: 'PmqKQQdxBJfv55f48lD7TBEvQ',
        consumerSecret: 'QSGZpsIZZuWV7eNXRHPFKQHzsBtFUS7c5B9vzHf3X6Ubww7tiL'
      },
      {
        token: '197361591-NnPyDsekBd6S24ITSY8SABVoccLmAXZi6dlr45X3',
        tokenSecret: 'UiY1OzmWBx6L9NxyhkVlZTyTfgFmessoPmV2ePwma6okR'
      },
    
  ).subscribe((res)=>{
      this.result = res.json().map(tweet => tweet.text);
  });
  }
  */
    HomePage.prototype.lovecounter = function (postId) {
        console.log(postId);
        console.log(this.items);
        postId = postId;
        this.postIdIndex = -1;
        this.postIdIndex = this.postIdIndex = this.items.map(function (post) { return post._id; })
            .indexOf(postId);
        var happy = this.items[this.postIdIndex].happy;
        if (this.postIdIndex != -1 && (!happy || happy && happy.uuid && (!happy.uuid.length || happy.uuid.length > 0 && happy.uuid.indexOf(this.userdetail) == -1)))
            this.socketio.emit("happy", postId);
        else
            console.log("already marked happy");
    };
    HomePage.prototype.postComment = function (val) {
        console.log(val);
    };
    HomePage.prototype.unhappycounter = function (postId) {
        postId = postId;
        this.postIdIndex = -1;
        this.postIdIndex = this.items.map(function (post) { return post._id; })
            .indexOf(postId);
        var unhappy = this.items[this.postIdIndex].unhappy;
        if (this.postIdIndex != -1 && (!unhappy || unhappy && unhappy.uuid && (!unhappy.uuid.length || unhappy.uuid.length > 0 && unhappy.uuid.indexOf(this.userdetail) == -1)))
            this.socketio.emit("unhappy", postId);
        else
            console.log("already marked unhappy");
    };
    /*
            lovecounter() {
      this.nCnt = this.nCnt + 1;
    }
  
    unhappycounter() {
      this.hCnt = this.hCnt + 1;
    }*/
    /*
    socket.on('commented', (comments) => {
        console.log(comments)
        posts.map((post) => {
            if (post._id == comments.postId) {
                post.comments = comments
            }
        })
        renderPosts(posts)
    })
      */
    HomePage.prototype.addItem = function (newItem) {
        /*this.items.push({
          text: this.newItem,
          img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png",
          title: "Woody"
        });*/
        var _this = this;
        var obj = {
            url: "http://localhost:4000/api/post",
            method: 'POSt',
            headers: {
                'Authorization': localStorage.getItem("token")
            },
            data: {
                description: this.newItem,
                img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png",
                title: this.myuser
            }
        };
        __WEBPACK_IMPORTED_MODULE_8_axios___default()(obj)
            .then(function (json) {
            console.log("json", json);
            json.data.post.name = _this.myuser;
            _this.items.push(json.data.post);
        })
            .catch(function (error) {
            console.log("catching error");
            console.log(error);
        });
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Projects\Ionic2\bookofpositivity\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <ion-title>Home</ion-title> -->\n    <!-- <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <span class="center">\n    <img src="assets/icon/book-animated-logo.gif" width="200"/>\n  </span>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Postive Thought here!</ion-label>\n      <ion-input type="text" class="new-todo" placeholder="What needs to be done?" autofocus autofocus [(ngModel)]="newItem" (click)="addItem()"></ion-input>\n\n    </ion-item>\n  </ion-list>\n<!-- <button (click)="getHomeTimeline()">get/home_timeline</button> -->\n        <p>{{result}}</p>\n  <div>\n    <button ion-button color="primary" block class="add" (click)="addItem()">Post your Positive Thought!</button>\n  </div>\n</ion-header>\n\n<ion-content class="home" padding>\n\n   <h2>Welcome back, {{ user.details.name }}</h2>\n  <h2>Welcome to Book of Positivity! Give and Receive Positivity</h2>\n  <h3>Social Experiment of Passive Positivity</h3>\n  <p>\n    Where You Discover Happiness <br /> Pay It Forward. Thank You!\n  </p>\n\n\n  <section class="main">\n    \n    <ion-list>\n      <ion-list-header>Today</ion-list-header>\n      <ion-item *ngFor="let item of items">\n        <ion-avatar item-start>\n          <img src={{item.img}}>\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <p class="comment">{{item.description}}</p>\n        <p><input type="text" name="comment" id="comment+item._id" placeholder="comment" />\n          <button type="submit" name="post" (click)="postComment($event)" id="post">Post</button></p>\n        \n        <!-- <p><input type="text" value="comment" /></p> -->\n        \n          \n          <!-- <ion-input type="text" value="comment"></ion-input> -->\n          \n        \n        <span><button href="javascript:;" (click)="lovecounter(item._id)"><ion-icon name="md-heart"></ion-icon>Happy&nbsp;{{item.happy && item.happy.happy ? item.happy.happy : 0}}</button></span> \n        <!-- <span><a href="javascript:;" onclick="lovecounter()"><ion-icon name="md-thumbs-up"></ion-icon></a></span> -->\n        <span><a href="javascript:;" (click)="unhappycounter(item._id)"><ion-icon name="md-thumbs-down"></ion-icon>Unhappy&nbsp;{{item.unhappy && item.unhappy.unhappy? item.unhappy.unhappy : 0}}</a></span>\n             \n        <!-- <custom-counter [(counter)]="counterValue"></custom-counter> -->\n        <ion-note item-end>3:43 pm</ion-note>\n      </ion-item>\n    </ion-list>\n\n    <!--   <ul class="todo-list">\n      <li *ngFor=" let item of items">\n        <div class="view">\n          <label>{{item.text}}</label>\n          <span><img src={{item.img}} /></span>\n          <h2>{{item.title}}</h2>\n        </div>\n      </li>\n    </ul> -->\n  </section>\n\n</ion-content>'/*ion-inline-end:"C:\Projects\Ionic2\bookofpositivity\src\pages\home\home.html"*/,
        styleUrls: ['/pages/home/home.scss'],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["c" /* User */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_5_ng2_twitter__["a" /* TwitterService */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6_ng2_socket_io__["Socket"]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 238;

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projects\Ionic2\bookofpositivity\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Ratings" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Login" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Projects\Ionic2\bookofpositivity\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, _formBuilder) {
        this.navCtrl = navCtrl;
        this._formBuilder = _formBuilder;
    }
    AboutPage.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            username: ['Mazhar', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(12)]],
            password: [],
            email: [],
            name: [],
            address: this._formBuilder.group({
                street: [],
                city: [],
                postalcode: [],
                phone: []
            })
        });
    };
    /* userForm = new FormGroup({
      
      username: new FormControl('Mazhar', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
      password: new FormControl('fa12345@', [Validators.required]),
      email: new FormControl('Mazhar@gmail.com', [Validators.required]),
      name: new FormControl('Mazhar', [Validators.required]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
      })
    }); */
    AboutPage.prototype.onsubmit = function () {
        console.log(this.userForm.value);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Projects\Ionic2\bookofpositivity\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="profile-bg letsstart">\n  <span class="logo center"><img src="assets/icon/bop-icon.png" /></span>\n  <form [formGroup]="userForm" (ngSubmit)="onsubmit()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" value="" class="form-control" formControlName="username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" value="" class="form-control" formControlName="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" value="" class="form-control" formControlName="email"></ion-input>\n      </ion-item>\n\n      <div formGroupName="address">\n        <ion-item>\n          <ion-label floating>Street</ion-label>\n          <ion-input type="text" value="" class="form-control" formControlName="street"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>City</ion-label>\n          <ion-input type="text" value="" class="form-control" formControlName="city"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Postal Code</ion-label>\n          <ion-input type="text" value="" class="form-control" formControlName="postalcode"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Phone number (Optional - to use within the app)</ion-label>\n          <ion-input type="number" value="" class="form-control" formControlName="phone"></ion-input>\n        </ion-item>\n      </div>\n\n    </ion-list>\n  </form>\n\n  <div padding>\n    <button ion-button color="primary" block>Register</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Projects\Ionic2\bookofpositivity\src\pages\about\about.html"*/,
        styles: [""]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Projects\Ionic2\bookofpositivity\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ratings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding class="rating-bg letsstart">\n  <span class="logo center" style="margin: 0 auto;">\n    <img src="assets/icon/bop-icon.png" />\n  </span>\n  <h2>Welcome to Book of Positivity! Give and Receive Positivity</h2>\n  <h3>Social Experiment\nof Passive Positivity</h3>\n<ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n\n   <ion-list>\n\n    <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" value=""></ion-input>\n      </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>Sign In</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Projects\Ionic2\bookofpositivity\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(521);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_socket_io__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_twitter__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















/* import { AuthService} from '../providers/auth-service/auth-service'; */
var cloudSettings = {
    'core': {
        'app_id': 'ea3a3cee'
    }
};
var url = "http://localhost:4000/";
// const url = "https://bookofpositivity.herokuapp.com/"
var token = localStorage.token;
/*var socket = io.connect(url, {
    query: 'token=' + token
});*/
var config = { url: url, options: { query: 'token=' + token } };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["b" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_5_ng2_socket_io__["SocketIoModule"].forRoot(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_twitter__["a" /* TwitterService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (_this.auth.isAuthenticated()) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projects\Ionic2\bookofpositivity\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Projects\Ionic2\bookofpositivity\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["a" /* Auth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TodoItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoStore; });
var TodoItem = (function () {
    function TodoItem() {
    }
    return TodoItem;
}());

var TodoStore = (function () {
    function TodoStore() {
        this.items = [];
    }
    TodoStore.prototype.addItem = function (newItem) {
        this.items.push({
            text: newItem,
            img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png",
            title: "Woody"
        });
    };
    return TodoStore;
}());

//# sourceMappingURL=todoStore.js.map

/***/ })

},[516]);
//# sourceMappingURL=main.js.map