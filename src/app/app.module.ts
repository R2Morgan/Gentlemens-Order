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
import { TitleCardComponent } from './components/shared/title-card/title-card.component';
import { WholecutPageComponent } from './components/landing-pages/wholecut-page/wholecut-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ArticlePageComponent,
    FooterComponent,
    AboutPageComponent,
    ContactPageComponent,
    TitleCardComponent,
    WholecutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
