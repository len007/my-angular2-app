import { Component, ElementRef, ViewChild, OnInit, AfterContentChecked } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'
import { CookieService } from 'ngx-cookie';

import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  userInfo: any = {};
  isLogin: boolean = false;
  isLoging: boolean = true;
  userName: String = '';
  passWord: String = '';
  uploadDataOneTimes: boolean = true;
  fileName: String = '';
  @ViewChild('orginForm')
  orginForm: ElementRef;


  items: Array<any>;
  constructor(private http: Http, private httpC: HttpClient, private cookie: CookieService) { }
  stopPropagation(event) {
    event.stopPropagation();
  }
  hideLoginModal() {
    this.isLoging = false;
  }
  onSubmit() {
    let loginUrl = $('#loginUrl').val().toString();
    if (this.userName && this.passWord && loginUrl) {
      let params = new HttpParams()
        .set('username', this.userName.toString())
        .set('password', this.passWord.toString());
      this.httpC.post(loginUrl, params).subscribe(res => {
        let result = res;
        if (result['success']) {
          this.userInfo = { isLogin: true, userName: this.userName };
          this.cookie.putObject('_user', this.userInfo, { storeUnencoded: false });
          this.isLogin = true;
        } else {
          alert('账号验证失败！');
          this.passWord = '';
        }
      }, error => {
        alert('系统繁忙，请稍后再试！');
      });
    } else {
      alert('请输入账号和密码');
    }
  }

  selectedFileOnChanged(event) {
    this.fileName = event.target.value;
  }

  uploadFileAction() {
    this.uploadDataOneTimes = false;
    let uploadUrl = $('#uploadUrl').val();
    var mark = this.orginForm.nativeElement.mark.value;
    var file = this.orginForm.nativeElement.file.files[0];
    var fm = new FormData();
    fm.append('mark', mark);
    fm.append('file', file);
    let headers = new Headers({
      "Accept": "application/json"
    });
    let options = new RequestOptions({ headers: headers });
    this.http.post(uploadUrl.toString(), fm, options).subscribe(res => {
      let result = res.json();
      if (result['code'] === '1') {
        alert('上传成功');
      } else {
        alert('上传失败，请稍后再试！');
      }
      this.uploadDataOneTimes = true;
    }, error => {
      alert('系统繁忙，请稍后再试！');
      this.uploadDataOneTimes = true;
    });
  }
  
  disLogin() { // 注销
    this.isLogin = false;
    this.userName = '';
    this.cookie.removeAll();
  }
  showLoginModal() {
    if (!this.isLoging) {
      this.isLogin = false;
      this.isLoging = true;
      this.userName = '';
    }
  }
  changeURL() {
    var text = window.location.href;
    text.toString();
    var url = text.replace(/\/#/, "/index.html#");
    window.history.pushState({}, "0", url);
  }
  ngAfterContentChecked() {
    this.changeURL();
  }
  ngOnInit() {
    this.userInfo = this.cookie.getObject('_user');
    if (this.userInfo && this.userInfo['isLogin'] && this.userInfo['userName']) {
      this.isLogin = this.userInfo['isLogin'];
      this.userName = this.userInfo['userName'];
    }
  }
}
