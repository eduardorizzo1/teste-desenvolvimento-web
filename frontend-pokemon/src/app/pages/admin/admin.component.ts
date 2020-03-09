import { ToastrService } from "ngx-toastr";
import { EditRemoveDialogComponent } from "./edit-remove-dialog/edit-remove-dialog.component";

import { Component, OnInit, ViewChild } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog
} from "@angular/material";
import { PokemonsService } from "src/app/services/pokemons.service";
import { AddDialogComponent } from "./add-dialog/add-dialog.component";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  pokemons: Pokemon[] = [];
  dataSource = new MatTableDataSource<Pokemon>(this.pokemons);
  bload: boolean = false;
  newPokemon: Pokemon;
  displayedColumns: string[] = [
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
    "cp39",
    "excluir"
  ];

  constructor(
    private pokemonService: PokemonsService,
    private dialogRef: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllPokemons();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  getAllPokemons() {
    this.bload = true;
    this.pokemonService.getAll().subscribe(
      p => {
        this.pokemons = p;
        this.dataSource.data = p.sort((a, b) => a.Row - b.Row);
        this.bload = false;
      },
      err => console.warn("Erro ao carregar lista de pokemons, ERROR => ", err)
    );
  }

  public filtrar(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  addPokemon() {
    const dialog = this.dialogRef.open(AddDialogComponent);
    dialog.afterClosed().subscribe(res => {
      if (res) {
        this.newPokemon = res;
        this.post(this.newPokemon);
      }
    });
  }

  editar(pokemon: Pokemon) {
    console.log(pokemon);
    const dialog = this.dialogRef.open(EditRemoveDialogComponent, {
      data: [pokemon]
    });
    dialog.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  post(pokemon: Pokemon) {
    this.pokemonService.post(pokemon).subscribe(
      () => {
        this.tostrSuccess("adicionado"), this.getAllPokemons();
      },
      () => this.tostrError("adicionar")
    );
  }

  delete(pokemon: Pokemon) {
    const confirmDelete = confirm("Tem certeza que deseja excluir o Pokémon ?");
    if (confirmDelete) {
      this.pokemonService.delete(pokemon._id).subscribe(
        () => {
          (this.pokemons = this.pokemons.filter(e => e !== pokemon)),
            this.tostrSuccess("excluído"),
            this.getAllPokemons();
        },
        () => this.tostrError("excluir")
      );
    }
  }

  tostrSuccess(msg) {
    return this.toastr.success(`Pokémon ${msg} com sucesso!`);
  }

  tostrError(msg) {
    return this.toastr.error(`Erro ao ${msg} Pokémon`);
  }
}
