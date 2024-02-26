import { Component } from '@angular/core';
import { Port } from 'src/app/Models/Port';
import { TicketsBuyService } from './tickets-buy.service';
import { Rute } from 'src/app/Models/Rute';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tickets-buy',
  templateUrl: './tickets-buy.component.html',
  styleUrls: ['./tickets-buy.component.scss']
})
export class TicketsBuyComponent {


  selectedRute: number = 0;
  ticketForm!: FormGroup;

  ports: Port[] = [];
  rutes: Rute[] = [];
  priceOfTicket: number = 0;

  constructor(private ticketsBuyService: TicketsBuyService,private formBuilder: FormBuilder) {
    this.ticketForm  = this.formBuilder.group({
      puertoDestino: [''],
      puertoOrigen:[''],
      idcliente: [''],
      fechaEmision:[''],
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

  calculatePrice() {
    const ruteDistance = this.rutes.find(e => this.selectedRute == e.idRutas)?.distancia;

    const str = ruteDistance;
    const numberStr = str!.replace(/\D/g, '');
    const number = parseInt(numberStr, 10);

    const totalPrice = number * 1000;

    console.log(totalPrice)

      this.priceOfTicket = totalPrice;
  }

}
