import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DateInterceptor implements HttpInterceptor {
  private dateRegex = /\b(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})\b/;

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(req)
      .pipe(
        map((event) =>
          event instanceof HttpResponse
            ? event.clone({ body: this.transform(event.body) })
            : event
        )
      );
  }

  private transform(data: any): any {
    if (typeof data === 'string' && this.dateRegex.test(data)) {
      return this.parseDate(data);
    } else if (Array.isArray(data)) {
      return data.map((item) => this.transform(item));
    } else if (data && typeof data === 'object') {
      return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, this.transform(value)])
      );
    }
    return data;
  }

  private parseDate(dateStr: string): Date {
    const [day, month, year, hours, minutes] =
      this.dateRegex.exec(dateStr) || [];
    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes)
    );
  }
}
