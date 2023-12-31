import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/user/signup-form/signup-form.component';
import { FieldmatchesDirective } from './components/validators/fieldmatches.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    FieldmatchesDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
