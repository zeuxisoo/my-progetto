import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProjectService } from './services/project.service';

import { TitleLinkPipe } from './pipes/project.pipe';

import { AppErrorsHandler } from './handlers/app-error.handler';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    declarations: [
        TitleLinkPipe
    ],
    exports: [
        TitleLinkPipe,
    ],
    providers: [
        ProjectService,
        {
            provide: ErrorHandler,
            useClass: AppErrorsHandler,
        }
    ]
})

export class SharedModule {

}
