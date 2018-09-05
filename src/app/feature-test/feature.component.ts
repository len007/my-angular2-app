import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'feature-content',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit{
    currentMenu: string = 'grid';
    constructor(private router: Router){ }
    ngOnInit(){
        let urlArr = this.router.url.split('/');
        this.currentMenu = urlArr[urlArr.length-1];
    }
    goPartvar(){
        this.currentMenu = 'partvar';
        this.router.navigate(['/feature/partvar']);
    }
    goHtml5(){
        this.currentMenu = 'html5';
        this.router.navigate(['/feature/html5']);
    }
    goAnimation(){
        this.currentMenu = 'animation';
        this.router.navigate(['/feature/animation']);
    }
    goDetector(){
        this.currentMenu = 'detector';
        this.router.navigate(['/feature/detector']);
    }
    goPipe(){
        this.currentMenu = 'pipe';
        this.router.navigate(['/feature/pipe']);
    }
    goDirective(){
        this.currentMenu = 'directive';
        this.router.navigate(['/feature/directive']);
    }
    goService(){
        this.currentMenu = 'service';
        this.router.navigate(['/feature/service']);
    }
    goHttp(){
        this.currentMenu = 'http_jsonp_httpclient';
        this.router.navigate(['/feature/http_jsonp_httpclient']);
    }
}
