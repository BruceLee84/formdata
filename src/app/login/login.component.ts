import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpServiceService} from '../service/http-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:HttpServiceService){}

@ViewChild('loginForm') lf:NgForm

data:any

onSubmit=(loginForm:NgForm)=>{
  // console.log(loginForm.form.value)
  // console.log(loginForm.value)
  this.data=loginForm.value
  console.log('data', this.data)
 this.service.login(this.data).subscribe({
  next:res=>{
    console.log('result', res)
  },
  error:err=>{
    console.log('error', err)
  }
 })
}


} 
