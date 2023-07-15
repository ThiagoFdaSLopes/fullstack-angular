import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  dark: boolean = false
  permission: boolean = false
  token = ''
  role = ''
  constructor(
    private renderer: Renderer2, 
    private router: Router,
    private listService: ListService
    ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem("token") || '';
    this.listService.GetRole(this.token).subscribe((response) => {
      this.role = response.role
      if(response.role === "admin") {
        this.permission = true
      }
    })
  }

  Darkmode() {
    const body = document.body;
    this.dark = !this.dark;
    this.dark ? this.renderer.addClass(body, "dark") : this.renderer.removeClass(body, "dark");
  }

  Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    this.router.navigate(['/']);
  }

  AllowMode(option: string): void {
    if(option === "dashboard") {
      this.router.navigate(['dashboard'])
    }
    if(option === "showFilter") {
      console.log("ShowFilter")
    }
    if(option === "newInfluencer"){
      console.log("newInfluencer")
    }
  }
} 
