import { Question } from './question';

export class Form {
    ID: any;
    name: any;
    description: any;
    questions: Array<Question> = [];
    constructor() {
        this.name = '';
        this.description = '';
    }
}
