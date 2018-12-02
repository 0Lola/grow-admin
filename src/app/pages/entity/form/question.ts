import { Level } from "./level";

export class Question {
    name: any;
    description: any;
    levels: Array<Level> = [];
    constructor(){
        this.name = '';
        this.description = '';
    }
}