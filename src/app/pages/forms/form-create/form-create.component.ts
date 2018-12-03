import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Form } from './../../entity/form/form';
import { Question } from '../../entity/form/question';

@Component({
    selector: 'ngx-form-create',
    styleUrls: ['./form-create.component.scss'],
    templateUrl: './form-create.component.html',
})
export class FormCreateComponent {

    formId: any;
    form: Form;

    constructor(private router: Router) {
        if (this.router.url.includes('create')) {
            this.init();
        } else if (this.router.url.includes('edit')) {
            this.formId = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
            // get form by id api
            this.init();
        }
    }

    init() {
        this.form = new Form();
        this.form.questions.push(new Question());
    }

    newQuestion() {
        this.form.questions.push(new Question());
    }

    saveQuestion() {
        // save
    }

    deleteQuestion() {
        // delete
    }

    saveForm() {
        // save form api
        // this.router.navigateByUrl('/form-management');
        window.location.href = `#/pages/forms/management`;
    }
    deleteForm() {
        // delete form api
        // this.router.navigateByUrl('./form-management');
        window.location.href = `#/pages/forms/management`;
    }

    backToFormsList() {
        // this.router.navigateByUrl('./form-management');
        window.location.href = `#/pages/forms/management`;
    }

}
