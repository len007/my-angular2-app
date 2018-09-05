import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "html5-label",
    templateUrl: "./html5.component.html",
    styleUrls: ['html5.component.css']
})
export class Html5Component implements OnInit, OnChanges, OnDestroy {
    videoPaused: boolean = true;
    controls: boolean = true;
    videoWidth: number = 420;

    @ViewChild('myVideo') myVideo: ElementRef;
    ngOnInit() { }
    ngOnChanges() { }
    ngOnDestroy() { }
    /**
     * 这里之所以需要用ViewChild方法获取节点
     * 而不用[paused]绑定，是因为paused属性是只读的
     * 
     * @memberof Html5Component
     */
    playPause() {
        if(this.myVideo.nativeElement.paused){
            this.myVideo.nativeElement.play();
            this.videoPaused = false;
        } else{
            this.videoPaused = true;
            this.myVideo.nativeElement.pause();
        }
    }
    showCtr() {
        this.controls = !this.controls;
        // 这里有个延迟渲染的问题，如果不加setTimeout，两个值是不一致的
        setTimeout(() => { console.log(this.controls + "&" + this.myVideo.nativeElement.controls); }, 0);
    }
    makeBig() {
        this.videoWidth = 500;
    }
    makeNormal() {
        this.videoWidth = 420;
    }
    makeSmall() {
        this.videoWidth = 340;
    }
    nomenu(event){
        event.preventDefault();
    }
}

