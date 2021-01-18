import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  todo = {}
  logForm() {
    console.log(this.todo)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    
    

    
    this.httpClient.post("http://127.0.0.1:5000/signup",this.todo, httpOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

 


constructor(public httpClient: HttpClient) {
  }
  ngOnInit() {}
  sendPostRequest() {
    
  }

}
