import { UserRequest } from './../Models/UserRequest';
import { AuthenticationRequest } from './../Models/AuthenticationRequest';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ResponseHttp } from '../Interfaces/ResponseHttp';
import { EmailRequest } from '../Models/EmailRequest.';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _http=inject(HttpClient);
  private baseUrl=environment.baseUrl;
  constructor() { }
  GetUser(request:AuthenticationRequest):Observable<ResponseHttp>{
    const path=this.baseUrl+environment.GetUser;
    return this._http.post(path,request);
  }
  RestedUser(request:AuthenticationRequest):Observable<ResponseHttp>{
    const path=this.baseUrl+environment.RestedUser;
    return this._http.post(path,request);
  }
  GeneratedToken(request:EmailRequest):Observable<ResponseHttp>{
    const path=this.baseUrl+environment.GeneratedToken;
    return this._http.post(path,request);
  }
  ValidToken(request:AuthenticationRequest):Observable<ResponseHttp>{
    const path=this.baseUrl+environment.ValidToken;
    return this._http.post(path,request);
  }
  UpdateUser(request:UserRequest):Observable<ResponseHttp>{
    const path=this.baseUrl+environment.UpdateUser;
    return this._http.post(path,request);
  }
}
