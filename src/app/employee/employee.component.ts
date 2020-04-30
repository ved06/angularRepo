import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Iemployee } from '../Iemployee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public response : any;

  constructor(public service : EmployeeService) { 
    this.service.getPosts().toPromise()
    .then((result:any)=>{
      this.response=result.data;
    })
  }

  ngOnInit(): void {
  }

}
