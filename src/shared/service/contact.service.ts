import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
const CONTACT_URL = "data/contacts.json";

@Injectable()
export class ContactService {
    // 服务中注入服务
    constructor(private http:HttpClient) { }
    getContactsData(opts?: any): Observable<any> {
        return this.http.get(CONTACT_URL);
    }
}

