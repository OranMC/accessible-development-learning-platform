import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { VgCoreModule, IMediaElement } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [ VgCoreModule, VgOverlayPlayModule, VgBufferingModule, VgControlsModule ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements AfterViewInit {
  @ViewChild('media', { static: true }) mediaRef!: ElementRef<HTMLVideoElement>;

  media!: IMediaElement;

  ngAfterViewInit() {
    this.media = this.mediaRef.nativeElement as unknown as IMediaElement;
  }
}
