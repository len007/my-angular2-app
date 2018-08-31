import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
declare var jQuery: any;

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    selectDateTime: String = "2018-01-01";
    fileName: String = '';
    @ViewChild('orginForm')
    orginForm: ElementRef;
    inputPageNo: number = 1;
    pages: any = {
        pageSize: 6,
        pageNo: 1,
        total: 15,
        maxPageNo: 0
    }
    items: Array<any>;
    constructor(private http: Http) { }
    ngOnInit() {
        this.getMaxPageNo();
        this.items = [{
            name: '张三',
            tel: '15111111111',
            age: 20,
        }, {
            name: '李四',
            tel: '15222222222',
            age: 30
        }, {
            name: '王子',
            tel: '15333333333',
            age: 40
        }]
        this.reloadDateBox();
    }
    downloadData() {
        let downloadUrl = jQuery('#downloadUrl').val();
        this.http.get(downloadUrl, { responseType: 3 }).subscribe(res => {
            let data = res.json();
            var blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            var objectUrl = URL.createObjectURL(blob);
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display:none');
            a.setAttribute('href', objectUrl);
            a.setAttribute('download', 'excle文件');
            a.click();
            document.body.removeChild(a);
            //释放URL地址
            URL.revokeObjectURL(objectUrl);
        }, error => {
            // console.log(error);
            alert('系统繁忙，请稍后再试！');
        });
    }
    reloadDateBox() {
        // 初始化日历控件
        jQuery.fn.datebox.defaults.currentText = '今天';
        jQuery.fn.datebox.defaults.closeText = '关闭';
        jQuery.fn.datebox.defaults.okText = '确定';
        jQuery.fn.datebox.defaults.value = this.selectDateTime;
        // 重写-解析日期字符串的函数
        jQuery.fn.datebox.defaults.parser = function (s) {
            if (!s) return new Date();
            var ss = (s.split('-'));
            var y = parseInt(ss[0], 10);
            var m = parseInt(ss[1], 10);
            var d = parseInt(ss[2], 10);
            if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
                return new Date(y, m - 1, d);
            } else {
                return new Date();
            }
        }
        // 重写-格式化日期的函数
        jQuery.fn.datebox.defaults.formatter = function (date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
        }
    }
    // 根据日期查询
    searchForTime() {
        console.log(jQuery('.textbox-value').val());
    }
    selectedFileOnChanged(event) {
        this.fileName = event.target.value;
    }
    uploadFileAction() {
        let uploadUrl = jQuery('#uploadUrl').val();
        var mark = this.orginForm.nativeElement.mark.value;
        var file = this.orginForm.nativeElement.file.files[0];
        console.log('file', file);
        var fm = new FormData();
        fm.append('mark', mark);
        fm.append('file', file);
        let headers = new Headers({
            "Accept": "application/json"
        });
        let options = new RequestOptions({ headers: headers });
        this.http.post(uploadUrl, fm, options).subscribe(res => {
            console.log(res.status);
            let result = res.json();
            console.log(result);
            if (result.success) {
                alert('上传成功');
            } else {
                alert('上传失败');
            }
        }, error => {
            alert('系统繁忙，请稍后再试！');
        });
    }
    getMaxPageNo() {
        this.pages.maxPageNo = Math.ceil(this.pages.total / this.pages.pageSize);
    }
    chagePageBefore() { // 上一页
        if (this.pages.pageNo > 1) {
            this.pages.pageNo -= 1;
            this.inputPageNo = this.pages.pageNo;
        }
    }
    chagePageNext() {  // 下一页
        if (this.pages.pageNo < this.pages.maxPageNo) {
            this.pages.pageNo += 1;
            this.inputPageNo = this.pages.pageNo;
        }
    }
    chagePages() {  // 跳转到固定页
        if (this.inputPageNo > 0 && this.inputPageNo <= this.pages.maxPageNo) {
            this.pages.pageNo = this.inputPageNo;
        } else {
            this.inputPageNo = this.pages.pageNo;
            alert('请输入有效页码！');
        }
    }
}