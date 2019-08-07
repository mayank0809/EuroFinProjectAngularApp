import { Component, OnInit } from '@angular/core';
import{ FormBuilder , FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private fb :FormBuilder) { }

  ngOnInit() {
    this.loginForm= new FormGroup({
      UserName:new FormControl(),
      Password: new FormControl()
    })
  }

  signIn=function(){
console.log(this.loginForm);
  };

}
