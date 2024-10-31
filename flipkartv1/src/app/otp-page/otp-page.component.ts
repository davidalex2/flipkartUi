import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.css'
})
export class OtpPageComponent {

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
