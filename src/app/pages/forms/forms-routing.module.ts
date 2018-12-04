import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormManagmentComponent } from './form-management/form-management.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { FormResultComponent } from './form-result/form-result.component';
import { FormResultViewComponent } from './form-result-view.component.ts/form-result-view.component';
import { FormResultRespondentComponent } from './form-result-respondent.component.ts/form-result-respondent.component';

const routes: Routes = [{
    path: '',
    component: FormsComponent,
    children: [
        {
            path: 'management',
            component: FormManagmentComponent,
        },

        {
            path: 'create',
            component: FormCreateComponent,
        },
        {
            path: 'create/:id',
            component: FormCreateComponent,
        },
        {
            path: 'result',
            component: FormResultComponent,
        },
        {
            path: 'result/:id',
            component: FormResultViewComponent,
        },
        {
            path: 'respondent/:id/:respondentId',
            component: FormResultRespondentComponent,
        },
    ],
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
    FormsComponent,
    FormManagmentComponent,
    FormCreateComponent,
    FormResultComponent,
    FormResultViewComponent,
    FormResultRespondentComponent,
];
