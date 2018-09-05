import { Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';

export const FeatureRouterModule: Routes = [
    {
        path: '',
        component: FeatureComponent,
        children: [{
            path: '', pathMatch:'full', redirectTo: 'partvar'
        }, {
            path: 'html5', loadChildren: './html5/html5.module#Html5Module'
        }, {
            path: 'partvar', loadChildren: './partvar/parent/parent.module#ParentModule'
        }, {
            path: 'animation', 
            loadChildren: './animations-example-component/animations-example-component.module#AnimationsExampleComponentModule'
        },{
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
        },{
            path: 'http_jsonp_httpclient',
            loadChildren: './http_jsonp_httpclient/index.module#indexModule'
        }, {
            path: '**', redirectTo: 'partvar'
        }]
    }
]
