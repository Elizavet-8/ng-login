import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'https://${environment.baseURL}/v1/';

  constructor(private http: HttpClient, private router: Router) { }
  login(email: string, password: string) {
    this.http.post(this.uri + '/authenticate', { email: email, password: password })

    .subscribe((resp: any) => {
      this.router.navigate(['profile']);
      // localStorage.setItem('auth_token', resp.token);
    })
  }


}
