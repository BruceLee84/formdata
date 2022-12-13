import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: HttpServiceService) { }

  ngOnInit(): void {
  //  this.getUser()
  }

//  userData=[]
userData:any
  getUser(){
    this.service.getUser().subscribe({
      next: data=>{
        console.log("Users", data)
        this.userData=data.result
      },
      error: err=>{
        console.log("err", err)
      }
    })
  }

  allUser:any
  getAllUser(){
    this.service.getUser().subscribe(res=>{
      console.log('user', res.result)
      this.allUser=res.result
    })
  }



}
