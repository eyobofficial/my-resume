import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {path: '', component: ContactComponent}
]

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ContactModule {}
