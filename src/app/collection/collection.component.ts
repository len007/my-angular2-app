import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/service/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { urlHelpSubjectService } from '../../shared/service/urlHelpSubject.service';

@Component({
    moduleId: module.id,
    selector: 'collections',
    templateUrl: './collection.component.html',
    styleUrls: ['../list/list.component.css']
})
export class CollectionComponent implements OnInit {
    allData: any = {};
    collections: Array<any>;
    pageParams: any = {
        pageNo: 1,
        pageSize: 3,
        total: 0,
    };
    constructor(private contactService: ContactService, private route: ActivatedRoute,
         private router: Router, private urlHelp: urlHelpSubjectService) { }
    ngOnInit() {
        let tmpAllData = sessionStorage.getItem('allData');
        if (tmpAllData) {
            this.allData = JSON.parse(tmpAllData);
            this.getCollectionsByContacts();
        } else {
            this.getContacts();
        }
        this.urlHelp.setUrl(this.router.url);
    }

    // 获取所有联系人
    getContacts() {
        this.contactService.getContactsData().subscribe(data => {
            if (data) {
                this.allData = data;
                this.pageParams.total = this.allData.total;
                sessionStorage.setItem('allData', JSON.stringify(this.allData));
                this.getCollectionsByContacts()
            } else {
                alert('获取通讯录失败！')
            }
        });
    }
    getCollections() {
        this.contactService.getContactsData().subscribe(data => {
            if (data) {
                sessionStorage.setItem('allData', JSON.stringify(data));
                this.allData = data;
                this.getCollectionsByContacts();
            } else {
                alert('数据获取失败！');
            }
        })
    }
    getCollectionsByContacts() {
        this.collections = [];
        this.allData.contacts.forEach(value => {
            if (value.collection) {
                this.collections.push(value);
            }
        });
        this.pageParams.total = this.collections.length;
        if (this.pageParams.pageSize && this.pageParams.pageNo) {
            if (this.pageParams.pageSize * this.pageParams.pageNo <= this.collections.length) {
                this.collections = this.collections.slice(this.pageParams.pageSize * (this.pageParams.pageNo - 1), this.pageParams.pageSize * this.pageParams.pageNo);
            } else {
                this.collections = this.collections.slice(this.pageParams.pageSize * (this.pageParams.pageNo - 1), this.collections.length);
            }
        }
    }
    // 跳转至联系人详情页
    goDetail(id) {
        console.log(id)
        this.router.navigate(['/detail', id]);
    }
    // 跳转至添加页面
    goAdd() {
        this.router.navigate(['/list/add']);
    }
    // 取消收藏
    uncollecting(id) {
        this.allData.contacts.forEach((value, index) => {
            if (value.id === id) {
                this.allData.contacts[index].collection = 0;
                sessionStorage.setItem('allData', JSON.stringify(this.allData));
            }
        })
        this.getCollectionsByContacts();
    }
    changePageData(event) {
        this.pageParams = event;
        this.getCollectionsByContacts();
    }
}
