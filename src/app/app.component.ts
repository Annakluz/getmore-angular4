import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  name: string;
  email: string;
  website: string;
  hobbies: string[];
  showHobbies: boolean;
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";
  data: any = {};

  constructor(private http: Http) {
    this.name = "Anna";
    this.email = "annak@gmail.com";
    this.website = "www.google.com";
    this.hobbies = ["run", "read"];
    this.showHobbies = false;
    this.getPost();
    this.getData();

  }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res: Response)=> res.json())
  } //obtener un respuesta de la url

  getPost() {
    this.getData().subscribe(data=> {
      console.log(data);
      this.data = data
    })
  } //array de objetos 

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby){
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;

  }


}

interface IData {
  id: string;
  title: string;
  body: string;
}
