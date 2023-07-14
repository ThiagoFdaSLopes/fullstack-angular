import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  show: boolean = true
  showMessageError: boolean = false
  inputEmailValidate: boolean = false
  inputPasswordValidate: boolean = false
  email: string = ''
  password: string = ''
  messageError: string = ''

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    console.log("Comecei")
  }

  handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    
    if (inputElement.type === 'email') {
      this.email = value;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      !emailRegex.test(this.email) ? this.inputEmailValidate = !this.inputEmailValidate : this.inputEmailValidate = false;
    } else {
      this.password.length < 6 ? this.inputPasswordValidate = !this.inputPasswordValidate : this.inputPasswordValidate = false;
      this.password = value;
    }
  }

  Login() {
    this.show = !this.show
    this.listService.Login({email: this.email, password: this.password}).subscribe(
      (response) => {
        localStorage.setItem("token", JSON.stringify(response.token))
        this.show = !this.show
        this.showMessageError = false
      },
      ({error}) => {
        this.messageError = error.message
        this.showMessageError = true
        this.show = !this.show
      }
    );
  }
}
