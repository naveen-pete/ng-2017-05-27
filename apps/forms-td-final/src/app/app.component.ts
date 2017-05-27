import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultSecret = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.answer;
    this.user.gender = this.form.value.gender;

    this.submitted = true;
    this.form.reset();
  }
}
