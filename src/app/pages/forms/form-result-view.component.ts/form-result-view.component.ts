import { Router } from '@angular/router';
import { Component } from '@angular/core';

// form
import { Form } from './../../entity/form/form';

@Component({
    styleUrls: ['./form-result-view.component.scss'],
    selector: 'ngx-form-result-view',
    templateUrl: './form-result-view.component.html',
})
export class FormResultViewComponent {

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

    constructor(private router: Router) {
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
        history.go(-1);
    }

    viewRespond(respondentId) {
        window.location.href = `#/pages/forms/respondent/${this.formId}/${respondentId}`;

    }
}
