import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  audioSource: string = 'http://soundfxcenter.com/movies/star-wars/8d82b5_Star_Wars_Main_Theme_Song.mp3';

  playSound(): void {
    const sound = document.getElementById('sound') as HTMLAudioElement;
    sound.play();
  }
}
