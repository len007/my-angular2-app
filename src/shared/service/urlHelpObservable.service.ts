import { Injectable } from "@angular/core";

@Injectable()
export class urlHelpObservableService {
    private url: string = '';
    myObserver:any={
        next: data=>{
            this.url = data;
        }
    };
    constructor() { }
    setUrl(val) {
        this.url = val;
        this.myObserver.next(val);
    }
    getUrl() {
        return this.url;
    }

}