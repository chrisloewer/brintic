import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../classes/post';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPost(id): Observable<Post> {
    const postUrl = environment.apiUrl + '/posts/' + id;
    return this.http.get<Post>(postUrl);
  }

  setPost(p: Post): Observable<any> {
    const postUrl = environment.apiUrl + '/posts';
    const options = AuthService.getAuthHeaderOptions();
    return this.http.post(postUrl, p, options);
  }

}
