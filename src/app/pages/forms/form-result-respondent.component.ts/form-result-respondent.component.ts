import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Form } from '../../entity/form/form';

@Component({
    styleUrls: ['./form-result-respondent.component.scss'],
    selector: 'ngx-form-result-respondent',
    templateUrl: './form-result-respondent.component.html',
})
export class FormResultRespondentComponent {

    formId: any;
    form: Form;
    respondentId: any;

    respondentTime: any;
    questionNumber: any;

    constructor(
        private router: Router,
    ) {
        this.formId = this.router.url.substr(this.router.url.indexOf('/') + 1);
        this.respondentId = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);

    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        this.getrespondentForm();
    }

    getrespondentForm() {
        // api : get Respondent Result by formId and respondentId
        this.setCard();
    }

    setCard() {
        this.respondentTime = 0;
        this.questionNumber = 0;
    }

    redirectToFormsManagement() {
        window.location.href = `#/pages/forms/result`;
    }

    showModal(respondentId) {
    }
}
