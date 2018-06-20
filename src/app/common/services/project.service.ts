import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { BaseService } from './base.service';
import { Project } from '../models/project.model';

@Injectable()
export class ProjectService extends BaseService {

    public getProjects(): Observable<any> {
        return this.client.get(this.apiUrl.projects).pipe(
            map(projects => {
                return (projects as Project[]).sort((a, b) => {
                    return (+b.id) - (+a.id)
                });
            }),
            catchError(this.handleError('getProjects', {}))
        );
    }

    public getProject({ id }): Observable<any> {
        return this.getProjects().pipe(
            map(projects => {
                return projects.filter(project => project.id == id)[0]
            }),
            catchError(this.handleError('getProject', {}))
        );
    }

}
