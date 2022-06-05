import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: string[] = ['ryan','joe','cameron','jhon','joseph','joel','kevin','laisson',];
  activated = true;

  posts: any[] = []; // any cuando tienes "noImplicitAny": false en tsconfig.json 

  // name: string = 'Ryan Ray';
  // age: number;
  // address: {
  //   street: string;
  //   city: string;
  // };
  // hobbies: string[];

  // constructor() {
  //   this.age = 28;
  //   this.address = {
  //     street: '2218 Back street',
  //     city: 'London',
  //   };
  //   this.hobbies = ['swimming', 'read', 'write'];
  // }

  // constructor data services
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      // console.log(data);
      this.posts = data;
    })
  }

  // para evento click en boton
  sayHello() {
    alert('Hello!');
  }

  // evento agregar usuario
  addUser(newUser) {
    console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value = '';
    return false;
  }
  // evento eliminar
  deleteUser(user) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }
}
