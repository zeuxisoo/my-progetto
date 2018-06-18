import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../common/models/project.model';
import { ProjectService } from '../common/services/project.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    public project: Project;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private projectService: ProjectService
    ) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;

        this.projectService
            .getProject({
                id: id
            })
            .subscribe(project => {
                this.project = project;
            });
    }

    previousPage() {
        this.location.back();
    }

}
