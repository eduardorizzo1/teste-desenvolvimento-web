import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PokemonsComponent } from "./pages/pokemons/pokemons.component";

import { MaterialModule } from "../material.module";
import { customLabel } from "../custom-table";
import { ToastrModule } from "ngx-toastr";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home/home.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { MatPaginatorIntl } from "@angular/material";
import { EditRemoveDialogComponent } from "./pages/admin/edit-remove-dialog/edit-remove-dialog.component";
import { AddDialogComponent } from "./pages/admin/add-dialog/add-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    HomeComponent,
    AdminComponent,
    EditRemoveDialogComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true
    })
  ],
  entryComponents: [EditRemoveDialogComponent, AddDialogComponent],

  // Alteração para Tabela Customizada através do custom-table.ts
  providers: [{ provide: MatPaginatorIntl, useValue: customLabel() }],
  bootstrap: [AppComponent]
})
export class AppModule {}
