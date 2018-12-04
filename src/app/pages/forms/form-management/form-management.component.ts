import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import swal from 'sweetalert2';

@Component({
    selector: 'ngx-form-management',
    styleUrls: ['./form-management.component.scss'],
    templateUrl: './form-management.component.html',
})
export class FormManagmentComponent {

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

    deleteForm(event) {
        swal({
            title: 'Are you sure?',
            text: `Delete Form ${event.data['id']}`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.value) {
                // api: deleteFormById
            }
        });
    }

    openEditForm(event) {
        // this.router.navigateByUrl(`./edit/${event.data['id']}`);
        window.location.href = `#/pages/forms/edit/${event.data['id']}`;
    }
}
