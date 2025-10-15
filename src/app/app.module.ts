import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { WholecutPageComponent } from './components/landing-pages/wholecut-page/wholecut-page.component';
import { LeadMagnetPageComponent } from './components/landing-pages/lead-magnet-page/lead-magnet-page.component';
import { ChoicePopupComponent } from "./components/landing-pages/lead-magnet-page/choice-popup/choice-popup.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {MatButton} from "@angular/material/button";
import { PrivaryPolicyPageComponent } from './components/legal/privary-policy-page/privary-policy-page.component';
import { TermsOfServicePageComponent } from './components/legal/terms-of-service-page/terms-of-service-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ArticlePageComponent,
    FooterComponent,
    AboutPageComponent,
    ContactPageComponent,
    WholecutPageComponent,
    LeadMagnetPageComponent,
    ChoicePopupComponent,
    PrivaryPolicyPageComponent,
    TermsOfServicePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButton,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
