import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesFireBaseService } from '../../services/carga-imagenes-fire-base.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  providers: [ CargaImagenesFireBaseService ]
})
export class CargaComponent implements OnInit {
  
  public estaSobreElemento: boolean = false;
  public archivos: FileItem[] = [];

  public constructor(private cargarImagen: CargaImagenesFireBaseService) { }

  public ngOnInit() {
  }
  
  public cargarImagenes() {
    this.cargarImagen.cargarImagenesFirebase(this.archivos);
  }

  public limpiarArchivos () {
    this.archivos = [];
  }
}
