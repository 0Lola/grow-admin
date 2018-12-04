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

    respondentNumber: any;
    questionNumber: any;

    users: { name: string, title: string }[] = [
        { name: 'Carla Espinosa', title: 'Nurse' },
        { name: 'Bob Kelso', title: 'Doctor of Medicine' },
        { name: 'Janitor', title: 'Janitor' },
        { name: 'Perry Cox', title: 'Doctor of Medicine' },
        { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
    ];

    activeModal: any;

    constructor(
        private router: Router,
    ) {
        this.formId = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        this.getResultFormById();
    }

    getResultFormById() {
        // api: getResultFormById
        this.setCard();
    }

    setCard() {
        this.respondentNumber = 0;
        this.questionNumber = 0;
    }

    redirectToFormsManagement() {
        window.location.href = `#/pages/forms/management`;
    }

    showModal(respondentId) {
    }
}
