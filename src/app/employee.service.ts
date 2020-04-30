import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iemployee } from './Iemployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  results='';

  constructor(private httpc:HttpClient) { }

  public getPosts()
  {
    return this.httpc.get<any[]>('http://dummy.restapiexample.com/api/v1/employees');
  }
}
