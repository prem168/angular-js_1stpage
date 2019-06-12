import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  x=[{
    name : "prem",
    age : 4,
    email : "prem@gmail.com"
  },{
    name : "sai",
    age : 3,
    email : "prm@gmail.com"
  },{
    name : "vardhan",
    age : 5,
    email : "pem@gmail.com"
  }];
  userForm;
  constructor(){
    this.userForm = new FormGroup(
      {
      'name' : new FormControl(),
      'age' : new FormControl(),
      'email' : new FormControl()
    })

  }
  formSubmit(){
    console.log(this.userForm.value);
    this.x.push(this.userForm.value);
  }
  
}
