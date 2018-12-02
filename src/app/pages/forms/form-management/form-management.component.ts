import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
    selector: 'ngx-form-management',
    styleUrls: ['./form-management.component.scss'],
    templateUrl: './form-management.component.html',
})
export class FormManagmentComponent {

    // smart table
    // ref: https://akveo.github.io/ng2-smart-table/#/documentation
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
    source: LocalDataSource = new LocalDataSource();

    constructor(
        private smartTableService: SmartTableService,
    ) {
        // smart table
        const data = this.smartTableService.getData();
        this.source.load(data);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onUserRowSelect(event): void {
        // go to edit page
        console.log(event);
    }
}
