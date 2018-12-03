import { Question } from './question';

export class Form {
    name: any;
    description: any;
    questions: Array<Question> = [];
    constructor() {
        this.name = '';
        this.description = '';
    }
}
