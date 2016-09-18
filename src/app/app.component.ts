import { Component } from '@angular/core';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html'
})
export class AppComponent {
    title = 'andyblackledge';
    showMenu: boolean = false;

    onMenuButtonClick() {
        this.showMenu = !this.showMenu;
    }

    onNavButtonClick() {
        this.showMenu = false;
    }
}
