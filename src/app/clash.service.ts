import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clash } from './clash';

@Injectable({
  providedIn: 'root',
})
export class ClashService {
  constructor() {}

  findAll(): Observable<Clash[]> {
    return of([
      {
        id: 2,
        createdByPeer: {
          id: 17,
          name: 'Daniel Clark',
          gender: 'Male',
          city: 'Barcelona',
          country: 'Spain',
          pictureUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
        },
        title: 'Lunch at The Grill',
        description: "Let's grab some lunch and talk about tech innovations",
        date: '2023-02-10',
        time: '12:30',
        location: 'The Grill',
        address: 'Oxford Street, London',
        participants: [
          {
            id: 18,
            name: 'Isabella Harris',
            gender: 'Female',
            city: 'Sydney',
            country: 'Australia',
            pictureUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
          },
        ],
        pictureUrl:
          'https://image.lexica.art/full_webp/073ec0b1-b9fd-47bb-a3d2-c3c1c0cc6923',
      },
    ]);
  }
}
