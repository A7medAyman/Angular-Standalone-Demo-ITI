import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
constructor(public authService: Auth, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/loginapi']);
  }
}
