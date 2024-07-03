import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeSectionComponent } from "./components/home-section/home-section.component";
import { Home2Component } from "./components/home2/home2.component";
import { Home3Component } from "./components/home3/home3.component";
import { FormComponent } from "./components/form/form.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, HeaderComponent, HomeSectionComponent, Home2Component, Home3Component, FormComponent, FooterComponent]
})
export class AppComponent {
  title = 'testWork';
}
