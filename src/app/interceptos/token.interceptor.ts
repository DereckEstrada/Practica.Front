import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let  cloneReq=req;

  if(localStorage.getItem(environment.token)){
    cloneReq=req.clone({
      setHeaders:{
        Authorization: "Bearer "+localStorage.getItem(environment.token) 
      }
    });
  }
  return next(cloneReq);
};
