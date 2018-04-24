import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../classes/post';
import { environment } from '../../environments/environment';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPost(id): Observable<Post> {
    const postUrl = environment.apiUrl + '/postapi/' + id;
    return this.http.get<Post>(postUrl);
  }

}
