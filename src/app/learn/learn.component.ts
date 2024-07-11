import { Component } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { MediaInfoComponent } from '../media-info/media-info.component';
import { ProgressTrackerComponent } from '../progress-tracker/progress-tracker.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [ ContentListComponent, VideoPlayerComponent, MediaInfoComponent, ProgressTrackerComponent, CommonModule],
  templateUrl: './learn.component.html',
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './learn.component.css'
})
export class LearnComponent {

}
