import { Component } from '@angular/core';

import { About } from './about.model';

@Component({
    selector: 'as-about',
    templateUrl: 'app/about/about.html'
})
export class AboutComponent {
    public about: About;
    private list: About[];
    private showCompleted: Boolean;

    constructor() {
        this.showCompleted = true;
        this.about = new About('Add me to list!', false);
        this.list = [
            new About('Its cool'),
            new About('Hello', true)
        ];
    }

    addAbout() {
        this.list = this.list.concat(About.clone(this.about));
        this.about.clear();
    }

    delAbout(aboutIndex: number) {
        this.list = this.list.filter(
            (about, index) => index !== aboutIndex);
    }
}
