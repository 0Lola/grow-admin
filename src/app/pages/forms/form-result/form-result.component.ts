import { Router } from '@angular/router';
import { Component } from '@angular/core';

// form
import { Form } from './../../entity/form/form';

@Component({
    selector: 'ngx-form-result',
    styleUrls: ['./form-result.component.scss'],
    templateUrl: './form-result.component.html',
})
export class FormResultComponent {

    // form
    resultFormId: any;
    form: Form;

    // card
    respondentNumber: any;
    questionNumber: any;

    // respondent
    users: { name: string, title: string }[] = [
        { name: 'Carla Espinosa', title: 'Nurse' },
        { name: 'Bob Kelso', title: 'Doctor of Medicine' },
        { name: 'Janitor', title: 'Janitor' },
        { name: 'Perry Cox', title: 'Doctor of Medicine' },
        { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
    ];

    constructor(private router: Router) {
        this.resultFormId = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
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
}
