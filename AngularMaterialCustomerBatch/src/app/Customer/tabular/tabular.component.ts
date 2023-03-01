import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';



@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {

  dataSource!:Customer[];

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().
    subscribe(Response => {
      // console.log(Response)
      this.dataSource= Response;
    });

  }

  displayedColumns: string[] = ['id', 'first Name', 'Last Name', 'Email','Gender','Contact No','Country','Dob'];
  

}
