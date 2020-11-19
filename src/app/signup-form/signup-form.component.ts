import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

   form = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   get UserName(){
     return this.form.get('username');
   }
  get Password(){
    return this.form.get('password');
  }

}
