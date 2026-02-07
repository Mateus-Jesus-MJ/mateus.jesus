import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, FooterComponent, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('meu-portifolio');
}
