import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApparelService {

  @Output() user: boolean = false;

  constructor(private http: HttpClient) { }

  rootURL = 'https://spectacularweescreenscraper.neeltron.repl.co/';

  addUsers(userid: string, pwd: string) {
    return this.http.get(this.rootURL + 'signup?' + 'user=' + userid +'&'+ 'pass=' + pwd, {responseType: 'text'});
  }

  checkUserInfo(userid: string, pwd: string): Observable<any> {
    this.user = true;
    return this.http.get(this.rootURL + 'login?' + 'user=' + userid +'&'+ 'pass=' + pwd, {responseType: 'text'});
  }

  getImage(): Observable<Blob> {
    return this.http.get(this.rootURL, { responseType: 'blob' });
}
}
