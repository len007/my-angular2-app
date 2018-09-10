import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    moduleId: module.id,
    templateUrl: './observable.component.html',
    styles:['mark{background-color:#eee;color:red}']
})
export class ObservableComponent implements OnInit {
    observerA: any = { // 定义观察者 A
        next: data => console.log('我是观察者A，我抽到的数字是' + data),// 收到订阅以后执行的事件
        error: error => console.error(error), // 运行出现异常的处理
        complete: () => console.log('我是观察者A，我已经结束了！')  // 观察者结束时会被调用
    };
    observerB: any = { // 定义观察者 B
        next: data => console.log('我是观察者B，我抽到的数字是' + data),// 收到订阅以后执行的事件
        error: error => console.error(error),
        complete: () => console.log('我是观察者B，我已经结束了！')
    }
    constructor() { }
    ngOnInit() {
        let myObservable = new Observable();
        myObservable.subscribe(this.observerA);
        this.observerA.next('qq');
    }

}