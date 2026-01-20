import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule],
  exports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule],
})
export class AngularMaterialModule {}
