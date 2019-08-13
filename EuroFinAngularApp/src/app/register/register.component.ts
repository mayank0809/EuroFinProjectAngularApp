import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
private registerForm:FormGroup;
private message:any;

  constructor(private fb:FormBuilder,private loginService:LoginService) { }

  ngOnInit() {
    this.registerForm= this.fb.group({
      UserName:['',[Validators.required]],
      EmailId:['', [Validators.required, Validators.email]],
      Phone:['',[Validators.required]],
      Password:['',[Validators.required]]
    });
  }

  signUp(){

    if(this.registerForm.invalid){
      return;
    }
    // alert("Hi");

    this.loginService.ExistingUser(this.registerForm.value).subscribe(
      (data) =>{
        if(data!=""){
            this.message="User Id already Used, please use new user id";

            setTimeout(()=>{
              this.message="";
            },7000);
        }else{
        this.loginService.register(this.registerForm.value).subscribe(
          (data) =>{
            this.message="User register successfully";
            setTimeout(()=>{
              this.message="";
            },7000);
          },
          () =>{}
        );
      };
    
      },
      () =>{}
    );
  }

}
