import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DisplayNameService } from '../display-name.service';
import { ShowQuestionairService } from '../show-questionair.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  username: string;
  lists: object[];
  constructor(private router: Router,
              @Inject(DisplayNameService) private ds: DisplayNameService,
              @Inject(ShowQuestionairService) private ql: ShowQuestionairService
  ) { }

  ngOnInit() {

    this.username = this.ds.ShowUserName();
    this.ql.ShowQuestions().subscribe(
      data => {
        this.lists = data as object[];	 // FILL THE ARRAY WITH DATA.
        //console.log( this.lists);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

  }

  showResult(quizForm) {
    // it save the answer to the local storage
    let myArray: any;
    myArray = quizForm.form.value;

    if (localStorage.answers != null || localStorage.answers !== undefined) {
      localStorage.removeItem('answers');
    }
    localStorage.setItem('answers', JSON.stringify(myArray));

    this.router.navigate(['/result']);
  }
}
