import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url =
    'https://raw.githubusercontent.com/Isai199/json-for-the-portfolio/refs/heads/main/data.json';

  async getAllData() {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
