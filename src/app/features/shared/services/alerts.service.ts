import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  success(title: string, text: string) {
    Swal.fire({
      title: title,
      icon: "success",
      text: text
    });
  }
}
