export interface Peer {
  id: number;
  name: string;
  gender: string;
  city: string;
  country: string;
  pictureUrl: string;
}

export interface Clash {
  id: number;
  createdByPeer: Peer;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  address: string;
  participants: Peer[];
  pictureUrl: string;
}
