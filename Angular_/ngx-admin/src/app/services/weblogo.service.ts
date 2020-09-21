import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {EnvService} from './env.service';

export interface dataseqs{
  seqs?: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeblogoService {
  API_URL = '';
  httpOptions = {};
  data: dataseqs = {};

  constructor(private httpClient: HttpClient,
              private env: EnvService) {
    this.API_URL = env.apiUrl;
  }

  send(seqsSend: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.data.seqs = seqsSend;
    return this.httpClient.post<any>(`${this.API_URL}/weblogoclustal/`, this.data, this.httpOptions);
  }
}
