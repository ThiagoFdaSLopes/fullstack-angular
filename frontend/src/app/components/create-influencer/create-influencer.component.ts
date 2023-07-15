import { Component } from '@angular/core';
import { Router } from '@angular/router';
import INewInfluencer from 'src/app/interfaces/INewInfluencer';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-create-influencer',
  templateUrl: './create-influencer.component.html',
  styleUrls: ['./create-influencer.component.css']
})
export class CreateInfluencerComponent {

  show: boolean = true
  showMessageError: boolean = false
  errorMessage: string = ''
  token: string = ''
  influencer: INewInfluencer = {
    image: '',
    name: '',
    platform: '',
    country: '',
    category: '',
    followers: 0,
  }
  constructor(
    private router: Router,
    private listService: ListService
    ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem("token") || ''
  }

  CreateInfluencer(): void {
    this.show = !this.show
    this.listService.CreateInfluencer(this.token, this.influencer).subscribe(
      (response) => {
        console.log(response)
        this.showMessageError = false
        this.show = !this.show
      },
      ({error}) => {
        this.errorMessage = error.message
        this.showMessageError = true
        this.show = !this.show
      }

    )
  }

  GoDashBoard(): void {
    this.router.navigate(['/dashboard'])
  }
}
