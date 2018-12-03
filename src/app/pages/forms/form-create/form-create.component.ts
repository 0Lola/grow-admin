import { Component } from '@angular/core';
import { Form } from './../../entity/form/form';
import { Question } from '../../entity/form/question';

@Component({
    selector: 'ngx-form-create',
    styleUrls: ['./form-create.component.scss'],
    templateUrl: './form-create.component.html',
})
export class FormCreateComponent {

    form: Form = new Form;
    questions = this.form.questions;

    constructor() {
        this.questions.push(new Question);

    }

    newQuestion() {
        this.questions.push(new Question);
    }

}
