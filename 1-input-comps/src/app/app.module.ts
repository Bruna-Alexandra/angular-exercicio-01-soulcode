import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { ButtonInputComponent } from './button-input/button-input.component';


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    EmailInputComponent,
    PasswordInputComponent,
    ButtonInputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
