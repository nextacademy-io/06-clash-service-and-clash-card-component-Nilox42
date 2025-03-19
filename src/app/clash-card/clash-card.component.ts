import { Component, computed, input } from '@angular/core';
import { Clash } from '../clash';
import { NgIf } from '@angular/common';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';

@Component({
  selector: 'app-clash-card',
  imports: [NgIf, ProfilePictureComponent],
  templateUrl: './clash-card.component.html',
  styleUrl: './clash-card.component.css',
})
export class ClashCardComponent {
  clash = input.required<Clash>();

  participants = computed(() => [
    this.clash().createdByPeer,
    ...this.clash().participants,
  ]);
}
