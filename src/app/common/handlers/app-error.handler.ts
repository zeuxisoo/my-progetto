import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppErrorsHandler implements ErrorHandler {

    constructor(
        private injector: Injector
    ) { }

    private get toastrService(): ToastrService {
        return this.injector.get(ToastrService);
    }

    public handleError(error: Error | HttpErrorResponse) {
        if (error instanceof HttpErrorResponse) {
            const response = error as HttpErrorResponse;

            if (response.status === 404) {
                this.toastrError(`File not found: ${response.url}`);
            }else{
                this.toastrError(`Unknown error: ${response.status}, messae: ${response.statusText}`);
            }
        }
    }

    protected toastrError(message: string, title?: string) {
        this.toastrService.error(message, title, {
            closeButton: false,
            timeOut: 5000,
            onActivateTick: true
        });
    }

}
