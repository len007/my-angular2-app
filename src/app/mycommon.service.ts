import { Injectable } from "@angular/core";
import { ReplaySubject, Observable, Subject } from "rxjs";

@Injectable()
export class myCommonService {
    // 这里之所以不用Subject，是想让新加入的观察者能接收到之前的一条广播
    mySubject: ReplaySubject<any> = new ReplaySubject<any>(1);
    constructor() { }
    sendStatus(val) {
        this.mySubject.next(val);
    }
    getStatus() {
        return this.mySubject.asObservable();
    }

}