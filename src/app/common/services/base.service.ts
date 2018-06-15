import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from '../../../environments/environment';

@Injectable()
export class BaseService {

    protected apiUrl: any = {};

    constructor(protected client: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

}
