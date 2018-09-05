import { ContactService } from './../../shared/service/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'detail-content',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {
    contactId: number = 0;
    contactIndex: number = 0;
    contact: any;
    allData: any;
    isLoading: boolean = false;
    isEdit: boolean = false;
    constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }
    ngOnInit() {
        this.contact = null;
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.contactId = parseInt(params['id']);
            } else {  // 如果url中不带ID参数，则返回list页
                this.goList()
            }

        })
        let tmpAllData = sessionStorage.getItem('allData');
        if(tmpAllData){
            this.allData = JSON.parse(tmpAllData);
            this.getDetailContact();
        }else{
            this.getContactsData();
        }
    }
    ngOnChanges() { }
    getDetailContact(){
        this.allData.contacts.forEach((value,index) => {
            // console.log(typeof(value.id)+"-"+typeof(this.contactId));
            if (value.id === this.contactId) {
                this.contact = value;
                this.contactIndex = index;
            }
        });
        if (!this.contact) { // 如果根据ID查询为空，则返回list页
            this.goList()
        }
    }
    getContactsData() {
        this.isLoading = true;
        this.contactService.getContactsData().subscribe(data => {
            if (data) {
                this.allData = data;
                sessionStorage.setItem('allData', JSON.stringify(data));
                this.getDetailContact();
                this.isLoading = false;
            } else {
                alert('获取通讯录数据失败，请稍后再试！');
                this.isLoading = false;
            }
            this.isLoading = false;
        })
    }
    goList(){
        this.router.navigate(['/list']);
    }
    paramsValid(){
        if(this.contact.name && this.contact.telNum && this.contact.email){
            return true;
        }else{
            return false;
        }
    }
    onSubmit(){
        if(this.paramsValid()){
            this.allData.contacts[this.contactIndex] = this.contact;
            sessionStorage.setItem('allData',JSON.stringify(this.allData));
            this.goList();
        }else{
            alert('参数有误，请重新输入！');
            return false;
        }
    }
    edit(event){
        this.isEdit = event;
    }
}
