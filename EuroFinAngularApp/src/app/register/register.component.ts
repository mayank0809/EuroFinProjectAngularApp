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

    this.loginService.register(this.registerForm.value).subscribe(
      (data) =>{
        //this.getTask();
    //this.addTask="";
    
      },
      () =>{}
    );
  }

}
