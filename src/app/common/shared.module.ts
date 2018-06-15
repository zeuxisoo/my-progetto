import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProjectService } from './services/project.service';


@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [],
    exports: [
    ],
    providers: [
        ProjectService
    ]
})

export class SharedModule {

}
