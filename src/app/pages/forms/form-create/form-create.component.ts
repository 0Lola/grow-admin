import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { Form } from './../../entity/form/form';
import { Question } from '../../entity/form/question';
import swal from 'sweetalert2';
@Component({
    selector: 'ngx-form-create',
    styleUrls: ['./form-create.component.scss'],
    templateUrl: './form-create.component.html',
})
export class FormCreateComponent {

    mode: string;
    formId: any;
    form: Form;

    constructor(private router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.formId = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
                if (this.formId === 'create') {
                    this.init();
                    this.mode = 'Create';
                } else {
                    // api: getFormById
                    this.init();
                    this.mode = 'Edit';
                }
            }
        });
    }

    init() {
        this.form = new Form();
        this.form.questions.push(new Question());
    }

    newQuestion() {
        this.form.questions.push(new Question());
    }

    deleteQuestion(index) {
        swal({
            title: 'Are you sure?',
            text: `Delete Question ${index + 1}`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.value) {
                this.form.questions.splice(index, 1);
            }
        });
    }

    saveForm() {
        // api: saveForm
        this.redirectToFormsManagement();
    }

    deleteForm() {
        swal({
            title: 'Are you sure?',
            text: `Delete Form`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.value) {
                // api: deleteFormById
                this.redirectToFormsManagement();
            }
        });
    }

    redirectToFormsManagement() {
        window.location.href = `#/pages/forms/management`;
    }

}
