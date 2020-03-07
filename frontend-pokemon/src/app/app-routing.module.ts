import { AdminComponent } from "./pages/admin/admin.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonsComponent } from "./pages/pokemons/pokemons.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pokemons", component: PokemonsComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
