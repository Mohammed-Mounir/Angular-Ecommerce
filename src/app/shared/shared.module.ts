import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule],
  exports: [DropdownComponent],
  providers: [],
})
export class SharedModule {}
