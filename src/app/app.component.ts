import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgMaterialModule } from './_modules/ng-material/ng-material.module';
import { MainModule } from './_modules/main/main.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainModule, NgMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-board';
}
