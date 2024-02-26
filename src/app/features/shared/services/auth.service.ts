import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UserAuth } from 'src/app/Models/UserAuth';
import { Observable, throwError as observableThrowError} from 'rxjs';
import {catchError} from 'rxjs/operators'
import { NewUser } from 'src/app/Models/NewUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiNavieraOceanoAzul: string = "";

  constructor(private http: HttpClient) {
    this.apiNavieraOceanoAzul = environment.apiNavieraOceanoAzul;
  }

  authenticate(user: UserAuth):Observable<string> {
    let apiUrl = this.apiNavieraOceanoAzul + 'Auth/Validate';
    return this.http.post<string>(apiUrl, user).pipe(
      catchError((error) => observableThrowError(() => error))
    );
   }

   createNewUser(newUser: NewUser){
    let apiUrl = this.apiNavieraOceanoAzul + 'Auth/CreateUser';
    return this.http.post<any>(apiUrl, newUser).pipe(
      catchError((error) => observableThrowError(() => error))
    );
   }

  


}
