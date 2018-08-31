import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../shared/service/contact.service';

@Component({
    moduleId: module.id,
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
    selector: 'add-content'
})
export class AddComponent implements OnInit {
    addedOption: string = 'default';
    allData: any;
    moreOptions: any;
    contact: any = {
        id: '',
        name: '',
        telNum: '',
        address: '',
        email: '',
        birthday: '',
        collection: 0,
    }
    constructor(private router: Router, private contactService: ContactService) { }
    ngOnInit() {
        this.moreOptions = {
            'birthday': ['生日', true],
            'address': ['地址', true]
        }
        let tmpAllData = sessionStorage.getItem('allData');
        if(tmpAllData){
            this.allData = JSON.parse(tmpAllData);
        }else{
            this.getContacts();
        }
    }
    // 获取所有联系人
    getContacts() {
        this.contactService.getContactsData().subscribe(data => {
            console.log(data);
            if (data) {
                this.allData = data;
                sessionStorage.setItem('allData', JSON.stringify(this.allData));
            } else {
                alert('获取通讯录失败！')
            }
        });
    }
    
    goList() {
        this.router.navigate(['/len/list']);
    }
    addOption(event) {
        if (event === 'birthday') {
            this.moreOptions.birthday[1] = false;
        }
        else if (event === 'address') {
            this.moreOptions.address[1] = false;
        }
        this.addedOption = 'default';
    }
    removeOption(tmp) {
        this.moreOptions[tmp][1] = true;
    }
    paramsValid(){
        if(this.contact.name && this.contact.telNum && this.contact.email){
            return true;
        }else{
            return false;
        }
    }
    onSubmit() {
        this.contact.id = this.allData.contacts[this.allData.contacts.length-1].id + 1;
        if(this.paramsValid()){
            this.allData.contacts.push(this.contact);
            this.allData.total += 1;
            sessionStorage.setItem('allData',JSON.stringify(this.allData));
            this.goList();
        }else{
            alert('参数有误，请重新输入！');
            return false;
        }
    }
}
