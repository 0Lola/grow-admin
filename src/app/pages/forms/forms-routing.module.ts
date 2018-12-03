import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
// custom
import { FormManagmentComponent } from './form-management/form-management.component';
import { FormCreateComponent } from './form-create/form-create.component';

const routes: Routes = [{
    path: '',
    component: FormsComponent,
    children: [
        // custom
        {
            path: 'management',
            component: FormManagmentComponent,
        },
        {
            path: 'create',
            component: FormCreateComponent,
        },
        {
            path: 'edit/:id',
            component: FormCreateComponent,
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
    // default
    FormsComponent,
    // custom
    FormManagmentComponent,
    FormCreateComponent,
];
