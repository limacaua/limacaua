import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

import { from, Observable,throwError } from 'rxjs';
import {catchError,flatMap,map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClienteDados {

  private apiPath:string= "api/cliente"

  constructor(private http: HttpClient) { }


}
