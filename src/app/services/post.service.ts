import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../classes/post';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Image } from '../classes/image';

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

  getGallery(): Observable<Image[]> {
    const postUrl = environment.apiUrl + '/images';
    return this.http.get<Image[]>(postUrl);
  }

  uploadImage(imageDataUri): Observable<any> {
    const postUrl = environment.apiUrl + '/images';
    const options = AuthService.getAuthHeaderOptions();

    // send only the data for the image
    // fileType will be double-checked by the server
    const params = {
      img: imageDataUri.split(',')[1]
    };
    return this.http.post(postUrl, params, options);
  }

}
