import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'css3.component.html',
    styleUrls: ['css3.component.css']
})

export class Css3Component implements OnInit {
    tabArray: Array<any>;
    currentTab:number = 1;
    constructor() { }

    ngOnInit() {
        this.tabArray = [
            'transform', 'Flex'
        ]
    }
    clickOpen(i){
        this.currentTab = i;
    }
}