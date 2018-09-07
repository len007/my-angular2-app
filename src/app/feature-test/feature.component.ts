import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { urlHelpService } from '../../shared/service/urlhelp.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'feature-content',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
    currentMenu: string = 'grid';
    valueUpdated: Subject<string> = new Subject<string>();
    constructor(private router: Router, private urlHelp: urlHelpService) { }
    ngOnInit() {
        let urlArr = this.router.url.split('/');
        this.currentMenu = urlArr[urlArr.length - 1];
        this.urlHelp.setUrl(this.router.url);
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
}
