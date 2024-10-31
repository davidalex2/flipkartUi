import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm=new FormGroup({
    email: new FormControl("",[Validators.required]),
    mobile: new FormControl("",[Validators.required])
  })
  
onSubmit(){
  console.log(this.loginForm.value);
}
get mail(){
  return this.loginForm.get('email')
}
get mobileno(){
  return this.loginForm.get('mobile');
}
}

class UserForm{
  email!:string;
  mobile!:number;


}
