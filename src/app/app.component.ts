import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms'
import {NgModel} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['selvasekar', [Validators.required]],
    password: [''],
    confirmpassword: [''],
   address: this.fb.group({
      city: [''],
      state: [''],
      ps: [''],
    })
  })
  // title = 'my-first-project2';
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Selvasekar'),
  //   password: new FormControl(''),
  //   confirmpassword: new FormControl(''),
  //  address: new FormGroup({
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     ps: new FormControl(),
  //   })
  // });

  // loadAPIData() {
  //   this.registrationForm.setValue({
  //     userName: 'Selva',
  //     password: 'test',
  //     confirmpassword: 'test',

  //     address: {
  //       city: 'City',
  //       state: 'State',
  //       ps: '123456',
  //     }
  //   });
  // }
}

