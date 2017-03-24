import {Component} from '@angular/core';

import {ConstantsService} from './../../services/constants.service';

@Component({
    selector: 'footer-app',
    templateUrl :'./footer.html',
    styles:[`
        .footer-custom{
            position:absolute;
            width: 100%;
            bottom: 0;
            margin-bottom:unset;
            min-height:unset;
            line-height:50px;
        }
    `],
    providers: [ConstantsService]
})


export class FooterComponent{

    private version:string = '';
    private env:string = '';

    constructor(private constantsService:ConstantsService){
        this.version = constantsService.VERSION
        this.env = constantsService.ENVIRONMENT
    }
    

}


