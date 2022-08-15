import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse
} from "@angular/common/http";
import { tap } from "rxjs/operators";
import { LoaderService } from "../services/loader.service";
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if(request.method!= "GET"){
      this.loaderService.ShowLoader();

    }

    return next.handle(request).pipe(
      tap(

        req => {
          if (req instanceof HttpResponse) {

            setTimeout(() =>{
              this.loaderService.HideLoader();
            },1500)


          }
        },
        err => {
          this.loaderService.HideLoader();
        }
      )
    );
  }
}
