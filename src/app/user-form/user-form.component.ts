import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicValidators } from './basicValidation';
import User from 'app/users/user';
import {UserService} from 'app/users/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserService]
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  user = new User();
  title: string;

  constructor(
    public fb: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.form = fb.group({
      name : ['', Validators.required],
      email : ['', Validators.compose([
        Validators.required, BasicValidators.hasInvalidEmail
      ])],
      phone: [],
      address: this.fb.group({
        street: [''],
        suite: [],
        city: [],
        zipcode: []
      })
    });

  }

  ngOnInit() {
    this._route.params.subscribe( params => {
      var id = +params['id'];
      this.title  = id ? "Edit" : "New";
      if ( !id )
        return;
      this._userService.getUser(id).subscribe(user => {
        this.user  = user;
        console.log(user);
      },
      response => {
        if (response.status == 404 ){
          this._router.navigate(['/not-found']);
        }

      });
    });
  }

  saveUser(){
    var result;

    if ( this.user.id ){
      console.log(this.user);
      result = this._userService.updateUser(this.user)
    }else{
      result = this._userService.addUser(this.form.value);
    }

    result.then(res => {
      console.log(this.form)
      console.log(this.user)
      console.log(res);
      this.form.markAsPristine();
      this._router.navigate(['/users'])
    });
  }

}
