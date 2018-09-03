import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

/**
 * 使用 http的方式获取后端数据，然后用rxjs的map进行处理
 * 最后使用Observable订阅，异步传输数据，响应式编程
 * @export
 * @class myhttpService
 */
@Injectable()
export class myhttpService {
    classUrl: any = 'data/class.json';
    constructor(private http: Http) { }
    getData(): Observable<any> {
        return this.http.get(this.classUrl).pipe(
            map((res: Response) => {
                return res.text()?res.json():null;
            }))
    }
}