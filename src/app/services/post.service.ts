import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InterfacePost} from '../components/Interfaces/IPost/InterfacePost';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPost(): Observable<InterfacePost[]> {
    return this
      .httpClient
      .get<InterfacePost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

