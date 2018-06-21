import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

import { Project } from '../common/models/project.model';
import { ProjectService } from '../common/services/project.service';

import { projectItemAnimation } from '../common/animations/project.animation';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [ projectItemAnimation ]
})
export class HomeComponent implements OnInit {

    public projects: Array<Project>;
    public projectsLength: number;

    constructor(
        private projectService: ProjectService
    ) { }

    ngOnInit() {
        this.projectService
            .getProjects()
            .subscribe(projects => {
                this.projects = projects;
                this.projectsLength = projects.length;
            });
    }

}
