import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuToolbarComponent } from "./menu-toolbar/menu-toolbar.component";
import { MaterialModule } from "src/material.module";

@NgModule({
  declarations: [MenuToolbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MenuToolbarComponent]
})
export class SharedModule {}
