import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { myCommonService } from '../mycommon.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    downloadDataOneTimes: boolean = true;
    selectDateTime: Date;
    nowDate: Date;
    fileName: String = '';
    @ViewChild('orginForm')
    orginForm: ElementRef;
    inputPageNo: number = 1;
    pages: any = {
        pageSize: 10,
        pageNo: 1,
        total: 0,
        maxPageNo: 0
    }
    items: Array<any>;
    constructor(private router: Router, private http: Http,
        private httpC: HttpClient, private myStatus: myCommonService) {
            let tt = new Date();
            this.selectDateTime = new Date(this.formatterDate2(tt));
            this.nowDate = new Date(this.formatterDate1(tt));
        }
    ngOnInit() {
        this.searchForTime();
    }
    formatterDate1(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
    }
    formatterDate2(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate() - 1;
        return y + '/' + (m < 10 ? ('0' + m) : m) + '/' + (d < 10 ? ('0' + d) : d);
    }
    formatterDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + '/' + (m < 10 ? ('0' + m) : m) + '/' + (d < 10 ? ('0' + d) : d);
    }
    downloadData() {
        if (this.selectDateTime >= this.nowDate) {
            alert('不支持下载当天及以后的数据！');
            return;
        }
        this.downloadDataOneTimes = false;
        let downloadUrl = $('#downloadUrl').val();
        let nowTime = this.formatterDate(this.selectDateTime);
        downloadUrl = downloadUrl + "?nowTime=" + nowTime;
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
            alert('系统繁忙，请稍后再试！');
        });
    }
    // 根据日期查询
    searchForTime() {
        if (this.selectDateTime >= this.nowDate) {
            alert('不支持查询当天及以后的数据！');
            return;
        }
        let nowTime = this.formatterDate(this.selectDateTime);
        let searchUrl = $('#searchUrl').val();
        let params = new HttpParams()
            .set('nowTime', nowTime.toString())
            .set('pageSize', this.pages.pageSize)
            .set('pageNum', this.pages.pageNo);
        this.httpC.post(searchUrl.toString(), params).subscribe(res => {
            if (res['code'] === '1') {
                let result = JSON.parse(res['msg']);
                this.items = result['listPHData'] || {};
                this.pages.total = result['countNum'] || 0;
                this.getMaxPageNo();
            } else {
                alert('系统繁忙，请稍后再试！');
            }
        }, error => {
            alert('系统繁忙，请稍后再试！');
        });
    }
    selectedFileOnChanged(event) {
        this.fileName = event.target.value;
    }
    uploadFileAction() {
        let uploadUrl = $('#uploadUrl').val();
        var mark = this.orginForm.nativeElement.mark.value;
        var file = this.orginForm.nativeElement.file.files[0];
        var fm = new FormData();
        fm.append('mark', mark);
        fm.append('file', file);
        let headers = new Headers({
            "Accept": "application/json"
        });
        let options = new RequestOptions({ headers: headers });
        this.http.post(uploadUrl.toString(), fm, options).subscribe(res => {
            let result = res.json();
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