import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GqlService {
  data: any;

  constructor(private http: HttpClient) {
    console.log("Hello")
  }

  getData() {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          characters {
            results {
              name
              status
              species
            }
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.data = res;
      });
  }
}
