import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @Output() formOnSubmit:EventEmitter<string>= new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form){
    this.formOnSubmit.emit(form);
  }

}
