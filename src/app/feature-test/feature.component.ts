import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { urlHelpObservableService } from '../../shared/service/urlHelpObservable.service';

@Component({
    selector: 'feature-content',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
    currentMenu: string = 'grid';
    constructor(private router: Router, private urlHelpObservable: urlHelpObservableService) { }
    ngOnInit() {
        let urlArr = this.router.url.split('/');
        this.currentMenu = urlArr[urlArr.length - 1];
        // this.urlHelpObservable.setUrl(this.router.url);
        setTimeout(() => {
            this.urlHelpObservable.setUrl(this.router.url);
            // this.urlHelpObservable.setUrl('list');
        }, 2000);
    }
    goPrototype(){
        this.currentMenu = 'prototype';
        this.router.navigate(['/feature/prototype']);
    }
    goCss3() {
        this.currentMenu = 'css3';
        this.router.navigate(['/feature/css3']);
    }
    goHtml5() {
        this.currentMenu = 'html5';
        this.router.navigate(['/feature/html5']);
    }
    goPartvar() {
        this.currentMenu = 'partvar';
        this.router.navigate(['/feature/partvar']);
    }
    goAnimation() {
        this.currentMenu = 'animation';
        this.router.navigate(['/feature/animation']);
    }
    goDetector() {
        this.currentMenu = 'detector';
        this.router.navigate(['/feature/detector']);
    }
    goPipe() {
        this.currentMenu = 'pipe';
        this.router.navigate(['/feature/pipe']);
    }
    goDirective() {
        this.currentMenu = 'directive';
        this.router.navigate(['/feature/directive']);
    }
    goService() {
        this.currentMenu = 'service';
        this.router.navigate(['/feature/service']);
    }
    goHttp() {
        this.currentMenu = 'http_jsonp_httpclient';
        this.router.navigate(['/feature/http_jsonp_httpclient']);
    }
    goSubject() {
        this.currentMenu = 'subject';
        this.router.navigate(['/feature/subject']);
    }
}
