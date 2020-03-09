import { Pokemon } from "./../../../models/pokemon";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-dialog",
  templateUrl: "./add-dialog.component.html",
  styleUrls: ["./add-dialog.component.scss"]
})
export class AddDialogComponent implements OnInit {
  pokemonForm: FormGroup;
  pokemon: Pokemon[] = [];

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<Pokemon>
  ) {}

  ngOnInit() {
    this.buildPokemonForm();
  }

  buildPokemonForm() {
    this.pokemonForm = this.fb.group({
      Row: [null],
      Name: [null, Validators.required],
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
    this.pokemon = this.pokemonForm.value;
  }

  cancelar() {
    this.dialogRef.close();
  }
}
