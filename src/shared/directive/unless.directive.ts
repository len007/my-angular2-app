import { Directive, OnInit, Input, OnChanges } from '@angular/core';
import { TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[myUnless]'
})
export class UnlessDirective implements OnInit, OnChanges {
    @Input('myUnless') isShow: boolean;
    private tRef: TemplateRef<any>;   // 这两个变量可以定义也可以不定义，
    private vCRef: ViewContainerRef;  // 因为构造函数的传入参数加上private可以直接使用
    constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
        console.log(viewContainerRef);
        console.log(templateRef);
        this.tRef = templateRef;
        this.vCRef = viewContainerRef;
    }
    ngOnInit(){ }
    ngOnChanges(){
        console.log(this.isShow);
        if(this.isShow){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }else {
            this.vCRef.clear();  // vCRef的引用地址其实和viewContainerRef是同一个
        }
    }
}
