
export class Card {
    title: string;
    iconClass: string;
    type: string;
    value: string;
    constructor(title?: string, iconClass?: string, type?: string, value?: string) {
        this.title = title;
        this.iconClass = iconClass;
        this.type = type;
        this.value = value;
    }
}
