import { Component } from '@angular/core';

@Component({
  selector: 'app-media-info',
  standalone: true,
  imports: [],
  templateUrl: './media-info.component.html',
  styleUrl: './media-info.component.css'
})
export class MediaInfoComponent {
  transcript = [
    'Welcome to the course.',
    'In this module, we will cover the basics.',
    'Lets get started with an overview of the key concepts.'
    // add more transcript lines as needed
  ];
}
