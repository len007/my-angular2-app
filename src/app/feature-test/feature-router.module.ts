import { Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';

export const FeatureRouterModule: Routes = [
    {
        path: '',
        component: FeatureComponent,
        children: [{
            path: '', pathMatch:'full', redirectTo: 'partvar'
        }, {
            path: 'grid', loadChildren: './grid/grid.module#GridModule'
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
        }, {
            path: '**', redirectTo: 'partvar'
        }]
    }
]
