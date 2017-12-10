import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service';
import { Employee } from '../employee';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public empService: EmpService,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
  }

  //tạo một model employee để hứng lấy dữ liệu từ client
  model = new Employee();
  //hàm thêm nhân viên
  addEmployee() {
    this.empService.addEmployee(this.model)
      .subscribe(() => this.goBack())
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
