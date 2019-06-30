import { Injectable } from '@angular/core';

export enum LunchPalStatus {
  EXPIRED = 'expired',
  WAITING = 'waiting',
  MATCHED = 'matched'
}

export interface LunchPal {
  day: Date;
  numberOfPeople: number;
  starttime: string; // in format "13:00"
  endtime: string; // in format "13:00"
  mensa: string; // eg Hauptgebäude
  status: LunchPalStatus;
}

@Injectable({
  providedIn: 'root'
})
export class LunchPalService {
  private _myLunchPals: LunchPal[] = [];

  constructor() {}
  // For later we will use backend data, an observable with the persitent data

  addLunchPal(lunchpal: LunchPal) {
    this._myLunchPals.push(lunchpal);
  }

  get myLunchPals() {
    return this._myLunchPals;
  }
}
