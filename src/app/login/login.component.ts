import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { myCommonService } from '../mycommon.service';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    isLogin: boolean = false;
    isLoging: boolean = true;
    userName: String = '';
    passWord: String = '';
    subscription: Subscription;
    constructor(private myStatus: myCommonService, private http: Http) { }
    ngOnInit() {
        this.subscription = this.myStatus.mySubject.asObservable().subscribe(data => {
            this.isLogin = data['isLogin'];
            this.isLoging = data['isLoging'];
            this.userName = data['userName'];
        });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
    hideLoginModal() {
        this.isLoging = false;
        this.myStatus.sendStatus({ isLogin: false, isLoging: false, userName: this.userName });
    }
    onSubmit() {
        this.isLogin = true;
        sessionStorage.setItem('isLogin', 'true');
        sessionStorage.setItem('userName', this.userName.toString());
        this.myStatus.sendStatus({ isLogin: true, isLoging: false, userName: this.userName });
        let loginUrl = $('#loginUrl').val().toString();
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
                    this.myStatus.sendStatus({ isLogin: true, isLoging: false, userName: this.userName });
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
}