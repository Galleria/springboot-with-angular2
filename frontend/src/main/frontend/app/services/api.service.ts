import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ConstantsService} from './constants.service';

@Injectable()
export class ApiService {
    
    constructor (private http: Http, private ConstantsService: ConstantsService) {

    }

}