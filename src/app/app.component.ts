import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { myCommonService } from './mycommon.service';
import { Subscription } from "rxjs";
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin: boolean = false;
  isLoging: boolean = true;
  userName: String = '';
  subscription: Subscription;
  constructor(private router: Router, private myStatus: myCommonService) { }

  disLogin() { // 注销
    this.isLogin = false;
    this.userName = '';
    sessionStorage.setItem('isLogin', 'false');
    sessionStorage.setItem('userName', '');
    this.router.navigate(['/login']);
    this.myStatus.sendStatus({ isLogin: false, isLoging: true, userName: '' });
  }
  showLoginModal() {
    if (!this.isLoging) {
      this.isLogin = false;
      this.isLoging = true;
      this.userName = '';
      this.myStatus.sendStatus({ isLogin: false, isLoging: true, userName: '' });
    }
  }
  ngOnInit() {
    this.isLogin = sessionStorage.getItem('isLogin') === 'true' ? true : false;
    this.userName = sessionStorage.getItem('userName') ? sessionStorage.getItem('userName') : '';
    if (this.isLogin) {
      this.router.navigate(['/list']);
    } else {
      this.router.navigate(['/login']);
    }
    this.subscription = this.myStatus.mySubject.asObservable().subscribe(data => {
      this.isLoging = data['isLoging'];
      this.isLogin = this.isLogin || data['isLogin'];
      this.userName = this.userName || data['userName'];
      if (this.isLogin && this.userName) {
        this.router.navigate(['/list']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
