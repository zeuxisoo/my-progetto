import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BaseService } from './base.service';

@Injectable()
export class ProjectService extends BaseService {

    public getProjects(): Observable<any> {
        return this.client.get(this.apiUrl.projects)
    }

}
