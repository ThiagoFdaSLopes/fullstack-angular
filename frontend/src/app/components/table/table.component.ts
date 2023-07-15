import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import IInfluencer from 'src/app/interfaces/IInfluencer';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit   {
  influencers: IInfluencer[] = [];
  permission: boolean = false;
  token = '';
  role = '';
  constructor(private listService: ListService, private router: Router ) {}

  ngOnInit():void {
    this.token = localStorage.getItem('token') || '';
    this.listService.GetInfluencers(this.token).subscribe((response) => this.influencers = response)
    this.listService.GetRole(this.token).subscribe((response) => {
      this.role = response.role
      if(response.role === "admin") {
        this.permission = true
      }
    })
  }

  Delete(id: number) {
    this.role === 'admin' ? this.listService.Delete(id, this.token).subscribe((response) => this.influencers = response) : alert("Usuario sem permissao");
  }

  Edit(id: number) {
    this.role === "admin" ? this.router.navigate([`edit/${id}`]) : alert("Usuario sem permissao");
  }
}
