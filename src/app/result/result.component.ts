import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DisplayNameService } from '../display-name.service';
import { ShowQuestionairService } from '../show-questionair.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  username: string;
  lists: object[];
  selected: string;
  options: string;
  answer: string;
  displayopt: string;
  showclass: string ;

  constructor( @Inject(DisplayNameService) private ds: DisplayNameService,
               @Inject(ShowQuestionairService) private ql: ShowQuestionairService
  ) { }

  ngOnInit() {
    //it pick the user value of username  and list of quetions from local storage
    this.username = this.ds.ShowUserName();
    this.ql.ShowQuestions().subscribe(
      data => {
        this.lists = data as object[];	 // FILL THE ARRAY WITH DATA.

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
      let arrayOption: string [];
      if (localStorage.answers != null || localStorage.answers !== undefined) {
        this.selected = JSON.parse(localStorage.getItem('answers'));
      }
  }

  showSelected(itemKey, itemAnswer) {
    if( this.selected[itemKey] === itemAnswer ){
              this.answer ="Correct Answer";
              this.showclass = "text-success";
              this.displayopt="invisible";
            }
            else{
              this.answer ="Wrong Answer";
              this.showclass = "text-danger";
              this.displayopt ="visible";
            }
    return this.selected[itemKey];
  }

}
