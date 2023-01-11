import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
 
  constructor(private gifsService : GifsService) {}

  ngOnInit() {}
@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;


Buscar() {

  const valor = this.txtBuscar.nativeElement.value


  this.gifsService.buscarGifs(valor);

  this.txtBuscar.nativeElement.value = ""
}
}
