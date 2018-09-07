import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, map, catchError } from "rxjs/operators";

@Injectable()
export class myhttpClientService {
    classUrl: any = 'data/class.json';
    constructor(private httpC: HttpClient) { }
    /**
     * 错误处理
     *
     * @private
     * @param {HttpErrorResponse} error
     * @returns
     * @memberof myhttpClientService
     */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // 客户端或者网络错误.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
    getData(): Observable<any> {
        return this.httpC.get(this.classUrl).pipe(
            retry(2),
            map((res: Response) => { return res }),
            catchError(this.handleError));
    }
    /**
     * FormData 格式的参数，参数不会显式出现在请求url中
     *
     * @returns {Observable<any>}
     * @memberof myhttpClientService
     */
    postFormData(): Observable<any> {
        let params = new HttpParams().set('test', 'test');
        // let options = { // 这个options可有可无
        //     headers: new HttpHeaders({
        //         'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        //     })
        // }
        return this.httpC.post(this.classUrl, params).pipe(
            retry(0),
            map((res: Response) => { return res }),
            catchError(this.handleError));
    }
    postRequestPayload(): Observable<any>{
        let params = new HttpParams({fromString: 'test=test'});
        let options = {
            headers: new HttpHeaders({
                'Content-Type':'multipart/form-data; charset=UTF-8'
            })
        }
        return this.httpC.post(this.classUrl,params,options);
    }
    /**
     * QueryStringParams 格式的参数
     *
     * @returns {Observable<any>}
     * @memberof myhttpClientService
     */
    postQueryString(): Observable<any> {
        let params = new HttpParams().set('test', 'test');
        // let options = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json; charset=UTF-8'
        //     }),
        //     params: params
        // };
        return this.httpC.post(this.classUrl,null, {params: params}).pipe(
            retry(0),
            map((res: Response) => { return res }),
            catchError(this.handleError));
    }
}