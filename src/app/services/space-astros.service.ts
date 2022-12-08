import { Injectable } from '@angular/core';
import {RequestService} from './request.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SpaceAstrosModel} from "../models/SpaceAstros";

@Injectable({
  providedIn: 'root'
})
export class SpaceAstrosService {

  constructor(private requestService: RequestService) { }

  public getSpaceAstros(): Observable<any>{
      return this.requestService.get('http://api.open-notify.org/astros.json');
  }

}
