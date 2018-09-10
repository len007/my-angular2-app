import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { urlHelpSubjectService } from '../../service/urlHelpSubject.service';
import { urlHelpObservableService } from '../../service/urlHelpObservable.service';

@Component({
    selector: 'header-content',
    moduleId: module.id,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    current: string = 'list';
    routerUrl: String = '';
    
    constructor(private router: Router, private urlHelpSubject: urlHelpSubjectService, private urlHelpObservable: urlHelpObservableService) { }
    ngOnInit() {
        this.current = 'list';
        // this.urlHelpSubject.valueUpdated.subscribe(val=>{
        //     this.routerUrl = this.urlHelpSubject.getUrl()||window.location.href;
        //     // console.log(this.routerUrl);
        //     if(window.location.href.indexOf('list') > 0){
        //         this.current = 'list';
        //     }else if (window.location.href.indexOf('collection') > 0){
        //         this.current = 'collection';
        //     }else if(window.location.href.indexOf('feature') > 0){
        //         this.current = 'feature';
        //     }
        // })

        this.urlHelpSubject.valueUpdated.subscribe(val=>{
            this.routerUrl = this.urlHelpSubject.getUrl()||window.location.href;
            // console.log(this.routerUrl);
            if(window.location.href.indexOf('list') > 0){
                this.current = 'list';
            }else if (window.location.href.indexOf('collection') > 0){
                this.current = 'collection';
            }else if(window.location.href.indexOf('feature') > 0){
                this.current = 'feature';
            }
        })
        
        // 这里不能使用this.router.url来获取url，因为还没加载出来
        if(window.location.href.indexOf('list') > 0){
            this.current = 'list';
        }else if (window.location.href.indexOf('collection') > 0){
            this.current = 'collection';
        }else if(window.location.href.indexOf('feature') > 0){
            this.current = 'feature';
        }
    }
    ngAfterContentInit(){
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
        this.router.navigate(['/collection']);
    }
    goLists() {
        this.current = 'list';
        this.router.navigate(['/list']);
    }
    goFeature() {
        this.current = 'feature';
        this.router.navigate(['/feature']);
    }
}
