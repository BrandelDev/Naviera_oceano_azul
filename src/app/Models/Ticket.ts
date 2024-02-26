export interface Ticket {
    puertoDestino: string;
    puertoOrigen:  string;
    idcliente:     number;
    fechaEmision:  Date;
    fechaSalida:   Date;
    precio:        string;
    idbarco:       number;
    fechaLlegada:  Date;
}
