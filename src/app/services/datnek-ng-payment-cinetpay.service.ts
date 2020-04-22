import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DatnekNgPaymentCinetpayService {

  cinetApi: {apiLink: string, apiKey: string, apiVersin: string};
  constructor(private http: HttpClient) { }

  setApi(version: string, key: string ){
    this.cinetApi = { apiLink: environment.cinetApi.apiLink, apiKey: key, apiVersin: version};
  }


}
