import { Component } from '@angular/core';
interface User {
  username: string;
  fullName: string;
  lastActivity: string;
}
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  showRegisterForm = false;
newUser = {
    name: '',
    surname: '',
    email: '',
    phoneNumber:'',
    position:'',
    role: {
      employee: false,
      systemAdmin: false
    }
  };

  openRegisterForm() {
    this.showRegisterForm = true;
  }

  closeRegisterForm() {
    this.showRegisterForm = false;
  }

  registerUser() {
    const username = this.newUser.email.split('@')[0]; // use email prefix as username
    const fullName = `${this.newUser.name} ${this.newUser.surname}`;
    const today = new Date().toLocaleDateString('en-GB'); // dd/mm/yyyy

   

    this.closeRegisterForm();

   
  }
}
