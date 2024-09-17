export interface TOrigin {
  name: string;
}

export interface TLocation {
  name: string;
}

export interface TSingleUser {
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  origin: TOrigin;
  type: string;
  location: TLocation;
  id: number;
}
