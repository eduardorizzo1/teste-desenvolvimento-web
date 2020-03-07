import { Pokemon } from "./../../../models/pokemon";
import { PokemonsService } from "src/app/services/pokemons.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-add-dialog",
  templateUrl: "./add-dialog.component.html",
  styleUrls: ["./add-dialog.component.scss"]
})
export class AddDialogComponent implements OnInit {
  pokemonForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private pokemonService: PokemonsService
  ) {}

  ngOnInit() {
    this.buildPokemonForm();
  }

  buildPokemonForm() {
    this.pokemonForm = this.fb.group({
      Row: [null],
      Name: [null],
      PokedexNumber: [null],
      ImgName: [null],
      Generation: [null],
      EvolutionStage: [null],
      Evolved: [false],
      FamilyID: [null],
      CrossGen: [false],
      Type1: [null],
      Type2: [null],
      Weather1: [null],
      Weather2: [null],
      StatTotal: [null],
      ATK: [null],
      DEF: [null],
      STA: [null],
      Legendary: [false],
      Aquireable: [null],
      Spawns: [null],
      Regional: [null],
      Raidable: [null],
      Hatchable: [null],
      Shiny: [false],
      Nest: [false],
      New: [false],
      NotGettable: [false],
      FutureEvolve: [null],
      cp40: [null],
      cp39: [null]
    });
  }

  submitForm() {
    const pokemon: Pokemon = this.pokemonForm.value;
    this.pokemonService.post(pokemon).subscribe();
  }
}
