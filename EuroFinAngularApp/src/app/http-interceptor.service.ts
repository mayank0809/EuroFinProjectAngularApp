import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loginService:LoginService) { }

  intercept(httpRequest: HttpRequest<any> , next : HttpHandler): Observable<HttpEvent<any>> {
    
    // Clone the request to add the new header.

    
    if(this.loginService.user){
    var authReq = httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', 'Basic '+ btoa(this.loginService.user.UserName +':'+this.loginService.user.Password))
    });

    //send the newly created request
    return next.handle(authReq);
  }else{
    var authReq = httpRequest.clone({
      // headers: httpRequest.headers.set('Authorization', 'Basic '+ btoa(this.loginService.user.UserName +':'+this.loginService.user.Password))
    });

    //send the newly created request
    return next.handle(authReq);
  }
  }
}
