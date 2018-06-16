import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProjectService } from './services/project.service';

import { TitleLinkPipe } from './pipes/project.pipe';

@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [
        TitleLinkPipe
    ],
    exports: [
        TitleLinkPipe
    ],
    providers: [
        ProjectService
    ]
})

export class SharedModule {

}
