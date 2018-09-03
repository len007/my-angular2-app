import { Injectable } from "@angular/core";
import { Jsonp, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError, retry } from 'rxjs/operators';

@Injectable()
export class myJsonpService {
    classUrl: any = 'data/class.json';
    constructor(private jsonp: Jsonp) { }
    getData(): Observable<any> {
        return this.jsonp.get(this.classUrl).pipe(
            retry(2),
            map((res: Response) => {
                return res.text();
            }));
    }
}