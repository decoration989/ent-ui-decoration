import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SignInComponent } from './components/sign-in/sign-in.component';



@NgModule({
  declarations: [
  
    SignInComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
  ]
})
export class SharedModule { }
