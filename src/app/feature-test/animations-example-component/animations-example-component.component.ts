import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
@Component({
    moduleId: module.id,
    selector: 'animations-example-component',
    templateUrl: 'animations-example-component.component.html',
    styleUrls: ['animations-example-component.component.css'],
    animations: [
        trigger('buttonStatus', [
            state('on', style({
                color: '#0f2',
                transform: 'scale(1.2)'
            })),
            state('off', style({
                color: '#f00',
                transform: 'scale(1)'
            })),
            transition('off => on', animate('100ms ease-in')),
            transition('on => off', animate('100ms ease-out')),
        ])
    ]
})
export class AnimationsExampleComponentComponent {
    status: string = 'on';
    toggleStatus() {
        this.status = (this.status === 'on') ? 'off' : 'on';
    }
}
