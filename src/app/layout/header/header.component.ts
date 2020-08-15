import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileNav = false;

  toggleMobileNav(): void {
    this.mobileNav = !this.mobileNav;
  }

  hideMobileNav(): void {
    this.mobileNav = false;
  }
}
