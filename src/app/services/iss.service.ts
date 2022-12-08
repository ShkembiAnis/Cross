import { Injectable } from '@angular/core';
import {RequestService} from "./request.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IssService {

  constructor(private requestService: RequestService) { }

  public getISSLocation(): Observable<any>{
    return this.requestService.get('http://api.open-notify.org/iss-now.json');
  }
}
