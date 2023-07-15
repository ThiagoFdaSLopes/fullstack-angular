import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  dark: boolean = false
  permission: boolean = false
  role: string = ''
  constructor(
    private renderer: Renderer2, 
    private router: Router,
    ) {}

  ngOnInit(): void {}

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
} 
