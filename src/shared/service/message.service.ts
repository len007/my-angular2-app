import { Injectable } from "@angular/core";
import { ReplaySubject, Observable } from "rxjs";

@Injectable()
export class MessageService {
    // 这里之所以不用Subject，是想让新加入的观察者能接收到之前的一条广播
    private valueUpdated: ReplaySubject<any> = new ReplaySubject<any>(1);
    constructor() { }
    sendMessage(val:String) {
        this.valueUpdated.next(val);
    }
    clearMessage(){
        this.valueUpdated.next();
    }
    getMessage(): Observable<any> {
        return this.valueUpdated.asObservable();
    }

}