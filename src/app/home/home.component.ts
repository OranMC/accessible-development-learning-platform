import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToLearning(): void {
    this.router.navigateByUrl('learn');
  }

  navigateToCode(): void {
    this.router.navigateByUrl('code');
  }
  
}
