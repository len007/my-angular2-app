import { Component, OnInit } from "@angular/core";
import { Subject, BehaviorSubject, AsyncSubject, ReplaySubject } from "rxjs";

@Component({
    moduleId: module.id,
    templateUrl: './subject.component.html',
    styles:['mark{background-color:#eee;color:red}']
})
export class SubjectComponent implements OnInit {
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
        this.mySubject()
        this.myReplaySubject();
        this.myAsyncSubject();
        this.myBehaviorSubject();
    }

    /**
     * 1.定义 主题(Subject)
     * 2.定义 观察者
     * 3.注册 观察者
     * 4.广播主题
     * 
     * Subject属于热观察者模式
     * 在特定时期注册的观察者是接收不到之前广播的数据的！
     *
     * @memberof ObservableComponent
     */
    mySubject() {
        console.log('Subject() ------------------- Start');
        let mySubject: Subject<any> = new Subject<any>();
        mySubject.subscribe(this.observerA);
        mySubject.next(1);
        mySubject.next(2);
        mySubject.next(3);
        mySubject.subscribe(this.observerB);
        console.log('Subject() ------------------- End');
    }
    /**
     * 
     * 为特定时间注册的观察者重新发送之前的广播(可以设定次数)
     * 只要设定了值，任何小于1的值视为等于1
     * 不设定的话，视为重复所有广播
     * @memberof ObservableComponent
     */
    myReplaySubject() {
        console.log('ReplaySubject(2) ---------------- Start');
        let n = 2;
        let myReplaySubject = new ReplaySubject<any>(n);
        myReplaySubject.subscribe(this.observerA);
        myReplaySubject.next(1);
        myReplaySubject.next(2);
        myReplaySubject.next(3);
        myReplaySubject.subscribe(this.observerB);
        console.log('ReplaySubject(2) ---------------- End');
    }
    /**
     * 1.定义 主题(Subject)，需要设定一个初始值
     * 2.定义 观察者
     * 3.注册 观察者
     * 4.广播主题
     *
     * 保存最新的状态，并向之后注册的观察者发送最新的值
     * @memberof ObservableComponent
     */
    myBehaviorSubject() {
        console.log('BehaviorSubject(9) ---------------- Start');
        let myBehaviorSubject = new BehaviorSubject<any>(9);
        myBehaviorSubject.subscribe(this.observerA);
        myBehaviorSubject.next(1);
        myBehaviorSubject.next(2);
        myBehaviorSubject.next(3);
        myBehaviorSubject.subscribe(this.observerB);
        console.log('BehaviorSubject() ---------------- End');
    }
    /**
     *
     * 类似于last操作符，它会在Subject结束后发送最后一个值
     * 
     * @memberof ObservableComponent
     */
    myAsyncSubject() {
        console.log('AsyncSubject() ---------------- Start');
        let myAsyncSubject = new AsyncSubject<any>();
        myAsyncSubject.subscribe(this.observerA);
        myAsyncSubject.next(1);
        myAsyncSubject.next(2);
        myAsyncSubject.next(3);
        myAsyncSubject.complete();
        myAsyncSubject.subscribe(this.observerB);
        console.log('AsyncSubject() ---------------- End');
    }
}