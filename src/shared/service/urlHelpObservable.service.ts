import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class urlHelpObservableService {
    private url: string = '';
    myObserver:any;
    valueUpdated: Observable<any> = new Observable<any>();
    constructor() { }
    setUrl(val) {
        this.url = val;
    }
    getUrl(): Observable<any> {
        return this.valueUpdated;
    }

}