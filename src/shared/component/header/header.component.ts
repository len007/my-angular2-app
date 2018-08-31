import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-content',
    moduleId: module.id,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    current: string = 'list';
    constructor(private router: Router) { }
    ngOnInit() {
        this.current = 'list';
        if(window.location.href.indexOf('list') > 0){
            this.current = 'list';
        }else if (window.location.href.indexOf('collection') > 0){
            this.current = 'collection';
        }else if(window.location.href.indexOf('feature') > 0){
            this.current = 'feature';
        }
    }
    goCollections() {
        this.current = 'collection';
        this.router.navigate(['/len/collection']);
    }
    goLists() {
        this.current = 'list';
        this.router.navigate(['/len/list']);
    }
    goFeature() {
        this.current = 'feature';
        this.router.navigate(['/len/feature']);
    }
}
