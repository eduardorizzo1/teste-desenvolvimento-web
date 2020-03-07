import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Pokemon } from "src/app/models/pokemon";

@Component({
  selector: "app-edit-remove-dialog",
  templateUrl: "./edit-remove-dialog.component.html",
  styleUrls: ["./edit-remove-dialog.component.scss"]
})
export class EditRemoveDialogComponent implements OnInit {
  pokemon: Pokemon[] = [];
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
    @Inject(MAT_DIALOG_DATA) public p: Pokemon[]
  ) {
    console.log(p);
    this.pokemon = p;
  }

  ngOnInit() {}

  cancelar() {
    this.dialogRef.close();
  }
}
