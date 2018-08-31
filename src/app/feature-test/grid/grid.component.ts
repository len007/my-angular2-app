import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
    selector: "grid-label",
    templateUrl: "./grid.component.html",
    styleUrls: ['grid.component.css'],
    moduleId: module.id
})
export class GridComponent implements OnInit, OnChanges, OnDestroy{
    gridArray: Array<any> = []
    ngOnInit(){
        this.gridArray = ['11','12','13','21','22','23','31'];
    }
    ngOnChanges(){}
    ngOnDestroy(){}
 }
 
