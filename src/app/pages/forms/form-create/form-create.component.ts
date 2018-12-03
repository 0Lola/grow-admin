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

    form: Form = new Form();
    questions = this.form.questions;

    constructor(private router: Router) {
        this.questions.push(new Question);
    }

    newQuestion() {
        this.questions.push(new Question);
    }

    saveQuestion() {
        // save
    }

    deleteQuestion() {
        // delete
    }

    saveForm() {
        // save form api
        this.router.navigateByUrl('./form-management');
    }
    deleteForm() {
        // delete form api
        this.router.navigateByUrl('./form-management');
    }

    backToFormsList() {
        this.router.navigateByUrl('./form-management');
    }

}
