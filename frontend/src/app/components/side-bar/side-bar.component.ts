import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  dark: boolean = false
  constructor(private renderer: Renderer2) {}

  Darkmode() {
    const body = document.body
    this.dark = !this.dark
    this.dark ? this.renderer.addClass(body, "dark") : this.renderer.removeClass(body, "dark")
  }
} 
