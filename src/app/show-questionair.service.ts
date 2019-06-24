import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowQuestionairService {

  constructor( private httpService: HttpClient
  ) { }
  public ShowQuestions() {
    // it display list of questionair
   return this.httpService.get('assets/questions.json');

  }
}
