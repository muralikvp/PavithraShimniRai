import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentInteractService {
  public message!: string;

  constructor() {}
}
