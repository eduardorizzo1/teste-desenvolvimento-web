import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu-toolbar",
  templateUrl: "./menu-toolbar.component.html",
  styleUrls: ["./menu-toolbar.component.scss"]
})
export class MenuToolbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  pokemonsRoute() {
    this.router.navigateByUrl("/pokemons");
  }

  adminRoute() {
    this.router.navigateByUrl("/admin");
  }

  homeRoute() {
    this.router.navigateByUrl("/");
  }
}
