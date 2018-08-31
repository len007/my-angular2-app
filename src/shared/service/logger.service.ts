import { Injectable } from '@angular/core';
@Injectable()
export class LoggerService{
    log(first, ...value){      
        console.log(first, value);
    }
}