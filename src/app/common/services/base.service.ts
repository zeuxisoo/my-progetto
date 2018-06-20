import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class BaseService {

    protected apiUrl: any = {};

    constructor(
        protected client: HttpClient,
        protected toastrService: ToastrService
    ) {
        this.apiUrl = environment.apiUrl;
    }

    protected handleError<T>(operation, result?: T) {
        return (error: any): Observable<T> => {
            console.log(`operation: ${operation}, error: ${error}`);

            if (error instanceof HttpErrorResponse) {
                const response = error as HttpErrorResponse;

                if (response.status === 404) {
                    this.toastrService.error(`File not found: ${response.url}`);
                }else{
                    this.toastrService.error(`Unknown error: ${response.status}, messae: ${response.statusText}`);
                }
            }

            return of(result as T);
        }
    }

}
