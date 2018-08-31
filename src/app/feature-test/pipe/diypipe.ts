import { Pipe, PipeTransform } from '@angular/core';

// 自定义管道需在module中被引用才能使用
// 引入PipeTransform是为了继承transform方法
// 
@Pipe({
    name: 'diyMyPipe',
    // pure: true,
    pure: false  // 对于这个例子，使用false是会报错的因为传入的是对象的引用
})
export class DiyMyPipePipe implements PipeTransform{
    transform(args: any, prefix: string): any{
        let datas = [];
        args.forEach(value => {
            if(prefix === value['sex']){
                datas.push({name: value['name'],sex:value['sex']});
            }
        });
        return datas;
    }
}
