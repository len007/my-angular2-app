import { Injectable } from '@angular/core';
@Injectable()
export class RandomService{
    num1: number;
    num2: number;
    constructor(){
        this.num1 = Math.random();
    }
    num(){
        this.num2 = Math.random();
        return this.num2;
    }
}