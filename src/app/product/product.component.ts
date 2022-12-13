import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private service:HttpServiceService) { }

  ngOnInit(): void {
  }

  getPro(){
    this.service.getProduct().subscribe({
      next:data=>{
        console.log('Products', data)
      },
      error:err=>{
        console.log('error', err)
      }
    })
  }

}
