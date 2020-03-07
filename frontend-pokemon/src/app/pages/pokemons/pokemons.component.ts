import { Component, OnInit, ViewChild } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon";
import { PokemonsService } from "src/app/services/pokemons.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.scss"]
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  dataSource = new MatTableDataSource<Pokemon>(this.pokemons);
  expandedElement: Pokemon | null;
  bload: boolean = false;
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
    "cp39"
  ];

  constructor(private pokemonService: PokemonsService) {}

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
}
