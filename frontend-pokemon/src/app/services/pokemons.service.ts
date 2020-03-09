import { Pokemon } from "src/app/models/pokemon";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PokemonsService {
  // readonly apiUrl = "https://backend-pokemons.herokuapp.com/api/pokemon";
  readonly apiUrl = "http://localhost:5000/api/pokemon";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl).pipe(map(this.jsonPokemons));
  }

  getById(_id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/${_id}`;
    return this.http.get(url).pipe(map(this.jsonPokemon));
  }

  post(pokemon: Pokemon): Observable<Pokemon> {
    return this.http
      .post<Pokemon>(this.apiUrl, pokemon)
      .pipe(map(this.jsonPokemon));
  }

  edit(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.apiUrl}/${pokemon._id}`;
    return this.http.put(url, pokemon).pipe(map(() => pokemon));
  }

  delete(_id): Observable<any> {
    const url = `${this.apiUrl}/${_id}`;
    return this.http.delete(url).pipe(map(() => null));
  }

  private jsonPokemons(json: any[]): Pokemon[] {
    const pokemons: Pokemon[] = [];
    json.forEach(e => {
      pokemons.push(e as Pokemon);
    });
    return pokemons;
  }

  private jsonPokemon(json: any): Pokemon {
    return json as Pokemon;
  }
}
