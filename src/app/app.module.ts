import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

import { SharedModule } from './common/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProjectComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-full-width',
            preventDuplicates: true,
        }),
        SharedModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
