import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class BaseService {

    protected apiUrl: any = {};

    constructor(
        protected client: HttpClient
    ) {
        this.apiUrl = environment.apiUrl;
    }

}
