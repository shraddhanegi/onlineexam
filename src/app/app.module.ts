import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplayNameService } from './display-name.service';
import { ShowQuestionairService } from './show-questionair.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    QuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DisplayNameService, ShowQuestionairService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
