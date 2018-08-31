import { Directive, ElementRef, Renderer, Input, HostListener, OnInit } from '@angular/core';
@Directive({
    selector: '[highlight]'  // 选择器名称，必需，模板中的标志，类似于a标签的a。
})
export class HighLightDirective implements OnInit {
    private _domElement: any ;  // 指令所在的标签
    @Input('highlight') hlcolor: any;   // 这个装饰器指定的别名可以和选择器一致，可以不必再使用另外的名称来绑定输入变量
    @Input('fontSize') fontSize: any;  // 这个装饰器指定的别名和选择器不一致，所以在元素使用指令时需要用别名来绑定输入变量
    constructor(private elem: ElementRef){
        this._domElement = elem.nativeElement;
    }
    ngOnInit(){
        console.log('传进来的hlcolor类型是：' + typeof(this.hlcolor));
        console.log('传进来的hlcolor值为：' + this.hlcolor);
        this.hlcolor = JSON.parse(this.hlcolor);
    }

    // HostListener 是属性装饰器，用来为宿主元素添加事件监听，类似于javascript的addEventListener。
    @HostListener('mouseenter')
    onmouseenter999(){  // 这个方法名是可以随便取的
        this._domElement.style.backgroundColor = this.hlcolor['bgColor']|| 'red';
        this._domElement.style.color = this.hlcolor['color'] || 'blue';
        this.elem.nativeElement.style.fontSize = this.fontSize;
    }
    @HostListener('mouseleave')
    onmouseleave999(){  // 这个方法名是可以随便取的
        this.elem.nativeElement.style.backgroundColor = null;
        this.elem.nativeElement.style.color = null;
        this.elem.nativeElement.style.fontSize = null;
    }
}
