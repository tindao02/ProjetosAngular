import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PieChartComponent } from "./pages/graficos-modular/pie-chart/pie-chart.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "graficos-module/pie-chart", component: PieChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
