import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ArticlePageComponent} from "./components/article-page/article-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import {WholecutPageComponent} from "./components/landing-pages/wholecut-page/wholecut-page.component";

const routes: Routes = [
  {path: '', component: WholecutPageComponent},
  // {path: 'articles', component: ArticlePageComponent},
  // {path: 'about', component: AboutPageComponent},
  // {path: 'contact', component: ContactPageComponent},
  // {path: 'wholecuts', component: WholecutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
