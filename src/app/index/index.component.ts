import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service'
import { Employee } from '../employee'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor( public empService:EmpService,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.getEmployee();
  }

  employee:Employee;
  getEmployee(){
    var id = this.route.snapshot.params['id'];
    this.empService.getEmployee(id)
        .subscribe(employee=>{
          this.employee = employee;
        })
  }
  goBack(){
    this.router.navigate(['/home'])
  }

}
