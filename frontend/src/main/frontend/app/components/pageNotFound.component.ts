import {Component} from '@angular/core';
import {HttpModule} from '@angular/http';

declare var process:any;

@Component({
    selector: 'not-found-page',
    template: 
    `
    <div class="row">
        <div class="col-md-12 notfound">
            Page Not Found
        </div>
    </div>
    `,
    styles: [`
        .notfound{
            text-align: center;
        }
    `]
})


export class PageNotFoundComponent{
}


