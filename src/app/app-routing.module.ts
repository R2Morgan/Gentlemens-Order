import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ArticlePageComponent} from "./components/article-page/article-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'articles', component: ArticlePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
