import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IMessage } from './message.interface';

@Injectable({providedIn: 'root'})
export class MessageService {

  private endpoint = `${environment.api.url}/contacts/messages/`;

  constructor(private http: HttpClient) {}

  sendMessage(message: IMessage): Observable<boolean> {
    // Send new message
    return this.http.post<IMessage>(this.endpoint, message).pipe(
      catchError(this.handleError),
      map(message => !!message)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    // Handle HTTP Errors
    return throwError(error);
  }

}
