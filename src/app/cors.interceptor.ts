import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from '@environments/environment';

export class CorsInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = request.clone({
      headers: request.headers.set(
        'access-control-allow-orign', environment.api.url
      )
    });
    return next.handle(modifiedRequest);
  }
}
