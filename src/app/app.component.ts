import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin: boolean = false;
  isLoging: boolean = true;
  userName: String = '';
  passWord: String = ''

  constructor(private http: Http) { }
  onSubmit() {
    let loginUrl = jQuery('#loginUrl').val();
    if (this.userName && this.passWord && loginUrl) {
      let params = new URLSearchParams();
      params.append('username', this.userName.toString());
      params.append('password', this.passWord.toString());
      let headers = new Headers({
        "Accept": "application/json"
      });
      let options = new RequestOptions({ headers: headers });
      this.http.post(loginUrl, params, options).toPromise().then(res => {
        let result = res.json();
        if (result.success) {
          this.isLogin = true;
          sessionStorage.setItem('isLogin', 'true');
          sessionStorage.setItem('userName', this.userName.toString());
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

  stopPropagation(event) {
    event.stopPropagation();
  }
  disLogin() {
    this.isLogin = false;
    this.userName = '';
    this.passWord = '';
    sessionStorage.setItem('isLogin', 'false');
    sessionStorage.setItem('userName', '');
  }

  showLoginModal() {
    this.isLoging = true;
  }
  hideLoginModal() {
    this.isLoging = false;
  }
  ngOnInit() {
    this.isLogin = sessionStorage.getItem('isLogin') === 'true' ? true : false;
    this.userName = sessionStorage.getItem('userName') ? sessionStorage.getItem('userName') : '';
  }
}
