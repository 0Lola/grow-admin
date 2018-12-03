import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
    selector: 'ngx-account-setting',
    styleUrls: ['./account-setting.component.scss'],
    templateUrl: './account-setting.component.html',
})
export class AccountSettingComponent {

    // smart table
    // ref: https://akveo.github.io/ng2-smart-table/#/documentation
    source: LocalDataSource = new LocalDataSource();
    settings = {
        hideSubHeader: true,
        actions: {
            edit: false,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            id: {
                title: 'ID',
                type: 'number',
            },
            firstName: {
                title: 'Form Name',
                type: 'string',
            },
            lastName: {
                title: ' Type',
                type: 'string',
            },
            username: {
                title: 'Numbers',
                type: 'number',
            },
            email: {
                title: 'Creator',
                type: 'string',
            },
            age: {
                title: 'E-mail',
                type: 'string',
            },
        },
    };


    constructor(
        private smartTableService: SmartTableService,
    ) {
        const data = this.smartTableService.getData();
        this.source.load(data);
    }

    deleteUser(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    openEditUser(event) {
        // this.router.navigateByUrl(`./edit/${event.data['id']}`);
        window.location.href = `#/pages/account/management`;
    }
}
