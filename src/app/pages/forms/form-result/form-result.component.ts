import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
    selector: 'ngx-form-result',
    styleUrls: ['./form-result.component.scss'],
    templateUrl: './form-result.component.html',
})
export class FormResultComponent {

    // ref: https://akveo.github.io/ng2-smart-table/#/documentation
    resultForms: LocalDataSource = new LocalDataSource();
    resultFormsSettings = {
        hideSubHeader: true,
        actions: false,
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
        this.resultForms.load(data);
    }

    resultForm(event) {
        window.location.href = `#/pages/forms/result/${event.data['id']}`;
    }
}
