import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountManagmentComponent } from './account-management/account-management.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

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
            path: 'setting/:id',
            component: AccountSettingComponent,
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
export class AccountRoutingModule {

}

export const routedComponents = [
    AccountComponent,
    AccountManagmentComponent,
    AccountSettingComponent,
];
