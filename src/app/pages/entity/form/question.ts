import { Level } from './level';

export class Question {
    ID: any;
    name: any;
    description: any;
    levels: Array<Level> = [];
    constructor() {
        this.name = '';
        this.description = '';
        this.levels = Array(5).fill(new Level());
    }
}
