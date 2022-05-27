import {Injectable} from '@angular/core';
import {Product} from '../../model/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/products`);
  }

  create(data): Observable<Product> {
    return this.http.post<Product>(`${API_URL}/products`, data);
  }

  update(id, data): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/${id}`, data);
  }

  findById(id): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }
}
