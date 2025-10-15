import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ArticlePageComponent} from "./components/article-page/article-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import {WholecutPageComponent} from "./components/landing-pages/wholecut-page/wholecut-page.component";
import {LeadMagnetPageComponent} from "./components/landing-pages/lead-magnet-page/lead-magnet-page.component";
import {PrivaryPolicyPageComponent} from "./components/legal/privary-policy-page/privary-policy-page.component";
import {TermsOfServicePageComponent} from "./components/legal/terms-of-service-page/terms-of-service-page.component";

const routes: Routes = [
  {path: '', component: LeadMagnetPageComponent},
  {path: 'suit-guide', component: LeadMagnetPageComponent},
  {path: 'articles', component: ArticlePageComponent},
  {path: 'privacy-policy', component: PrivaryPolicyPageComponent},
  {path: 'tos', component: TermsOfServicePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'wholecuts', component: WholecutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
