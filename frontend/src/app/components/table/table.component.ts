import { Component } from '@angular/core';

import IInfluencer from 'src/app/interfaces/IInfluencer';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  influencers: IInfluencer[] = [];
  permission: boolean = false;
  token: string = '';
  constructor(private listService: ListService ) {}

  ngOnInit():void {
    const token = localStorage.getItem('token') || '';
    this.token = JSON.parse(token);
    const role = localStorage.getItem('role') || '';
    this.listService.GetInfluencers(JSON.parse(token)).subscribe((response) => this.influencers = response)

    if(JSON.parse(role) === "admin" || JSON.parse(role) === 'moderator'){
      this.permission = true
    }
  }

  Delete(id: number) {
    this.listService.Delete(id, this.token).subscribe((response) => this.influencers = response)
  }
}
