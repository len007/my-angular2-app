import { Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';

export const FeatureRouterModule: Routes = [
    {
        path: '',
        component: FeatureComponent,
        children: [{
            path: '', pathMatch: 'full', redirectTo: 'prototype'
        }, {
            path: 'prototype', loadChildren: './prototype/prototype.module#PrototypeModule'
        }, {
            path: 'subject', loadChildren: './subject/subject.module#SubjectModule'
        }, {
            path: 'html5', loadChildren: './html5/html5.module#Html5Module'
        }, {
            path: 'css3', loadChildren: './css3/css3.module#Css3Module'
        }, {
            path: 'partvar', loadChildren: './partvar/parent/parent.module#ParentModule'
        }, {
            path: 'animation',
            loadChildren: './animations/animations.module#AnimationsModule'
        }, {
            path: 'detector',
            loadChildren: './change-detector/parent-detector/parent.detector.module#ParentDetectorModule'
        }, {
            path: 'pipe',
            loadChildren: './pipe/diypipe.module#DiypipeModule'
        }, {
            path: 'directive',
            loadChildren: './directive/highlight.module#HighLightModule'
        }, {
            path: 'service',
            loadChildren: './service/mservice.module#MserviceService'
        }, {
            path: 'http_jsonp_httpclient',
            loadChildren: './http_jsonp_httpclient/index.module#indexModule'
        }, {
            path: '**', redirectTo: ''
        }]
    }
]
