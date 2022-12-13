import { TmplAstNode } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// export class RegisterComponent implements OnInit {
export class RegisterComponent{

  // constructor() { }

  // ngOnInit(): void {
  // }

// @ViewChild('userForm') uf:NgForm;

  onSubmit=(userForm:NgForm)=>{
    console.log(userForm)
    console.log(userForm.value)
    console.log('form', userForm.form)
    console.log('form', userForm.form.valid)
  }


  state = [{
    state:'TN',
  },
{
  state:'AP'
},
{
  state:'KL'
}]
}
