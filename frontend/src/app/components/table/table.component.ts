import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import IInfluencer from 'src/app/interfaces/IInfluencer';
import ISearchInfluencer from 'src/app/interfaces/ISearchInfluencer';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit   {
  influencers: IInfluencer[] = [];
  searchFilter: ISearchInfluencer = {
    name: '',
    country: '',
    category: '',
    followers: 0,
  }
  isChecked: boolean = false
  permission: boolean = false;
  token = '';
  role = '';
  showMessageError: boolean = false
  errorMessage: string = ''
  show: boolean = true
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

  Search() {
    this.show = !this.show
    this.listService.SearchInfluencer(this.token, this.searchFilter).subscribe(
      (response) => {
        this.influencers = response
        this.showMessageError = false
        this.show = !this.show
      },
      ({error}) => {
        this.showMessageError = true
        this.errorMessage = error.message
        this.show = !this.show
      }
    )
  }

  RefreshPage(): void {
    window.location.reload()
  }
}
