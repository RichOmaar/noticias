import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Article, NewsResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }

  getTopHeadlines():Observable<Article[]> {
    // return this.http.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ab9895973b894c8b8db95197836923a2").map(response => response.json());

    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?', {
      params: {
        country: 'us',
        category: 'business',
        apiKey: apiKey
      }
    }).pipe(
      map(({articles}) => articles)
    )
  }
}
