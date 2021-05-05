import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-passphrase-modal',
  templateUrl: './passphrase-modal.component.html',
  styleUrls: ['./passphrase-modal.component.css']
})
export class PassphraseModalComponent implements OnInit {
  url = 'https://passphrase-generator-api.herokuapp.com/passphrase';
  value = 30;
  passphrase = '';
  fieldTextType: boolean;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  getPassphrase(length: number): void {
    this.http.get(this.url, {
      params: {
        length: length.toString()
      },
      responseType: 'text'
    }).subscribe(value => {
      this.passphrase = value;
    });
    this.fieldTextType = false;
  }
}
