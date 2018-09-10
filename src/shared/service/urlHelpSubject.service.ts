import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class urlHelpSubjectService {
    private url: string = ''
    valueUpdated: Subject<any> = new Subject<any>();
    constructor() { }
    setUrl(val) {
        this.url = val;
        this.valueUpdated.next(val);
    }
    getUrl(): string {
        return this.url;
    }

}