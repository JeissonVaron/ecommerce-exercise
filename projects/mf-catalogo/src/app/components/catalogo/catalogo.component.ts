import { Component } from '@angular/core';
import { ResponseProductCatalog } from '../../models/catalogo.interface';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent {
  productsCatalog: ResponseProductCatalog[];

  constructor(private catalogoService: CatalogoService) {
    this.productsCatalog = [];
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.catalogoService
      .getAll()
      .subscribe((response: ResponseProductCatalog[]) => {
        this.productsCatalog = response;
      });
  }
}
