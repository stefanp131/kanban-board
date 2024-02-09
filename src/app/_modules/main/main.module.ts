import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';



@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  exports: [BoardComponent]
})
export class MainModule { }
