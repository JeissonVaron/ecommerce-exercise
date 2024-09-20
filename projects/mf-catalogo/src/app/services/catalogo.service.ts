import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseProductCatalog } from '../models/catalogo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<ResponseProductCatalog[]> {
    return this.http.get<ResponseProductCatalog[]>(
      'https://fakestoreapi.com/products'
    );
  }
}
