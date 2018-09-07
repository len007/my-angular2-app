import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class urlHelpService {
    private url: string = ''
    valueUpdated: Subject<string> = new Subject<string>();
    constructor() { }
    setUrl(val) {
        
        this.valueUpdated.next(val);
    }
    getUrl(): string {
        return this.url;
    }

}