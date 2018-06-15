import { Component, OnInit } from '@angular/core';

import { Project } from '../common/models/project.model';
import { ProjectService } from '../common/services/project.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public projects: Array<Project>;

    constructor(
        private projectService: ProjectService
    ) { }

    ngOnInit() {
        this.projectService
            .getProjects()
            .subscribe(projects => {
                this.projects = projects;
            });
    }

}
