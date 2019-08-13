import { Component, OnInit } from '@angular/core';
import{ FormBuilder , FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
private message:any;

  constructor(private fb :FormBuilder, private loginService :LoginService, private router:Router) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
      UserName:['',[Validators.required]],
      Password: ['',[Validators.required]]
    })
  }

  signIn=function(){
console.log(this.loginForm);

this.loginService.login(this.loginForm.value).subscribe(
  (data)=>{
    this.loginService.user=data;
    if(data.UserName!= null){
this.router.navigate(['/','tasktodo']);
    }else{
      this.setMessage("UserName and Passowrd do not match", 7000);
    }
  },
  ()=>{}
);
  };

  setMessage(message:string,time:number){

    this.message=message;

            setTimeout(()=>{
              this.message="";
            },time);
  }

}
