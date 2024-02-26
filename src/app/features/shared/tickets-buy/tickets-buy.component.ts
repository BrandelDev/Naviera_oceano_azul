import { Component } from '@angular/core';
import { Port } from 'src/app/Models/Port';
import { TicketsBuyService } from './tickets-buy.service';
import { Rute } from 'src/app/Models/Rute';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ticket } from '../../../Models/Ticket';

@Component({
  selector: 'app-tickets-buy',
  templateUrl: './tickets-buy.component.html',
  styleUrls: ['./tickets-buy.component.scss']
})
export class TicketsBuyComponent {


  nrSelect: number = 0;
  ticketForm!: FormGroup;

  ports: Port[] = [];
  rutes: Rute[] = [];
  priceOfTicket: number = 0;
  ruteDistance: string = "";
  arrivalDate: Date = new Date();
  dateOfNow: Date = new Date();
  departureDate: Date = new Date();

  constructor(private ticketsBuyService: TicketsBuyService, private formBuilder: FormBuilder) {
    this.ticketForm = this.formBuilder.group({
      puertoDestino: [''],
      puertoOrigen: [''],
      idcliente: [''],
      fechaEmision: [''],
      fechaSalida: [''],
      idbarco: [''],
      fechaLlegada: ['']
    });

  }

  ngOnInit(): void {
    this.getPorts();

  }

  onOpenCalendar(container: any) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('month');
  }



  getPorts() {

    this.ticketsBuyService.getPorts().subscribe({
      next: (response: Port[]) => {
        this.ports = response
      },
      error: (error) => { }
    })
  }

  getRutes() {
    this.ticketsBuyService.getRutes().subscribe({
      next: (response: Rute[]) => {
        this.rutes = response;
      },
      error: (error) => { }
    })
  }

  getRutesById(value: number) {
    this.ticketsBuyService.getRutesById(value).subscribe({
      next: (response: Rute[]) => {
        this.rutes = response;
      },
      error: (error) => { }
    })
  }

  calculatePrice(value: number) {
    console.log(value)
    this.ruteDistance = this.rutes.find(e => value == e.idRutas)?.distancia ?? '';
    const number: number = this.convertRuteDistanceToNumber();

    const totalPrice = number * 1000;

    console.log(totalPrice)

    this.priceOfTicket = totalPrice;
  }


  calculateArrivalDate() {
    if (this.ticketForm.value.fechaSalida != '') {
      const departureDate: Date = this.convertStringToDate(this.ticketForm.value.fechaSalida);
      console.log(this.ticketForm.value.fechaSalida)
      
      const ruteDistanceInKm: number = this.convertRuteDistanceToNumber();
      const numberOfDays: number = ruteDistanceInKm / 700;
      console.log(numberOfDays)
      this.arrivalDate = new Date(departureDate.getTime() + numberOfDays * 24 * 60 * 60 * 1000);

      const formattedArrivalDate: string = this.convertDateToString(this.arrivalDate);
      console.log(this.arrivalDate)
      
      this.ticketForm.get('fechaLlegada')?.setValue(formattedArrivalDate);
    }
  }

  convertStringToDate(date: string) {
    const parts = date.split('-');

   
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; 
    const day = parseInt(parts[2]);
    const dateObject = new Date(year, month, day);
    return dateObject;
  }

  convertDateToString(date: Date): string {
    // Formatear la fecha como "yyyy-mm-dd"
    const year: number = date.getFullYear();
    const month: string = ('0' + (date.getMonth() + 1)).slice(-2);
    const day: string = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  convertRuteDistanceToNumber() {
    const str = this.ruteDistance;
    const numberStr = str!.replace(/\D/g, '');
    const number = parseInt(numberStr, 10);
    console.log(this.ruteDistance)
    return number;
  }

  createReservation() {
    const reservation = this.ticketForm.value as Ticket
  }


}
