import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { GraficosModularModule } from "./graficos-modular/graficos-modular.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, GraficosModularModule],
  exports: [HomeComponent, GraficosModularModule],
})
export class PagesModule {}
