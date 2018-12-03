import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountManagmentComponent } from './account-management/account-management.component';

const routes: Routes = [{
    path: '',
    component: AccountComponent,
    children: [
        // custom
        {
            path: 'management',
            component: AccountManagmentComponent,
        },
        {
            path: 'edit/:id',
            component: AccountManagmentComponent,
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
    AccountComponent,
    AccountManagmentComponent,
];
