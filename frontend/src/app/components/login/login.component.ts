import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  inputUserNameValidate: boolean = false
  disableButton: boolean = true
  register: boolean = false
  email: string = ''
  password: string = ''
  userName: string = ''
  messageError: string = ''

  constructor(private listService: ListService, private router: Router) {}

  ngOnInit(): void {}

  handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (inputElement.type === 'email') {
      this.email = value;
      !emailRegex.test(this.email) ? this.inputEmailValidate = !this.inputEmailValidate : this.inputEmailValidate = false;
    }

    if(inputElement.type === 'password') {
      this.password = value;
      this.password.length < 6 ? this.inputPasswordValidate = !this.inputPasswordValidate : this.inputPasswordValidate = false;
    }
    if(inputElement.type === 'text') {
      this.userName = value;
      this.userName.length < 3 ? this.inputUserNameValidate = !this.inputUserNameValidate : this.inputUserNameValidate = false;
    }
  }

  Login() {
    this.show = !this.show
    this.listService.Login({email: this.email, password: this.password}).subscribe(
      (response) => {
        localStorage.setItem("token", response.token)
        this.listService.GetRole(response.token).subscribe((response) => localStorage.setItem("role", response.role))
        this.show = !this.show
        this.showMessageError = false
        this.router.navigate(['/dashboard'])
      },
      ({error}) => {
        this.messageError = error.message
        this.showMessageError = true
        this.show = !this.show
      }
    );
  }

  Register() {
    this.show = !this.show
    this.listService.Register({ email: this.email, password: this.password, userName: this.userName}).subscribe(
      (response) => {
        localStorage.setItem("token", response.token)
        this.listService.GetRole(response.token).subscribe((response) => localStorage.setItem("role", response.role))
        this.show = !this.show
        this.showMessageError = false
        this.router.navigateByUrl('/dashboard');
      },
      ({error}) => {
        this.messageError = error.message
        this.showMessageError = true
        this.show = !this.show
      }
    );
  }

  ShowRegister() {
    this.register = !this.register
  }
}
