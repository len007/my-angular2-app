import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
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
            map((res:Response)=>{return res}),
            catchError(this.handleError));
    }
}