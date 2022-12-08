import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  public get<T>(url: string){
    return this.httpClient.get<T>(url);
  }

  public post<T, S>(url: string, body: any){
    return this.httpClient.post<T>(url, body);
  }
}
