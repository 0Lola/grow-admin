import { Component, OnInit } from '@angular/core';
import { Form } from './../../entity/form/form';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Question } from '../../entity/form/question';

@Component({
  selector: 'ngx-form-create',
  styleUrls: ['./form-create.component.scss'],
  templateUrl: './form-create.component.html',
})
export class FormCreateComponent {
    
    form:Form = new Form;
    questions = this.form.questions;

    constructor(){

    }

    ngOnInit() {
        this.questions.push(new Question);
    }

    newQuestion(){
        this.questions.push(new Question);
    }

}
