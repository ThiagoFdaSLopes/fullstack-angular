import { Component } from '@angular/core';
import { Router } from '@angular/router';
import IInfluencer from 'src/app/interfaces/IInfluencer';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  token: string | null = ''
  influencers: IInfluencer[] = []
  constructor(private router: Router, private listService: ListService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token') || '';

    if(!token) this.router.navigate(['/'])
  }
}
