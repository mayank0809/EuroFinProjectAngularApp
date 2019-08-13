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
    if(data!= null){
this.router.navigate(['/','tasktodo']);
    }
  },
  ()=>{}
);
  };

}
