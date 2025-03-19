import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ProfilePictureClickedEvent,
  ProfilePictureComponent,
} from './profile-picture/profile-picture.component';
import { inject } from '@angular/core';
import { ClashService } from './clash.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ClashCardComponent } from './clash-card/clash-card.component';

const BASE_PICTURE_URL = 'https://randomuser.me/api/portraits/women';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClashCardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  clashService = inject(ClashService);
  clashes = toSignal(this.clashService.findAll());
}
