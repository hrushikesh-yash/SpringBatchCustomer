import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService 
{

  baseURL:String="http://localhost:9191/Customers";

  constructor(private httpClient:HttpClient) { }


  getAllCustomers():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(this.baseURL+"/getAllCustomers");
  }
}
