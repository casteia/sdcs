import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilitiesComponent } from './abilities/abilities.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AbilitiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AbilitiesComponent
  ]
})
export class CharacterSheetModule { }
