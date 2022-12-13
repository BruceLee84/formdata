import { Injectable } from '@angular/core';
import { from, catchError, observable, throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  httpOption={
    headers : new HttpHeaders({'Content-Type': 'application/json' })
  }

  constructor(private http:HttpClient) { }
  handleError(error:Error){
    return throwError(error || 'something problem')
  }
  

  getUser(){
    return this.http.get<any>('http://localhost:3030/api/v1/user/getUser').pipe(catchError(this.handleError))
  }

  getProduct(){
    return this.http.get<any>('http://localhost:3030/api/v3/product/getAllPro')
  }

 login(data:any){
  console.log(data)
  return this.http.post<any>('http://localhost:3030/api/v1/user/login',{userName:data.email, Password:data.pass})
 }

// register():Observable<any>
// {}

}
