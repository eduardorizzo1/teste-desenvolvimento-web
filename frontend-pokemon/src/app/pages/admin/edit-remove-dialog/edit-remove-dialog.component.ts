import { PokemonsService } from "src/app/services/pokemons.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Pokemon } from "src/app/models/pokemon";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-edit-remove-dialog",
  templateUrl: "./edit-remove-dialog.component.html",
  styleUrls: ["./edit-remove-dialog.component.scss"]
})
export class EditRemoveDialogComponent implements OnInit {
  pokemon: Pokemon[] = [];
  pokemonForm: FormGroup;
  checked: boolean = true;
  columns: string[] = [
    "Row",
    "Name",
    "PokedexNumber",
    "ImgName",
    "Generation",
    "EvolutionStage",
    "Evolved",
    "FamilyID",
    "CrossGen",
    "Type1",
    "Type2",
    "Weather1",
    "Weather2",
    "StatTotal",
    "ATK",
    "DEF",
    "STA",
    "Legendary",
    "Aquireable",
    "Spawns",
    "Regional",
    "Raidable",
    "Hatchable",
    "Shiny",
    "Nest",
    "New",
    "NotGettable",
    "FutureEvolve",
    "cp40",
    "cp39"
  ];

  constructor(
    public dialogRef: MatDialogRef<EditRemoveDialogComponent>,
    public fb: FormBuilder,
    public pokemonService: PokemonsService,
    @Inject(MAT_DIALOG_DATA) public p: Pokemon[]
  ) {
    console.log(p);
    this.pokemon = p;
  }

  ngOnInit() {
    this.buildPokemonForm();
  }

  cancelar() {
    this.dialogRef.close();
  }

  deletePokemon(pokemon: Pokemon) {
    const confirmDelete = confirm(
      "Tem certeza que deseja excluir esse Pokémon?"
    );

    if (confirmDelete) {
      this.dialogRef.close(pokemon);
    }
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
}
