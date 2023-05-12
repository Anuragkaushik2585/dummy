import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
name=''
email=''

  constructor(private http: HttpClient) { }

  submitForm() {
    const url = 'https://example.com/api/contact';

    // POST request to send form data to the server
    this.http.post(url, { name: this.name, email: this.email }).subscribe((response) => {
      console.log('POST response', response);
    });
  }
}
