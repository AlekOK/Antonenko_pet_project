import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class PhotoInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.includes('https://api.unsplash.com/search/')) {

            const cloneReq = req.clone({
                params: req.params.set('client_id', 'qY6VPvzNIu-e33TztnlAcPlrnjSE2IWF4460THhtmVM')
            })

            return next.handle(cloneReq)
        } else {
            return next.handle(req)
        }
    }
}
