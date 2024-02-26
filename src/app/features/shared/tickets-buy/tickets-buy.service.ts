import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, map, throwError as observableThrowError } from 'rxjs';
import { Rute } from 'src/app/Models/Rute';
import { Port } from 'src/app/Models/Port';
import { Ticket } from 'src/app/Models/Ticket';
@Injectable({
  providedIn: 'root'
})
export class TicketsBuyService {

  private apiNavieraOceanoAzul: string = "";

  constructor(private http: HttpClient) {
    this.apiNavieraOceanoAzul = environment.apiNavieraOceanoAzul;
  }


  getPorts() {
    let apiUrl = this.apiNavieraOceanoAzul + 'Puertos';
    return this.http.get<Port[]>(apiUrl).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => observableThrowError(() => error))
    );
  }

  getRutes() {
    let apiUrl = this.apiNavieraOceanoAzul + 'Rutas';
    return this.http.get<Rute[]>(apiUrl).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => observableThrowError(() => error))
    );
  }

  getRutesById(id:number) { 
    let apiUrl = this.apiNavieraOceanoAzul + 'Rutas/GetRutasByPuerto/' + id;
    return this.http.get<Rute[]>(apiUrl).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => observableThrowError(() => error))
    );
  }

  createReservation(ticket:Ticket) { 
    let apiUrl = this.apiNavieraOceanoAzul + 'Rutas/Tiquetes';
    return this.http.post<Ticket>(apiUrl, ticket).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => observableThrowError(() => error))
    );
  }



}
