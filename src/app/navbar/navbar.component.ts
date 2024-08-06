import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrollTop: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  }



}
