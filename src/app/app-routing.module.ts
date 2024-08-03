import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MtgComponent} from "./mtg/mtg.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'mtg', component: MtgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
