import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
    moduleId: module.id,
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.css'],
    animations: [
        trigger('buttonStatus', [
            state('on', style({
                'transform': 'rotate(-8deg)'
            })),
            state('off', style({
                'transform': 'rotate(8deg)'
            })),
            transition('off => on', animate(1000,keyframes([
                style({  }),
            ]))),
            transition('on => off', animate(2000,keyframes([
                style({ transform: 'rotate(40deg)' }),
            ])))
        ])
    ]
})
export class AnimationsComponent {
    status: string = 'on';
    toggleStatus() {
        this.status = (this.status === 'on') ? 'off' : 'on';
    }
}
