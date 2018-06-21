import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../common/models/project.model';
import { ProjectService } from '../common/services/project.service';

import { projectPhotoThumbAnimation, previousPageButtonAnimation } from '../common/animations/project.animation';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    animations: [ projectPhotoThumbAnimation, previousPageButtonAnimation ]
})
export class ProjectComponent implements OnInit {

    public project: Project;
    public projectPhotoThumbsLength: number;

    public previousPageButtonState: string = 'hide';

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
                this.projectPhotoThumbsLength = project.photo.thumbs.length;
            });
    }

    previousPage() {
        this.location.back();
    }

    photoThumbAnimationDone(event) {
        this.previousPageButtonState = (this.previousPageButtonState === 'hide' ? 'show' : 'hide');
    }

}
