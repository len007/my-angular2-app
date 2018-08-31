import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
@Component({
    selector: 'child-detector-content',
    templateUrl: './child.detector.component.html',
    styleUrls: ['./child.detector.component.css']
})
export class ChildDetectorComponent implements OnInit, OnChanges {
    detectionH2: string = '变化检测策略';
    isAuto: boolean = true;
    // detectionInt: number = 0;
    @Input() detectionInt: number;
    detectionObj: { name: string, score: number };
    @Input() detectionObjInput: { name: string, score: number };
    // 当使用OnPush策略时，若输入属性没有发生变化，组件的变化检测将会被跳过，可以提升应用性能
    changeDetection: ChangeDetectionStrategy.OnPush;
    constructor(private cdRef: ChangeDetectorRef) {
        this.detectionObj = {
            name: 'Bob',
            score: 1
        }
        // ChangeDetectorRef 主要有四个方法
        //     markForCheck()
        //     detach()  将该组件的变化检测器从变化检测树中分离，它将不再执行变化检测
        //     reattach()  重新添加已分离的变化检测器
        //     detectChanges()  从该组件到各个子组件执行一次变化检测
    }
    ngOnInit() { }
    ngOnChanges() {
        // 如果把另外一个detectionInt注释掉，就可以看出ngOnChanges没有时时捕获变化
        // 因为detectionObj是对象，只是值变化而非属性变化，OnPush策略是检测输入属性变化
        // console.log(this.detectionObj);
        // console.log('原值与传入值的引用是否相等：' + (this.detectionObj === this.detectionObjInput));
        if (this.detectionObj && this.detectionObjInput) {
            console.log('子组件原值：' + this.detectionObj['score'] + '~' + '传入值：' + this.detectionObjInput['score'])
        }
        this.detectionObj = this.detectionObjInput;  // 这里的= 其实是传引用，而非传值，所以在上一行的console.log是会看到两个score一直相等
    }
    changeDections(event) {
        this.isAuto = event;
        if (this.isAuto) {
            this.cdRef.reattach()
        } else {
            this.cdRef.detach()
            this.cdRef.detectChanges()
        }
    }
    freshData() { // 手动执行一次变化检测
        this.cdRef.detectChanges()
    }

}
