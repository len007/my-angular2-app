import { Component, OnInit, OnChanges } from '@angular/core';
import { ContactService } from '../../shared/service/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: "list-label",
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
    allData: any;
    contacts: Array<any>;
    pageParams: any = {
        pageNo: 1,
        pageSize: 13,
        total: 0,
    };
    constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }
    ngOnInit() {
        let tmpAllData = sessionStorage.getItem('allData');
        if (tmpAllData) {
            this.allData = JSON.parse(tmpAllData);
            this.pageParams.total = JSON.parse(tmpAllData).total;
            this.getPageData(this.allData);
        } else {
            this.getContacts();
        }
    }
    ngOnChanges() {

    }
    changePageData(event) {
        this.pageParams = event;
        this.getPageData(this.allData);
    }

    getPageData(data) {
        if (this.pageParams.pageSize && this.pageParams.pageNo) {
            if (this.pageParams.pageSize * this.pageParams.pageNo <= data.total) {
                this.contacts = data['contacts'].slice(this.pageParams.pageSize * (this.pageParams.pageNo - 1), this.pageParams.pageSize * this.pageParams.pageNo);
            } else {
                this.contacts = data['contacts'].slice(this.pageParams.pageSize * (this.pageParams.pageNo - 1), data.total);
            }
        }
    }
    // 获取所有联系人
    getContacts() {
        this.contactService.getContactsData().subscribe(data => {
            console.log(data);
            if (data) {
                this.allData = data;
                this.pageParams.total = this.allData.total;
                sessionStorage.setItem('allData', JSON.stringify(this.allData));
                this.getPageData(this.allData);
            } else {
                alert('获取通讯录失败！')
            }
        });
    }

    // 跳转至联系人详情页
    goDetail(id) {
        this.router.navigate(['/detail', id]);
    }

    // 跳转至添加页面
    goAdd() {
        this.router.navigate(['/list/add']);
    }

    // 收藏/取消收藏
    collecting(id) {
        this.allData.contacts.forEach((value, index) => {
            if (value.id === id) {
                this.allData.contacts[index].collection = this.allData.contacts[index].collection ? 0 : 1;
                sessionStorage.setItem('allData', JSON.stringify(this.allData));
            }
        })
    }
}
