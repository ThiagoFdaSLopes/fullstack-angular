import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import IInfluencer from 'src/app/interfaces/IInfluencer';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  influencer!: IInfluencer;
  userId!: number
  token!: string
  show: boolean = true
  errorMessage: string = ''
  showMessageError: boolean = false

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token') || '';
    this.route.params.subscribe((params: Params) => this.userId = params['id']);

    this.listService.GetInlfuencerById(this.token, this.userId).subscribe((response) => this.influencer = response)
  }

  GoDashBoard(): void {
    this.router.navigate(['/dashboard'])
  }

  Edit(): void {
    this.show = !this.show
    this.listService.Edit(this.token, this.influencer.id, this.influencer).subscribe(
      (response) => {
        this.influencer = response
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
}
