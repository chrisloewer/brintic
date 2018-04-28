import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  // Store user token and info locally for re-usability
  static storeLocalUser(user: User): void {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  static loadLocalUser(): User {
    let user: User;
    const jwtHelper = new JwtHelperService();

    try {
      user = JSON.parse(localStorage.getItem('userInfo'));
      if (!jwtHelper.isTokenExpired(user.token)) {
        return user;
      }
    } catch (e) {
      console.warn('Unable to load local user info');
    }
    return new User();
  }

  public static getAuthHeaderOptions(): any {
    const user = AuthService.loadLocalUser();
    return {
      headers: new HttpHeaders(
        {
          'Authorization': user.token
        })
    };
  }

  public static isAuthenticated(): boolean {
    const user = AuthService.loadLocalUser();
    return user.auth;
  }

  // Contact API.  If user exists, it will return JWT token
  public login(username, password): Observable<User> {
    const loginUrl = environment.apiUrl + '/login';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'username': username,
          'password': password
        })
    };
    return this.http.post<User>(loginUrl, { content: null }, httpOptions);
  }
}
