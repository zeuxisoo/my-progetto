import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

import { BaseService } from './base.service';

@Injectable()
export class ProjectService extends BaseService {

    public getProjects(): Observable<any> {
        return this.client.get(this.apiUrl.projects).pipe(
            map(project => {
                return project.sort((a, b) => {
                    return (+b.id) - (+a.id)
                });
            })
        );
    }

}
