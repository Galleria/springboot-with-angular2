import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: 
    `
    <div>
        <header-app></header-app>
        <router-outlet class="container col-md-12"></router-outlet>
        <footer-app></footer-app>
    </div>
    `
})

export class AppComponent {

}

