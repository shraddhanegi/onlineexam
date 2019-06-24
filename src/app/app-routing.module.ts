import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
                        { path : "registration", component : RegistrationComponent },
                        { path :"quiz", component : QuizComponent },
                        { path : "result", component : ResultComponent },
                        { path:"", redirectTo:"registration", pathMatch: "full"}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
