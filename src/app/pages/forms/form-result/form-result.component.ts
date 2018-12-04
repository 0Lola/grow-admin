import { Router } from '@angular/router';
import { Component } from '@angular/core';

// form
import { Form } from './../../entity/form/form';
import { Question } from '../../entity/form/question';

// card
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { Card } from '../../entity/card';


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
    numberCard: Card;
    questionCard: Card;
    commonStatusCardsSet: Card[];
    cards: string;
    cardsTheme: { corporate: Card[] };

    constructor(
        private router: Router,
        private themeService: NbThemeService) {

        // card
        this.initCard();
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => true))
            .subscribe(theme => {
                this.cards = this.cardsTheme[theme.name];
            });

        // form
        // api: getResultFormById
        this.resultFormId = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
        this.initForm();


    }

    initForm() {
        this.form = new Form();
        this.form.questions.push(new Question());
    }

    initCard() {
        this.numberCard = new Card('Respondent', 'nb-compose', 'primary', '123');
        this.questionCard = new Card('Question', 'nb-lightbulb', 'danger', '123');
        this.commonStatusCardsSet = [
            this.numberCard,
            this.questionCard,
        ];
        this.cardsTheme = {
            corporate: [
                {
                    ...this.numberCard,
                },
                {
                    ...this.questionCard,
                },
            ],
        };

    }

    redirectToFormsManagement() {
        window.location.href = `#/pages/forms/management`;
    }

}
