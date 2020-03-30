import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  submissionComplete = false;
  fullName;
  email;

  userForm: FormGroup = this.formBuilder.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
    emailAddress: [null, Validators.required],
    firstName: [null, Validators.required],
    surname: [null, Validators.required],
    role: [null, Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  submitUserForm() {
    console.log(this.userForm);
    this.submissionComplete = true;

    this.fullName = this.userForm.controls.firstName.value;
    this.email = this.userForm.controls.emailAddress.value;
  }

}
