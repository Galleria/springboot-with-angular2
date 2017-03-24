import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsService {

    public BACKEND_URL: string
    public VERSION : string
    public ENVIRONMENT : string

    constructor() {
        this.BACKEND_URL = process.env.API_URL
        this.VERSION = process.env.VERSION
        this.ENVIRONMENT = process.env.ENV 

        console.log("process.env set to : " + process.env.ENV)
        console.log("Server url set to: " + this.BACKEND_URL)
        console.log("Version is : " + process.env.VERSION)
    }
}