import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post(`${API_URL}/login`, {username, password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }
}
