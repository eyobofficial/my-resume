import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IMessage } from './message.interface';

@Injectable({providedIn: 'root'})
export class MessageService {

  private endpoint = `${environment.api.url}/contacts`;

  constructor(private http: HttpClient) {}

  sendMessage(message: IMessage): Observable<boolean> {
    // Send new message
    const url = this.endpoint + '/messages/';
    return this.http.post<IMessage>(url, message).pipe(
      catchError(this.handleError),
      map(message => !!message)
    );
  }

  createSubscription(emailObj: {email: string}): Observable<boolean> {
    // Create newsletter subscription.
    const url = this.endpoint + '/subscriptions/';
    return this.http.post<{email: string}>(url, emailObj).pipe(
      catchError(this.handleError),
      map((resp: {email: string}) => !!resp.email)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    // Handle HTTP Errors
    return throwError(error);
  }

}
